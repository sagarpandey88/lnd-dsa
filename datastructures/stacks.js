/**
 * --------------Stack----------------
 * Description : Its LIFO, can be built with Linked list or array
 * --------------Methods---------------------
 * lookup o(n)
 * push (1)
 * pop (1)
 * peek o(1)
 *
 **/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;

    return this;
  }

  peek() {
    return this.top;
  }

  pop() {
    if (this.length == 0) {
      return null;
    }

    if (this.top == this.bottom) {
      this.bottom = null;
    }

    const holdingPointer = this.top; // this is done for garbage collection . i.e. orphaning it
    this.top = this.top.next;
    this.length--;

    return this;
  }
}

export function init() {
  const mystack = new Stack();
  mystack.push('Google');
  mystack.push('Discord');
  mystack.push('Udemy');
  mystack.pop();
  mystack.pop();
  mystack.pop();

  console.log(mystack.peek());

  console.log(mystack);
}
