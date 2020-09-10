import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  count: number;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.count = 4;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id != todo.id);
  }

  addTodo(todo:string) {
    let newTodo:Todo = {
      id: this.count++,
      text: todo,
      complete:false
    }
    this.todos.push(newTodo);
  }
}
