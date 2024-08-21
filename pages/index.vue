<script setup lang="ts">
import { ref } from 'vue'
import { useTasks } from '~/composables/useTasks'
import TaskItem from '~/components/TaskItem.vue'
import SubtaskItem from '~/components/SubtaskItem.vue'

const {
  tasks,
  loading,
  error,
  getTasks,
  toggleTaskDone,
  toggleSubtaskDone,
  subtasksSorted,
} = useTasks()

onMounted(() => {
  getTasks()
})
</script>

<template>
  <div class="bg-pageBg min-h-screen p-4">
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center text-primary">
        Task List
      </h1>

      <div v-if="loading" class="text-center">
        <button
          type="button"
          class="bg-primary text-white font-bold py-2 px-4 rounded flex items-center"
          disabled
        >
          <svg
            class="animate-spin h-5 w-5 mr-3 text-secondary"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
              fill="none"
            ></circle>
            <path d="M4 12a8 8 0 018-8v8H4z" fill="currentColor"></path>
          </svg>
          Loading...
        </button>
      </div>

      <div v-if="error" class="text-red-500 text-center">
        <p>{{ error }}</p>
      </div>

      <div
        v-if="tasks.length === 0 && !loading && !error"
        class="text-center text-gray-300"
      >
        <p>No tasks to display</p>
      </div>
      <div
        v-for="task in tasks"
        :key="task.id"
        class="mb-4 p-4 bg-cardBg border border-secondary rounded-lg shadow-lg"
      >
        <TaskItem :task="task" :toggleTaskDone="toggleTaskDone">
          <ol class="list-decimal pl-8">
            <span v-if="task.subtasks.length === 0" class="text-gray-500">
              No subtasks to display
            </span>
            <SubtaskItem
              v-for="(subtask, index) in subtasksSorted(task)"
              :key="subtask.id"
              :subtask="subtask"
              :task="task"
              :toggleSubtaskDone="toggleSubtaskDone"
            />
          </ol>
        </TaskItem>
      </div>
    </div>
  </div>
</template>
