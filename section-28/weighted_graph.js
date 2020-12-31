class PriorityQueue {
  constructor(){
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({val, priority});
    this._sort();
  };

  dequeue() {
    return this.values.shift();
  };

  _sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class WeightedGraph {
  constructor() {
      this.adjacencyList = new Map();
  }

  addVertex(vtx) {
    if (!this.adjacencyList.has(vtx)) this.adjacencyList.set(vtx, []);
  }

  addEdge(vtx1, vtx2, weight = 1) {
    if (this._areValidVtx(vtx1,vtx2)) {
      this.adjacencyList.get(vtx1).push({node: vtx2, weight});
      this.adjacencyList.get(vtx2).push({node: vtx1, weight});
    }
  }

  printAdjList() {
    console.log(this.adjacencyList);
  }

  _areValidVtx(vtx1, vtx2) {
    return this.adjacencyList.has(vtx1) && this.adjacencyList.has(vtx2)
  }
}

const wg = new WeightedGraph();
wg.addVertex('Tokyo');
wg.addVertex('Kyoto');
wg.addVertex('Osaka');
wg.addVertex('Kobe');
wg.printAdjList();
wg.addEdge('Tokyo', 'Kyoto');
wg.addEdge('Osaka', 'Tokyo', 4);
wg.addEdge('Osaka', 'Kobe', 2);
wg.printAdjList();

