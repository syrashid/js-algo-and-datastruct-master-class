class PriorityQueue {
  constructor(){
    this.elements = [];
  }

  enqueue(val, priority) {
    this.elements.push({val, priority});
    if (this.elements.length > 1) this.bubble();
  }

  dequeue() {
    if (this.elements.length === 0) return undefined;
    if (this.elements.length === 1) return this.elements.pop();
    this.swap(0, this.elements.length - 1);
    let minNode = this.elements.pop();
    this.trickle();
    return minNode;
  }

  isNotEmpty() {
    return this.elements.length > 0;
  }

  // Private methods (not really)

  swap(pos1, pos2) {
    return [this.elements[pos1], this.elements[pos2]] = [this.elements[pos2], this.elements[pos1]]
  }

  bubble() {
    let currentIdx = this.elements.length - 1;
    let parentIdx = Math.floor((currentIdx - 1)/2);
    while(this.elements[parentIdx].priority > this.elements[currentIdx].priority) {
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      if (currentIdx > 0) parentIdx = Math.floor((currentIdx - 1)/2);
    }
  }

  trickle() {
    let currentIdx = 0;
    let minChildIdx = this.findMinChildIdx(currentIdx);

    while (this.elements[currentIdx].priority > this.elements[minChildIdx].priority) {
      this.swap(currentIdx, minChildIdx);
      currentIdx = minChildIdx;
      minChildIdx = this.findMinChildIdx(currentIdx);
    }
  }

  findMinChildIdx(parentIdx) {
    let leftChildPriority = Infinity;
    let rightChildPriority = Infinity;
    let leftChildIdx = 2 * parentIdx + 1;
    let rightChildIdx = 2 * parentIdx + 2;

    if (leftChildIdx < this.elements.length) leftChildPriority = this.elements[leftChildIdx].priority;
    if (rightChildIdx < this.elements.length) rightChildPriority = this.elements[rightChildIdx].priority;

    // If the parent has no children, return the parentIdx
    if (leftChildPriority === Infinity && rightChildPriority === Infinity) return parentIdx;

    return leftChildPriority < rightChildPriority ? leftChildIdx : rightChildIdx;
  }
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

