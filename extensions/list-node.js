class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }
  append(value) {
    if (!this.tail) {
      this.head = this.tail = new ListNode(value);
    } else {
      let oldTail = this.tail;
      this.tail = new ListNode(value);
      oldTail.next = this.tail;
    }

  }
  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new ListNode(value);
    } else {
      let oldHead = this.head;
      this.head = new ListNode(value);
      this.head.next = oldHead;
    }
  }
}

module.exports = {
  ListNode, LinkedList
};
