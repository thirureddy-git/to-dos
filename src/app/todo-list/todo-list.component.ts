import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  todos:Todo[] = [{
    id:1,
    task: "Water the plants",
    completed: false
  },
  {
    id:2,
    task: "Run to Grocery Store",
    completed: false
  },
  {
    id:3,
    task: "Wash the Car",
    completed: true
  },
]

  removeTodo(index:number):void{
    this.todos.splice(index,1);
  }

  completeTodo(index:number):void{
  this.todos[index].completed = true;
}

  newTodo(t:Todo):void{
    this.todos.push(t);
  }

}
