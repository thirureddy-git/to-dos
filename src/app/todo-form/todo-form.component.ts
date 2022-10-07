import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  //formItem = "";
  todo:Todo = {} as Todo;
  @Output() addTodo = new EventEmitter<Todo>();

  addNewTodo():void{
    this.addTodo.emit(this.todo);
    //console.log(todo);
  }

  constructor() { }
  ngOnInit(): void {
  }

}
