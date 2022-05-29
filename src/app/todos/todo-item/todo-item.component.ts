import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('editInput') textEditInput!: ElementRef;

  checkCompleted!: FormControl;
  textInput!: FormControl;

  editing = false;

  constructor() {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);
  }

  editTodo() {
    this.editing = true;

    setTimeout(() => {
      this.textEditInput.nativeElement.select();
    }, 1);
  }

  finishEdition() {
    this.editing = false;
  }
}
