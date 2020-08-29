// --- Direction
// Create a queue data structure. The queue should be a class with methods 'add' and 'remove'
// Adding to the queue should store an element until it is removed
// --- Examples
//  const q = new Queue();
//  q.add(1);
//  q.remove(); // return 1;

class Queue {
  public data: any[];
  constructor() {
    this.data = [];
  }

  add(record: any) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

export default Queue;
