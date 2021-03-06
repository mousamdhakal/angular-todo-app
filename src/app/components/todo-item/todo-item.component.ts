import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  setTextClass() {
    let classes = {
      todos__text: true,
      'todos__text--complete': this.todo.complete
    }

    return classes;
  }

  setCompletedClass() {
    let classes = {
      far: true,
      'fa-square': !this.todo.complete,
      'fa-check-square': this.todo.complete
    }

    return classes;
  }

  onToggle(todo) {
    todo.complete = !todo.complete;
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
