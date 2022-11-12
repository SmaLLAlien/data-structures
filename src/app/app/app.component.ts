import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ListService} from "../list.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);

  constructor(public list: ListService<string>) {}

  ngOnInit(): void {
    this.list.append("Clayton");
    this.list.append("Raymond");
    this.list.append("Cynthia");
    this.list.append("Jennifer");
    this.list.append("Bryan");
    this.list.append("Danny");

    this.list.front();
    console.log(this.list.getElement());

    this.list.next();
    console.log(this.list.getElement());

    this.list.next();
    this.list.next();
    this.list.prev();
    console.log(this.list.getElement());

  }

  deleteItem(i: number): void {
    this.list.moveTo(i);
    const element = this.list.getElement();
    this.list.remove(element);
  }

  addItemToList(): void {
    const item: string = this.taskControl.value as string;
    this.list.append(item);
    this.taskControl.patchValue('');
  }
}
