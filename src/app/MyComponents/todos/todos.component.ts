import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  todos:Todo[];
  constructor(){
    this.todos = [
      {
        sno:1,
        title:"this is 1st title",
        desc:"Description",
        active: true
      },
      {
        sno:2,
        title:"this is 2nd title",
        desc:"Description",
        active: true
      },
      {
        sno:3,
        title:"this is 3rd title",
        desc:"Description",
        active: true
      }
    ]
  }


  ngOnInit(): void {      
  }

  deleteTodo(todo:Todo) {
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index, 1)
  }
}
