import {Inject, Injectable} from '@angular/core';
import {ARRAY_NUM_ELEMENTS} from "./app.module";

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  dataStore: number[] = [];
  pos = 0;

  constructor(@Inject(ARRAY_NUM_ELEMENTS) public numElements: number) {
    for (let i = 0; i < numElements; ++i) {
      this.dataStore[i] = i;
    }
  }

  setData(): void {
    for (let i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() *
        (this.numElements + 1));
    }
  }

  clear(): void {
    for (let i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0;
    }
  }

  insert(element: number): void {
    this.dataStore[this.pos++] = element;
  }

  toString(): string {
    let retstr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
        retstr += "\n";
      }
    }
    return retstr;
  }

  swap(arr: number[], index1: number, index2: number): void {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  bubbleSort(): void {
    const numElements = this.dataStore.length;
    for (let outer = numElements; outer >= 2; --outer) {
      for (let inner = 0; inner <= outer - 1; ++inner) {
        if (this.dataStore[inner] > this.dataStore[inner + 1]) {
          this.swap(this.dataStore, inner, inner + 1);
        }
      }
    }
  }

  selectionSort(): void {
    let min;
    for (let outer = 0; outer <= this.dataStore.length - 2; ++outer) {
      min = outer;
      for (let inner = outer + 1;
           inner <= this.dataStore.length - 1; ++inner) {
        if (this.dataStore[inner] < this.dataStore[min]) {
          min = inner;
        }
      }
      this.swap(this.dataStore, outer, min);
    }
  }

  insertionSort() {
    let temp, inner;
    for (let outer = 1; outer <= this.dataStore.length - 1; ++outer) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
        this.dataStore[inner] = this.dataStore[inner - 1];
        --inner;
      }
      this.dataStore[inner] = temp;
    }
  }

  shellSort() {
    const l = this.dataStore.length;
    let gap = Math.floor(l / 2);
    while (gap >= 1) {
      for (let i = gap; i < l; i++) {
        const current = this.dataStore[i];
        let j = i;
        while (j > 0 && this.dataStore[j - gap] > current) {
          this.dataStore[j] = this.dataStore[j - gap];
          j -= gap;
        }
        this.dataStore[j] = current;
      }
      gap = Math.floor(gap / 2);
    }
    return this.dataStore;
  }

  quickSort(origArray: any[]): any[] {
    if (origArray.length <= 1) {
      return origArray;
    } else {

      let left = [];
      let right = [];
      let newArray: any[] = [];
      let pivot = origArray.pop();
      let length = origArray.length;

      for (let i = 0; i < length; i++) {
        if (origArray[i] <= pivot) {
          left.push(origArray[i]);
        } else {
          right.push(origArray[i]);
        }
      }

      return newArray.concat(this.quickSort(left), pivot, this.quickSort(right));
    }
  }

  mergeSort(arr: any[]): any[] {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)

    let left = this.mergeSort(arr.slice(0, mid))
    let right = this.mergeSort(arr.slice(mid))
    return this.merge(left, right)
  }

  private merge(left: any[], right: any[]): any[] {
    let sortedArr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }

    return [...sortedArr, ...left, ...right]
  }

  findMin(arr: number[]): number {
    let min = arr[0];
    for (let i = 1; i < arr.length; ++i) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

  findMax(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
}
