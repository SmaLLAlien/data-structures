import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array = [];

  addItemToList(): void {

  }

  deleteItem(i: number): void {

  }
}
