class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop(){
    if (!this.head) return undefined;
    let current = this.head;
    let pre = current;
    while (current.next){
      pre = current;
      current = current.next;
    }
    length--;
    pre.next = null;
    this.tail = pre;
    return current;
  }
}
