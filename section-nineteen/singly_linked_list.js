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
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    while (current.next){
      pre = current;
      current = current.next;
    }
    this.length--;
    pre.next = null;
    this.tail = pre;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);
    node.next = this.head;
    this.length++;
    this.head = node;
    if (this.length === 1) this.tail = node;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for(let i = 1; i <= index; i++) {
      current = current.next;
    }
    return current;
  }

  set(index, value) {
    const setNode = this.get(index);
    if(setNode) {
      setNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    else if ( index === 0 ) return !!this.unshift(val);
    else if ( index === this.length) return !!this.push(val);
    else {
      const insert = new Node(val);
      const pre = this.get(index - 1);
      insert.next = pre.next;
      pre.next = insert;
      length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    else if ( index === 0 ) return !!this.shift;
    else if ( index === this.length) return !!this.pop;
    else {
      const prev = this.get(index - 1);
      const removed = prev.next
      prev.next = removed.next;
      length--;
      return true;
    }
  }

  reverse() {
    // Edge cases for 0 and 1
    for(let i = 0; i < this.length; i++) {
      this.tail = this.head;

    }
    return this;
  }
}

var list = new SinglyLinkedList()

list.push("HELLO")
list.push("GOODBYE")
list.push("!")
list.push("<3")
list.push(":)")
