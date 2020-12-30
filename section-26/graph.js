class Graph {
  constructor() {
      this.adjacencyList = new Map();
  }

  addVertex(vtx) {
    if (!this.adjacencyList.has(vtx)) this.adjacencyList.set(vtx, []);
  }

  addEdge(vtx1, vtx2) {
    if (this._areValidVtx(vtx1,vtx2)) {
      if (!this.adjacencyList.get(vtx1).includes(vtx2)) {
        this.adjacencyList.get(vtx1).push(vtx2);
      }
      if (!this.adjacencyList.get(vtx2).includes(vtx1)) {
        this.adjacencyList.get(vtx2).push(vtx1);
      }
    }
  }

  removeEdge(vtx1, vtx2) {
    if (this._areValidVtx(vtx1,vtx2)) {
      if (this.adjacencyList.get(vtx1).includes(vtx2)) {
        const vtx2Idx = this.adjacencyList.get(vtx1).indexOf(vtx2);
        this.adjacencyList.get(vtx1).splice(vtx2Idx,1);
      }
      if (this.adjacencyList.get(vtx2).includes(vtx1)) {
        const vtx1Idx = this.adjacencyList.get(vtx2).indexOf(vtx1);
        this.adjacencyList.get(vtx2).splice(vtx1Idx,1);
      }
    }
  }

  removeVertex(vtx) {
    if (this.adjacencyList.has(vtx)) {
      const vertices = [...this.adjacencyList.get(vtx)]
      vertices.forEach((vtxEdge) => {
        this.removeEdge(vtx, vtxEdge);
      });
      this.adjacencyList.delete(vtx);
    }
  }

  printAdjList() {
    console.log(this.adjacencyList);
  }

  _areValidVtx(vtx1, vtx2) {
    return this.adjacencyList.has(vtx1) && this.adjacencyList.has(vtx2)
  }
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Kyoto');
g.addVertex('Osaka');
g.addVertex('Kobe');
g.printAdjList();
g.addEdge('Tokyo', 'Kyoto');
g.addEdge('Osaka', 'Tokyo');
g.addEdge('Osaka', 'Kobe');
g.printAdjList();
g.removeVertex('Tokyo');
g.printAdjList();

