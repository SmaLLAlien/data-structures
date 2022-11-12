import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService<T> {
  listSize = 0;
  pos = 0;
  dataStore: T[] = [];

  constructor() { }

  append(element: T): void {
    this.dataStore[this.listSize] = element;
    this.listSize += 1;
  }

  find(element: T): number {
    return this.dataStore.findIndex(el => el === element);
  }

  remove(element: T): boolean {
    const foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt,1);
      this.listSize -= 1;
      return true;
    }
    return false;
  }

  length(): number {
    return this.listSize;
  }

  toString(): T[] {
    return this.dataStore;
  }

  insert(element: T, afterElement: T): boolean {
    const insertPos = this.find(afterElement);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      this.listSize += 1;
      return true;
    }
    return false;
  }

  clear(): void {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
  }

  contains(element: T): boolean {
    return !!this.dataStore.find(el => el === element);
  }

  front(): void {
    this.pos = 0;
  }

  end(): void  {
    this.pos = this.listSize - 1;
  }

  prev(): void  {
    if (this.pos > 0) {
      this.pos -= 1;
    }
  }

  next(): void  {
    if (this.pos < this.listSize-1) {
      this.pos += 1;
    }
  }

  currPos(): number  {
    return this.pos;
  }

  moveTo(position: number): void {
    this.pos = position;
  }

  getElement(): any {
    return this.dataStore[this.pos];
  }
}
