class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vtx) {
      if (!this.adjacencyList.has(vtx)) this.adjacencyList.set(vtx, []);
    }

    addEdge(vtx1, vtx2) {
      if (this.adjacencyList.has(vtx1) && this.adjacencyList.has(vtx2)) {
        if (!this.adjacencyList.get(vtx1).includes(vtx2)) {
          this.adjacencyList.get(vtx1).push(vtx2)
        }
        if (!this.adjacencyList.get(vtx2).includes(vtx1)) {
          this.adjacencyList.get(vtx2).push(vtx1)
        }
      }
    }

    printAdjList() {
      console.log(this.adjacencyList);
    }
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Kyoto');
g.addVertex('Osaka');
g.addVertex('Kobe');
g.printAdjList();
g.addEdge('Tokyo', 'Kyoto');
g.addEdge('Dallas', 'Tokyo');
g.printAdjList();
