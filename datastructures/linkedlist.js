/**
 * Time complexity
 * prepend o(1)
 *  append o(1)
 * insert o(n)
 * travese o(n)
 * reverse o(n)
 */

/**
 * TODO: insert and reverse
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    if (this.length == 0) {
      this.head = { value: value, next: null };
      this.tail = this.head;
    } else {
      const holdingPointer = this.head;
      this.head = { value: value, next: holdingPointer };
    }
    this.length++;
  }

  append(value) {
    if (this.length == 0) {
      this.head = { value: value, next: null };
      this.tail = this.head;
    } else {
      const holdingPointer = this.tail;
      this.tail = { value: value, next: null };
      holdingPointer.next = this.tail;
    }
    this.length++;
  }

  travese(index) {
    let currentIdx = 0;
    let holdingPointer = this.head;
    while (holdingPointer) {
      if (currentIdx == index) {
        return holdingPointer.value;
      }
      holdingPointer = holdingPointer.next;
      currentIdx++;
    }
  }

  asArray() {
    let holdingPointer = this.head;
    let array = [];
    while (holdingPointer) {
      array.push(holdingPointer.value);
      holdingPointer = holdingPointer.next;
    }
    return array;
  }

  insert() {}

  reverse() {}
}

export function init() {
  const linkedList = new LinkedList();
  linkedList.prepend(10);
  linkedList.prepend(20);
  linkedList.prepend(30);
  linkedList.append(299);
  console.log(linkedList.asArray());
  console.log(linkedList.travese());
}
