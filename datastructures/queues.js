/**
 * ------------Queues--------------------
 * Description: Queue are FIFO and can be created using a linked list
 *
 * --------------Methods----------------------
 *peek() o(1)
 *enqueue() o(1)
 * dequeue() o(1)
 */

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
    this.length = 0;
  }
  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length == 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
}

export function init() {
  const myQueue = new Queue();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.enqueue('Samir');
  myQueue.dequeue();
  myQueue.dequeue();

  myQueue.dequeue();
  //  myQueue.dequeue();

  console.log(myQueue);
}
