"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const Task_1 = require("../modals/Task");
class TaskService {
    constructor() {
        this.tasks = [];
    }
    create(title) {
        const newTask = {
            id: TaskService.idCounter++,
            title,
            status: Task_1.TaskStatus.TODO
        };
        this.tasks.push(newTask);
        return newTask;
    }
    update(id, updates) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            Object.assign(task, updates);
        }
        return task;
    }
    list() {
        return this.tasks;
    }
    findByStatus(status) {
        return this.tasks.filter(t => t.status === status);
    }
    clear() {
        this.tasks = [];
    }
}
exports.TaskService = TaskService;
TaskService.idCounter = 1;
