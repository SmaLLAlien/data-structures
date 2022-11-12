import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StackService<T> {
  private dataStore: T[] = [];
  private stackLength = 0;

  constructor() { }

  push(element: T): void {
    this.dataStore[this.stackLength] = element;
    this.stackLength += 1;
  }

  pop(): T {
    this.stackLength -= 1;
    return this.dataStore[this.stackLength];
  }

  peek(): T {
    return this.dataStore[this.stackLength - 1];
  }

  length(): number {
    return this.stackLength;
  }

  clear(): void {
    this.stackLength = 0;
    this.dataStore = [];
  }
}
