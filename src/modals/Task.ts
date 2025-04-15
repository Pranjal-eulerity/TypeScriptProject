export enum TaskStatus {
    TODO = 'To Do',
    IN_PROGRESS = 'In Progress',
    DONE = 'Done'
  }

  export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
    tags?: string[];
  }

  export type TaskUpdate = Partial<Omit<Task, 'id'>>;