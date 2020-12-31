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

  isNotEmpty() {
    return this.values.length > 0;
  }

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
    // initialization
    const pq = new PriorityQueue();
    const distances = new Map();
    const previous = {};
    const visited = [];
    let path = [];
    let current, neighbors;

    // set up
    for (var key of this.adjacencyList.keys()) {
      key === start ? distances.set(key, 0) : distances.set(key, Infinity);
      pq.enqueue(key, key === start ? 0 : Infinity);
      previous[key] = null;
    }

    // algorithm
    while (pq.isNotEmpty()) {
      current = pq.dequeue().val;
      visited.push(current);
      if (current === end) {
        while(current) {
          path.push(current);
          current = previous[current];
        }
        break;
      }
      neighbors = this.adjacencyList.get(current);
      neighbors.forEach((neighbor) => {
        const candidate = distances.get(current) + neighbor.weight
        if (candidate < distances.get(neighbor.node)) {
          distances.set(neighbor.node, candidate);
          previous[neighbor.node] = current;
          pq.enqueue(neighbor.node, candidate);
        }
      })
    }

    return path.reverse();
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

wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'E', 3);
wg.addEdge('E', 'F');
wg.addEdge('F', 'C', 4);
wg.addEdge('D', 'C', 2);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F');

console.log(wg.dfs_naive("A", "E"));

