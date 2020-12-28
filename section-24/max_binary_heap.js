class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    if (this.values.length > 1) this.bubble();
  }

  remove() {
    if (this.values.length === 0) return undefined;
    this.swap(0, this.values.length - 1);
    let max = this.values.pop();
    this.trickle();
    return max;
  }

  // Private methods (not really)

  swap(pos1, pos2) {
    return [this.values[pos1], this.values[pos2]] = [this.values[pos2], this.values[pos1]]
  }

  bubble() {
    let current = this.values.length - 1;
    let parent = Math.floor((current - 1)/2);
    while(this.values[parent] < this.values[current]) {
      this.swap(parent, current);
      current = parent;
      parent = Math.floor((current - 1)/2);
    }
  }

  trickle() {
    let currentIdx = 0;
    let largestChildIdx = this.findLargestChildIdx(currentIdx);

    while (this.values[currentIdx] < this.values[largestChildIdx]) {
      this.swap(currentIdx, largestChildIdx);
      currentIdx = largestChildIdx;
      largestChildIdx = this.findLargestChildIdx(currentIdx);
    }
  }

  findLargestChildIdx(parentIdx) {
    let leftChild = null;
    let rightChild = null;
    let leftChildIdx = 2 * parentIdx + 1;
    let rightChildIdx = 2 * parentIdx + 2;

    if (leftChildIdx < this.values.length) leftChild = this.values[leftChildIdx];
    if (rightChildIdx < this.values.length) rightChild = this.values[rightChildIdx];

    return leftChild > rightChild ? leftChildIdx : rightChildIdx;
  }
}

const mbh = new MaxBinaryHeap();

mbh.insert(10);
console.log(mbh.values);
mbh.insert(20);
console.log(mbh.values);
mbh.insert(100);
console.log(mbh.values);
mbh.insert(15);
console.log(mbh.values);
console.log(mbh.remove());
console.log(mbh.values);
console.log(mbh.remove());
console.log(mbh.values);
console.log(mbh.remove());
console.log(mbh.values);
console.log(mbh.remove());
console.log(mbh.values);
console.log(mbh.remove());
console.log(mbh.values);
