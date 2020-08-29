// --- Directions
// Implement a Queue datastrucrue using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back at Queue exercise.
// --- Examples
// const q = new Queue();
// q.add(1);
// q.add(2);
// q.peek(); // return 1
// q.remove(); // return 1
// q.remove(); // return 2

import Stack from "./stack";

class Queue {
  first: Stack;
  second: Stack;

  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record: any) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.pop();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peek();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

export default Queue;
