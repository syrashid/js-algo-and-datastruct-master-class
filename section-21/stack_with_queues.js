class Stack {
    constructor() {
      this.qOne = new Queue();
      this.qTwo = new Queue();
    }
    push(val) {
      this.qOne.enqueue(val)
      return this
    }
    pop() {
      while (this.qOne.size > 1) {
        this.qTwo.enqueue(this.qOne.dequeue());
      }
      let result = this.qOne.dequeue();
      [this.qOne, this.qTwo] = [this.qTwo, this.qOne];
      return result;
    }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


var s = new Stack()
s.push(10).push(20).push(30)
console.log(s.pop()); // 30
console.log(s.pop()); // 20
console.log(s.pop()); // 10
console.log(s.pop()); // null
s.push(30).push(40).push(50)
console.log(s.pop()); // 50
s.push(60)
console.log(s.pop()); // 60
