// Task.ts
export class Task {
    constructor(
        public title: string,
        public description: string,
        public dueDate: Date,
        public isCompleted: boolean = false
    ) {}

    updateDetails(title: string, description: string, dueDate: Date): void {
        // Update task details
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    markAsCompleted(): void {
        // Mark task as completed
        this.isCompleted = true;
    }
}
// TaskManager.ts


export class TaskManager {
    private tasks: Task[] = [];

    addTask(task: Task): void {
        // Add task to the array
        this.tasks.push(task);
    }

    updateTask(task: Task, title: string, description: string, dueDate: Date): void {
        // Update task details
        task.updateDetails(title, description, dueDate);
    }

    deleteTask(task: Task): void {
        // Remove task from the array
        this.tasks = this.tasks.filter(t => t !== task);
    }

    // Implement other methods as needed
}
