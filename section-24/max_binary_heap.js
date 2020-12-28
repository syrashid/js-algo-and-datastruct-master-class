class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    let current = this.values.length - 1;
    if (current > 0) this.bubble(current);
  }

  swap(pos1, pos2) {
    return [this.values[pos1], this.values[pos2]] = [this.values[pos2], this.values[pos1]]
  }

  bubble(current) {
    let parent = Math.floor((current - 1)/2);
    while(this.values[parent] < this.values[current]) {
      this.swap(parent, current);
      current = parent;
      parent = Math.floor((current - 1)/2);
    }
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

