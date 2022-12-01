import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {GraphService} from "../graph.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array = [];

  constructor(private graph: GraphService) {
  }

  addItemToList(): void {

  }

  deleteItem(i: number): void {

  }

  ngOnInit(): void {
    this.graph.addEdge(0,1);
    this.graph.addEdge(0,2);
    this.graph.addEdge(1,3);
    this.graph.addEdge(2,4);
    this.graph.showGraph();
    console.log('Depth-first search ->');
    this.graph.depsFirstSearch(0);
    this.graph.marked.fill(false);

    console.log('Breadth-First Search ->');
    this.graph.breadthFirstSearch(0);
    console.log(this.graph);
  }
}
