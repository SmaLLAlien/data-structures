export class NodeService<T> {
  element: T;
  next: NodeService<T> | null

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}
