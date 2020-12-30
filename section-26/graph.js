class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) this.adjacencyList.set(vertex, []);
    }

    printAdjList() {
      console.log(this.adjacencyList);
    }
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Kyoto');
g.printAdjList();
g.addVertex('Kyoto');
g.printAdjList();
