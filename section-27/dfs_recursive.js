

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

  dfs_recursive(vtx) {
    const visited = new Map();
    const g = this;
    (function recursive_helper(vtxStart) {
      visited.set(vtxStart, true);
      const neighbors = g._neighborsOf(vtxStart);
      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor)) recursive_helper(neighbor);
      });
    })(vtx);
    return visited;
  }

  dfs_iterative(vtx) {
    const visited = new Map();
    const stack = [vtx];
    while(stack.length > 0) {
      const current = stack.pop();
      visited.set(current, true);
      const neighbors = this._neighborsOf(current);
      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor)) stack.push(neighbor);
      })
    }
    return visited;
  }
  _areValidVtx(vtx1, vtx2) {
    return this.adjacencyList.has(vtx1) && this.adjacencyList.has(vtx2)
  }

  _neighborsOf(vtx) {
    if (this.adjacencyList.has(vtx)) return this.adjacencyList.get(vtx);
  }
}



const g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

g.printAdjList();

console.log(g.dfs_iterative("A"));
