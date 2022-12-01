import {Inject, Injectable} from '@angular/core';
import {NUMBER_OF_GRAPHS} from "./app.module";

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  vertices: number = 0;
  edges = 0;
  adj: any[] = [];
  marked: any[] = [];
  edgeTo: any[] = [];


  constructor(@Inject(NUMBER_OF_GRAPHS) private v: number) {
    this.vertices = v;
    for (let i = 0; i < this.vertices; ++i) {
      this.adj[i] = [];
      // this.adj[i].push("");
      this.marked[i] = false;
    }
  }

  addEdge(v: number, w: number) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph() {
    for (let i = 0; i < this.vertices; ++i) {
      console.log(`${i} ->`);
      for (let j = 0; j < this.vertices; ++j) {
        if (this.adj[i][j] !== undefined)
          console.log(this.adj[i][j] + ' ');
      }
      console.log();
    }
  }

  depsFirstSearch(v: number): void {
    this.marked[v] = true;
    // if statement for print is not required
    if (this.adj[v] !== undefined) {
      console.log("Visited vertex: " + v);
    }

    for (let i = 0; i < this.adj.length; i++) {
      for (let j = 0; j < this.adj[i].length; j++) {
        const w = this.adj[i][j];
        if (!this.marked[w]) {
          this.depsFirstSearch(w);
        }
      }
    }
  }

  breadthFirstSearch(s: number) {
    let queue = [];
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
      let v: number = queue.shift() as number; // remove from front of queue
      if (v !== undefined) {
        console.log(`Visited vertex: ${v}`);
      }

      const subArr = this.adj[v];
      for (let i = 0; i < subArr.length; i++) {
        const w = subArr[i];
        if (!this.marked[w]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        }
      }
    }
  }
}
