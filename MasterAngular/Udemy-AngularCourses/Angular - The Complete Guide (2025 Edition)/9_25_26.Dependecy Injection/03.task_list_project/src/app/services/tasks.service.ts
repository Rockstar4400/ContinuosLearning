import { inject, Service, signal } from "@angular/core";
import { Task } from "../models/task.model";
import { TaskStatus } from "../models/task.model";
import { LoggingService } from "./logging.service";

@Service()
export class TasksService {
    private tasks = signal<Task[]>([]);
    private loggingService = inject(LoggingService);

    // It work's to not manipulate data
    allTasks = this.tasks.asReadonly();

    addTask(taskData: { title: string, description: string}) {
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        }
        this.tasks.update((oldTask) => [...oldTask, newTask]);
        this.loggingService.logAction('ADDED TASK' + taskData.title);
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus){
        this.tasks.update((oldTasks) => 
            oldTasks.map(

                (task) =>
                task.id === taskId ?
                { ...task, status: newStatus } : task
            )
        );
        this.loggingService.logAction('TASK UPDATED' + newStatus);
    }

}