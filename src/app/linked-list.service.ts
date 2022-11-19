import { Injectable } from '@angular/core';
import {NodeService} from "./node.service";

@Injectable({
  providedIn: 'root'
})
export class LinkedListService {
  head = new NodeService('head');
  // @ts-ignore
  current: NodeService<string>;

  constructor() { }

  find(item: string): NodeService<string> {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next as NodeService<string>;
    }
    return currNode;
  }

  insert(newElement: string, after: string): void {
    const newNode = new NodeService(newElement);
    const current = this.find(after);
    newNode.next = current.next as NodeService<string>;
    current.next = newNode;
  }

  display(): void {
    let currNode = this.head;
    while (!(currNode.next === null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  findPrevious(item: string): NodeService<string> {
    let currNode = this.head;
    while (!(currNode.next === null) && (currNode.next.element !== item)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item: string): void {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
      prevNode.next = prevNode.next.next;
    }
  }

  [Symbol.iterator](): LinkedListService {
    this.current = this.head;
    return this;
  }

  next(): {done: boolean, value?: NodeService<string>} {
    if (this.current?.next) {
      this.current = this.current.next as NodeService<string>;
      return { done: false, value: this.current };
    } else {
      return { done: true };
    }
  }
}
