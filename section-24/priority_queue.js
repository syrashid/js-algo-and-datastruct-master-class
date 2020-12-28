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
    this.swap(0, this.elements.length - 1);
    let maxNode = this.elements.pop();
    this.trickle();
    return maxNode;
  }

  // Private methods (not really)

  swap(pos1, pos2) {
    return [this.elements[pos1], this.elements[pos2]] = [this.elements[pos2], this.elements[pos1]]
  }

  bubble() {
    let currentIdx = this.elements.length - 1;
    let parentIdx = Math.floor((current - 1)/2);
    while(this.elements[parentIdx].priority > this.elements[currentIdx].priority) {
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1)/2);
    }
  }

  trickle() {
    let currentIdx = 0;
    let largestChildIdx = this.findLargestChildIdx(currentIdx);

    while (this.elements[currentIdx].priority > this.elements[largestChildIdx].priority) {
      this.swap(currentIdx, largestChildIdx);
      currentIdx = largestChildIdx;
      largestChildIdx = this.findLargestChildIdx(currentIdx);
    }
  }

  findLargestChildIdx(parentIdx) {
    let leftChildPriority = null;
    let rightChildPriority = null;
    let leftChildIdx = 2 * parentIdx + 1;
    let rightChildIdx = 2 * parentIdx + 2;

    if (leftChildIdx < this.elements.length) leftChildPriority = this.elements[leftChildIdx].priority;
    if (rightChildIdx < this.elements.length) rightChildPriority = this.elements[rightChildIdx].priority;

    return leftChildPriority > rightChildPriority ? leftChildIdx : rightChildIdx;
  }
}


