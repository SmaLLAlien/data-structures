import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {StackService} from "../stack.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array = [];

  constructor(public stack: StackService<string>) {}


  addItemToStack(): void {
    this.stack.push(this.taskControl.value as string);
  }

  deleteItem(): void {
    this.stack.pop();
  }

  ngOnInit(): void {
    this.stack.push("David");
    this.stack.push("Raymond");
    this.stack.push("Bryan");

    console.log("length: " + this.stack.length());
    console.log(this.stack.peek());

    const popped = this.stack.pop();
    console.log("The popped element is: " + popped);
    console.log(this.stack.peek());

    this.stack.push("Cynthia");
    console.log(this.stack.peek());

    this.stack.clear();
    console.log("length: " + this.stack.length());
    console.log(this.stack.peek());

    this.stack.push("Clayton");
    console.log(this.stack.peek());

  }
}
