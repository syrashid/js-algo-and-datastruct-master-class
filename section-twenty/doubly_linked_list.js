class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.tail) return undefined;
    const oldTail = this.tail;
    if(this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = oldTail.prev
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if(!this.head) return undefined;
    const oldHead = this.head;
    if(this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
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
      insert.prev = pre;
      pre.next = insert;
      insert.next.prev = insert;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    else if ( index === 0 ) return !!this.shift;
    else if ( index === this.length) return !!this.pop;
    else {
      const pre = this.get(index - 1);
      pre.next = pre.next.next;
      pre.next.prev = pre;
      this.length--;
      return true;
    }
  }

reverse() {
    if (!this.head) return this;

    this.tail = this.head;
    let prevNode = this.tail;
    let currentNode = prevNode;
    let nextNode = currentNode.next;
    currentNode.next = null;
    while(nextNode) {
      currentNode = nextNode;
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      currentNode.prev = nextNode;
      prevNode = currentNode;
    }
    this.head = currentNode;
    return this;
  }
}
