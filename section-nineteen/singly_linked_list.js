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
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      length--;
      return node;
    } else {
      let pre = this.head;
      while(pre.next.next){
        pre = pre.next;
      }
      this.tail = pre;
      length--;
      return pre.next;
    }
  }
}
