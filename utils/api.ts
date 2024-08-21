import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchTasks = () => apiClient.get('/tasks')

export const fetchSubtasks = (subtaskIds: string[]) =>
  Promise.all(
    subtaskIds.map(id =>
      apiClient.get(`/subtasks/${id}`).catch(err => {
        if (err.response && err.response.status === 404) {
          return null
        }
        throw err
      })
    )
  ).then(responses => responses.filter(response => response !== null))

export const updateTask = (taskId: string, data: any) =>
  apiClient.patch(`/tasks/${taskId}`, data)

export const updateSubtask = (subtaskId: string, data: any) =>
  apiClient.patch(`/subtasks/${subtaskId}`, data)
