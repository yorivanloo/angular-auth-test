import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { CustomMaterialModule } from './_modules/material.module';

import { AuthGuard } from './_auth/index';
import { AuthenticationService, TaskService } from './_services/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        TasksComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CustomMaterialModule,
        AppRouting
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        TaskService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
