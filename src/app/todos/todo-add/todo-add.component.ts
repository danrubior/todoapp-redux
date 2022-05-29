import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  textInput = new FormControl(null, Validators.required);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addTodo() {
    if (this.textInput.invalid) return;

    this.textInput.reset();
    this.store.dispatch(actions.create(this.textInput.value));
  }
}
