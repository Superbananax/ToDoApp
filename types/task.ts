export interface Subtask {
  id: string
  title: string
  done: boolean
}

export interface Task {
  id: string
  title: string
  createdAt: string
  done: boolean
  subtasks: Subtask[]
}
