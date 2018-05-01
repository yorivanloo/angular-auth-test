import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatListModule
    ],
    exports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatListModule
    ],
})
export class CustomMaterialModule { }
