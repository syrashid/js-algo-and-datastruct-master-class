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

  pop() {
    if (!this.first) return null;
    const popped = this.first;
    this.first = popped.next;
    popped.next = null;
    this.size--;
    if (this.size === 0) this.last = null;
    return popped.value;
  }

  push(val) {
    const node = new Node(val);
    if (this.first) {
      node.next = this.first;
    } else {
      this.last = node;
    }
    this.first = node;
    return ++this.size;
  }
}
