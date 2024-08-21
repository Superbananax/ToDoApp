import { ref } from 'vue'
import {
  fetchTasks,
  fetchSubtasks,
  updateTask,
  updateSubtask,
} from '~/utils/api'
import { Task, Subtask } from '~/types/task'

export function useTasks() {
  const tasks = ref<Task[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getTasks = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetchTasks()
      const processedTasks = await Promise.all(
        response.data.map(async (task: Task) => {
          try {
            if (Array.isArray(task.subtasks) && task.subtasks.length > 0) {
              task.subtasks = await fetchSubtasks(task.subtasks).then(
                responses =>
                  responses
                    .filter(response => response && response.status === 200)
                    .map(response => response?.data)
              )
            } else {
              task.subtasks = []
            }
          } catch (err) {
            console.warn(`Failed ${task.id}:`, err)
          }
          return task
        })
      )
      tasks.value = processedTasks
    } catch (err) {
      console.error('Error:', err)
      if (err.response && err.response.status === 404) {
        error.value = 'No tasks found'
      } else {
        error.value = err.message || 'Failed fetch'
      }
    } finally {
      loading.value = false
    }
  }

  const toggleTaskDone = async (taskId: string) => {
    const task = tasks.value.find(t => t.id === taskId)
    if (task) {
      const newDoneState = !task.done

      try {
        await updateTask(task.id, { done: newDoneState })
        task.done = newDoneState

        for (const subtask of task.subtasks) {
          subtask.done = newDoneState
          await updateSubtask(subtask.id, { done: newDoneState })
        }
      } catch (err) {
        error.value = 'Failed to update task'
      }
    }
  }

  const toggleSubtaskDone = async (subtask: Subtask, task: Task) => {
    subtask.done = !subtask.done

    try {
      await updateSubtask(subtask.id, { done: subtask.done })

      if (task.subtasks.every(st => st.done)) {
        task.done = true
        await updateTask(task.id, { done: true })
      } else {
        task.done = false
        await updateTask(task.id, { done: false })
      }
    } catch (err) {
      error.value = 'Failed to update subtask'
    }
  }

  const subtasksSorted = (task: Task) => {
    return task.subtasks.sort((a, b) => a.title.localeCompare(b.title))
  }

  return {
    tasks,
    loading,
    error,
    getTasks,
    toggleTaskDone,
    toggleSubtaskDone,
    subtasksSorted,
  }
}
