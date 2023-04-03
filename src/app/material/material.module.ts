import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    DragDropModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    DragDropModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule { }
