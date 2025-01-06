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
}

module.exports = {
  ListNode, LinkedList
};
