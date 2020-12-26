class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;
    const popped = this.first;
    this.first = popped.next;
    popped.next = null;
    this.size--;
    if (this.size === 0) this.last = null;
    return popped.value;
  }
}
