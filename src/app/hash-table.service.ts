import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashTableService {
  table = new Array(137);
  private current: number = 0;


  simpleHash(data: string) {
    let total = 0;
    for (let i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  betterHash(str: string): number {
    const H = 37;
    let total = 0;

    for (let i = 0; i < str.length; ++i) {
      total += H * total + str.charCodeAt(i);
    }

    total = total % this.table.length;

    if (total < 0) {
      total += this.table.length - 1;
    }

    return +total;
  }


  put(data: string) {
    const pos = this.betterHash(data);
    this.table[pos] = data;
  }

  showDistro(): void {
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        console.log(`${i}: ${this.table[i]}`);
      }
    }
  }

  get(key: string) {
    return this.table[this.betterHash(key)];
  }

  delete(data: string) {
    const pos = this.betterHash(data);
    this.table[pos] = undefined;
  }

  [Symbol.iterator](): any {
    this.current = 0;
    return this;
  }

  next(): {done: boolean, value?: any} {
    if (this.current < this.table.length) {
      let currElem = this.table[this.current];
      if (!currElem) {
        while (this.current < this.table.length && !this.table[this.current]) {
          this.current++;
        }
        currElem = this.table[this.current];
        this.current++;
      } else {
        this.current++;
      }
      return { done: false, value: currElem };
    } else {
      return { done: true };
    }
  }
}
