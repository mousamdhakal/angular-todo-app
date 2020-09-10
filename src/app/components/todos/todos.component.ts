import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  count: number;
  constructor() { }

  ngOnInit() {
    this.todos = [
      { id: 1, text: "Make bed", complete: true },
        { id: 2, text: "Do assignment", complete: false },
        { id: 3, text: "Play football", complete: false },
    ];
    this.count = 4;
  }

}
