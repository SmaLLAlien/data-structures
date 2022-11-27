import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HashTableService} from "../hash-table.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array = [];

  constructor(public hash: HashTableService) {
  }

  addItemToList(): void {
    const value = this.taskControl.value;
    if (value) {
      this.hash.put(value);
    }
  }

  deleteItem(value: string): void {
    this.hash.delete(value);
  }

  ngOnInit(): void {
    const someNames = ["David", "Jennifer", "Donnie", "Raymond",
      "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

    for (let i = 0; i < someNames.length; ++i) {
      this.hash.put(someNames[i]);
    }
    this.hash.showDistro();
  }
}
