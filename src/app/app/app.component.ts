import {Component, OnInit} from '@angular/core';
import {ArrayService} from "../array.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'data_structures';
  array = [];

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
}
