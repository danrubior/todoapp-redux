import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoListComponent,
    TodoPageComponent,
    TodoItemComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoPageComponent],
})
export class TodoModule {}
