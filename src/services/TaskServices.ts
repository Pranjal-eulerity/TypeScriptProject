import { Task, TaskStatus, TaskUpdate } from '../modals/Task';

export class TaskService {
  private tasks: Task[] = [];
  private static idCounter = 1;

  create(title: string): Task {
    const newTask: Task = {
      id: TaskService.idCounter++,
      title,
      status: TaskStatus.TODO
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, updates: TaskUpdate): Task | undefined {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      Object.assign(task, updates);
    }
    return task;
  }

  list(): Readonly<Task[]> {
    return this.tasks;
  }

  findByStatus(status: TaskStatus): Task[] {
    return this.tasks.filter(t => t.status === status);
  }

  clear(): void {
    this.tasks = [];
  }
}