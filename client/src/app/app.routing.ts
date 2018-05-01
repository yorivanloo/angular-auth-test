import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { AuthGuard } from './_auth/index';

const routes: Routes = [
    { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRouting { }
