class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
    this.elements = [];
  }

  insert(value, priority) {
    let newNode = new Node(value, priority);
    this.elements.push(newNode);
    if (this.elements.length > 1) this.bubble();
  }

  remove() {
    if (this.elements.length === 0) return undefined;
    if (this.elements.length === 1) return this.elements.pop();
    this.swap(0, this.elements.length - 1);
    let minNode = this.elements.pop();
    this.trickle();
    return minNode;
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


const pq = new PriorityQueue();
pq.insert('do homework', 10);
pq.insert('go to gym', 20);
pq.insert('random shit', 21);
pq.insert('listen to music', 15);
pq.insert('do finances', 3);
pq.insert('eat something', 0);

console.log(pq.elements);
pq.remove();
console.log(pq.elements);
pq.remove();
console.log(pq.elements);
pq.remove();
console.log(pq.elements);
pq.remove();
console.log(pq.elements);
pq.remove();
console.log(pq.elements);
pq.remove();
console.log(pq.elements);
