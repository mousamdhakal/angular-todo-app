import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  text:String;

  @Output() addTodo: EventEmitter<String> = new EventEmitter();

  ngOnInit(): void {
    this.text = "";
  }

  handleSubmit(text) {
    this.addTodo.emit(text);
    this.text ="";
  }

}
