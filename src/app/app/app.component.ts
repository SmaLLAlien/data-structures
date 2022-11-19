import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {QueueService} from "../queue.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array = [];

  constructor(public queue: QueueService<string>) {
  }

  addItemToList(): void {
    const value = this.taskControl.value;
    if (value) {
      this.queue.enqueue(value)
    }

    this.clearInput();
  }

  deleteItem(): void {
    this.queue.dequeue();
  }

  ngOnInit(): void {
    this.queue.enqueue('Meredith');
    this.queue.enqueue('Cynthia');
    this.queue.enqueue('Jennifer');

    console.log(this.queue.toString());

    this.queue.dequeue();

    console.log(this.queue.toString());
    console.log(`Front of queue: ${this.queue.front()}`);
    console.log(`Back of queue: ${this.queue.back()}`);
  }

  getItems(): string[] {
    return this.queue.empty() ? [] : [this.queue.front()];
  }

  private clearInput(): void {
    this.taskControl.reset(null);
  }
}
