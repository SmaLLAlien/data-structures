import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {BstService} from "../bst.service";
import {NodeService} from "../node.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array = [];

  constructor(private bst: BstService) {
  }

  addItemToList(): void {

  }

  deleteItem(i: number): void {

  }

  ngOnInit(): void {
    this.bst.insert(23);
    this.bst.insert(45);
    this.bst.insert(16);
    this.bst.insert(37);
    this.bst.insert(3);
    this.bst.insert(99);
    this.bst.insert(22);

    console.log("Inorder traversal: ");
    this.bst.inOrder(this.bst.root as NodeService);

    console.log("Preorder traversal: ");
    this.bst.preOrder(this.bst.root as NodeService);

    console.log("Postorder traversal: ");
    this.bst.postOrder(this.bst.root as NodeService);

    const min = this.bst.getMin();
    console.log(`The minimum value of the BST is: ${min}`);

    const max = this.bst.getMax();
    console.log(`The maximum value of the BST is: ${max}`);

    this.bst.remove(16);

    console.log(this.bst)
  }
}
