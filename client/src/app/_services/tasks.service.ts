import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Task } from '../_models/index';

@Injectable()
export class TaskService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Task[]>(appConfig.apiUrl + '/tasks');
    }

    add(task: Task) {
        return this.http.post(appConfig.apiUrl + '/add/task', task);
    }

    delete(index: number) {
        return this.http.post(appConfig.apiUrl + '/delete', { index });
    }

    update(index: number, completed: boolean) {
        return this.http.post(appConfig.apiUrl + '/update', { index, completed });
    }
}
