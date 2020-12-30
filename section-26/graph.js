class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1, vertex2) {
      if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
        if (!this.adjacencyList.get(vertex1).includes(vertex2)) {
          this.adjacencyList.get(vertex1).push(vertex2)
        }
        if (!this.adjacencyList.get(vertex2).includes(vertex1)) {
          this.adjacencyList.get(vertex2).push(vertex1)
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
