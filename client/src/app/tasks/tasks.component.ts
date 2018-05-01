import { Component, OnInit } from '@angular/core';

import { Task } from '../_models/index';
import { TaskService } from '../_services/index';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    tasks: Task[] = [];
    model: any = {};

    constructor(private taskService: TaskService) { }

    ngOnInit() {
        this.loadAllTasks();
    }

    private loadAllTasks() {
        this.taskService.getAll().subscribe(tasks => { this.tasks = tasks; });
    }

    add() {
        this.taskService.add({ title: this.model.title, completed: false }).subscribe(() => { this.loadAllTasks(); });
    }

    delete(index) {
        this.taskService.delete(index).subscribe(() => { this.loadAllTasks(); });
    }

    update(index) {
        if (this.tasks[index].completed) {
            this.taskService.update(index, false).subscribe(() => { this.loadAllTasks(); });
        }
        else {
            this.taskService.update(index, true).subscribe(() => { this.loadAllTasks(); });
        }
    }
}
