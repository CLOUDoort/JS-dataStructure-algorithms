class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    this.length++;

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return true;
  }

  pop() {
    if (!this.head) return undefined;
    const removeNode = this.tail;
    this.length--;

    if (this.length === 0) {
      this.head = this.tail = null;
      return removeNode;
    }

    this.tail = removeNode.prev;
    this.tail.next = null;
    removeNode.prev = null;

    return removeNode;
  }

  shift() {
    if (!this.head) return undefined;
    const removeNode = this.head;
    this.length--;

    if (this.length === 0) {
      this.head = this.tail = null;
      return removeNode;
    }
    this.head = removeNode.next;
    this.head.prev = null;
    removeNode.next = null;

    return removeNode;
  }

  unshift(val) {
    if (!this.head) return this.push(val);
    const newNode = new Node(val);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return true;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    const mid = Math.floor(this.length / 2);
    let counter;
    let current;

    if (idx > mid) {
      counter = this.length - 1;
      current = this.tail;
      while (idx !== counter) {
        current = current.prev;
        counter--;
      }
    } else {
      counter = 0;
      current = this.head;
      while (idx !== counter) {
        current = current.next;
        counter++;
      }
    }
    return current;
  }

  set(idx, value) {
    const target = this.get(idx);
    if (!target) return false;

    target.val = value;
    return true;
  }

  insert(idx, value) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(value);
    if (idx === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const prev = this.get(idx - 1);
    const next = prev.next;

    newNode.prev = prev;
    newNode.next = next;
    prev.next = newNode;
    next.prev = newNode;
    this.length++;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return !!this.shift(idx);
    if (idx === this.length - 1) return !!this.pop(idx);

    const target = this.get(idx);
    target.prev.next = target.next;
    target.next.prev = target.prev;
    target.prev = target.next = null;
    this.length--;

    return target;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr, this.length);
  }
}

const list = new DoublyLinkedList();
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.insert(2, 3.5);
list.remove(2);
list.print();
list.reverse();
list.print();
