import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos() {
    return [
      { id: 1, text: 'Make bed', complete: true },
      { id: 2, text: 'Do assignment', complete: false },
      { id: 3, text: 'Play football', complete: false },
    ];
  }
}
