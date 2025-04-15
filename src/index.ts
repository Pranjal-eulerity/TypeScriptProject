
 
import { TaskService } from './services/TaskServices';
import { TaskStatus } from './modals/Task';
import { Polling } from './utils/Fun';

const service = new TaskService();

service.create("Build TypeScript project");
service.create("Review pull request");
service.create("Polling");

service.update(2, { status: TaskStatus.IN_PROGRESS });
service.update(3, { status: TaskStatus.DONE });

console.log("📋 All Tasks:", service.list());
console.log("✅ Done Tasks:", service.findByStatus(TaskStatus.DONE));

Polling();