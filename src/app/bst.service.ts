import { Injectable } from '@angular/core';
import {NodeService} from "./node.service";

@Injectable({
  providedIn: 'root'
})
export class BstService {
  root: NodeService | null = null;

  constructor() { }

  insert(data: number) {
    let n = new NodeService(data, null, null);
    if (this.root == null) {
      this.root = n;
    }
    else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left as NodeService;
          if (current == null) {
            parent.left = n;
            break;
          }
        }
        else {
          current = current.right as NodeService;
          if (current == null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }

  inOrder(node: NodeService): void {
    if (!(node == null)) {
      this.inOrder(node.left as NodeService);
      console.log(`${node.show()} `);
      this.inOrder(node.right as NodeService);
    }
  }

  preOrder(node: NodeService): void  {
    if (!(node == null)) {
      console.log(`${node.show()} `);
      this.preOrder(node.left as NodeService);
      this.preOrder(node.right as NodeService);
    }
  }

  postOrder(node: NodeService): void {
    if (!(node == null)) {
      this.postOrder(node.left as NodeService);
      this.postOrder(node.right as NodeService);
      console.log(`${node.show()} `);
    }
  }

  getMin(): number {
    let current: NodeService = this.root as NodeService;
    while (!(current?.left === null)) {
      current = current?.left;
    }
    return current.data;
  }

  getMax(): number {
    let current: NodeService = this.root as NodeService;
    while (!(current?.right === null)) {
      current = current?.right;
    }
    return current.data;
  }

  find(data: number): NodeService | null {
    if (!this.root) {
      return null;
    } else {
      let current = this.root;
      while (current.data !== data) {
        if (data < current.data) {
          current = current.left as NodeService;
        }
        else {
          current = current.right as NodeService;
        }
        if (current == null) {
          return null;
        }
      }
      return current;
    }
  }

  remove(data: number) {
    if (this.root) {
      const root = this.removeNode(this.root, data);
    }
  }

  removeNode(node: NodeService, data: number) {
    if (node == null) {
      return null;
    }
    if (data === node.data) {
      // node has no children
      if (node.left === null && node.right === null) {
        return null;
      }
      // node has no left child
      if (node.left === null) {
        return node.right;
      }
      // node has no right child
      if (node.right === null) {
        return node.left;
      }
      // node has two children
      let tempNode = this.getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    }
    else if (data < node.data) {
      node.left = this.removeNode(node.left as NodeService, data);
      return node;
    }
    else {
      node.right = this.removeNode(node.right as NodeService, data);
      return node;
    }
  }


  private getSmallest(node: NodeService): NodeService {
    let current: NodeService = node as NodeService;
    while (!(current?.left === null)) {
      current = current?.left;
    }
    return current;
  }
}
