class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) this.adjacencyList.set(vertex, []);
    }

    addEdge(v1, v2) {
      if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
        if (!this.adjacencyList.get(v1).includes(v2)) {
          this.adjacencyList.get(v1).push(v2)
        }
        if (!this.adjacencyList.get(v2).includes(v1)) {
          this.adjacencyList.get(v2).push(v1)
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
