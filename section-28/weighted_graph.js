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

  dfs_naive(start,end) {
    const pq = new PriorityQueue();
    const distances = new Map();
    for (var key in this.adjacencyList.keys()) {
      key === start ? distances.set(key, 0) : distances.set(key, Infinity);
    }
    console.log(distances);
  }

  _areValidVtx(vtx1, vtx2) {
    return this.adjacencyList.has(vtx1) && this.adjacencyList.has(vtx2)
  }
}

const wg = new WeightedGraph();
wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addVertex('D');
wg.addVertex('E');
wg.addVertex('F');
wg.printAdjList();
wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'E', 3);
wg.addEdge('E', 'F');
wg.addEdge('F', 'C', 4);
wg.addEdge('D', 'C', 2);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F');
wg.printAdjList();
wg.dfs_naive("A", "E")

