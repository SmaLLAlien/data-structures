import {Component, OnInit} from '@angular/core';
import {ArrayService} from "../array.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'data_structures';
  array = [];
  min: number = Infinity;
  max: number = -Infinity;
  searched: number = Infinity;
  searchControl = new FormControl(null, Validators.required);

  constructor(public arrayService: ArrayService) {
  }

  ngOnInit(): void {
    this.arrayService.setData();
  }

  sort(type: string) {
    if (type === 'merge') {
      this.arrayService.dataStore = this.arrayService.mergeSort(this.arrayService.dataStore);
    }

    if (type === 'quick') {
      this.arrayService.dataStore = this.arrayService.quickSort(this.arrayService.dataStore);
    }
  }

  setData(): void {
    this.arrayService.setData();
    this.min = Infinity;
    this.max = -Infinity;
  }

  findMin(): void {
    this.min = this.arrayService.findMin(this.arrayService.dataStore);
  }

  findMax(): void {
    this.max = this.arrayService.findMax(this.arrayService.dataStore);
  }

  find() {
    const value = this.searchControl.value;
    if (!value) {
      return;
    }
    const index = this.arrayService.sequentialSearch(this.arrayService.dataStore, value);
    if (index !== -1) {
      this.searched = this.arrayService.dataStore[index];
    }
  }
}
