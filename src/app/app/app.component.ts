import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {LinkedListService} from "../linked-list.service";
import {NodeService} from "../node.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array = [];

  constructor(private linkedList: LinkedListService) {
  }

  addItemToList(): void {
    const value = this.taskControl.value;
    if (value) {
      let lastNode: NodeService<string>;
      for (let node of this.linkedList) {
        if (node && !node?.next) {
          lastNode = node;
        }
      }
      // @ts-ignore
      this.linkedList.insert(value, lastNode.element);
    }
    this.clearInput();
  }

  deleteItem(node: NodeService<string>): void {
    this.linkedList.remove(node.element);
  }

  ngOnInit(): void {
    this.linkedList.insert("Conway", "head");
    this.linkedList.insert("Russellville", "Conway");
    this.linkedList.insert("Alma", "Russellville");
    this.linkedList.display();

    this.linkedList.remove("Carlisle");
    this.linkedList.display();
  }

  getItems(): LinkedListService & Iterable<NodeService<string>> {
    return this.linkedList as any;
  }

  private clearInput(): void {
    this.taskControl.reset(null);
  }
}
