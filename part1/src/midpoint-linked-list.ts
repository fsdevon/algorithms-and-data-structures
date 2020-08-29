// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return the node at
// end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve the size of the list,
// and only interate through the list one time
// --- Example
// const l = new LinkedList();
// l.insertLast('a');
// l.insertLast('b');
// l.insertLast('c');
// midpoint(l); // return {data: 'b'}

import LinkedList from "./linked-list";

const midpoint = (list: LinkedList) => {
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

export default midpoint;
