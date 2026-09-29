export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE'; // literal types

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
