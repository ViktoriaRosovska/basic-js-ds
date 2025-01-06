const { NotImplementedError, ListNode, LinkedList } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  queueArr = [];

  getUnderlyingList() {
    let list = new LinkedList();
    for (let i = 0; i < this.queueArr.length; i++) {
      list.append(this.queueArr[i]);
    }
     return list.head;
  }

  enqueue( value ) {
    return this.queueArr.push(value);
  }

  dequeue() {
    return this.queueArr.shift();
  }
}

module.exports = {
  Queue
};
