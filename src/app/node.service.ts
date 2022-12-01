export class NodeService {

  constructor(public data: number, public left: NodeService | null, public right: NodeService | null) { }

  show(): number {
    return this.data;
  }
}
