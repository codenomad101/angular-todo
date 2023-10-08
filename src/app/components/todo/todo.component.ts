import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { Form } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos!: Todo[];
  inputTodo: string = '';
  constructor() {}
  ngOnInit(): void {
    this.todos = [
      {
        content: 'first content',
        complete: true,
      },
      {
        content: 'second content',
        complete: false,
      },
    ];
  }
  deleteTodo(id: any) {
    this.todos = this.todos.filter((todo, index) => index !== id);
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      complete: false,
    });
    this.inputTodo = '';
  }
}
