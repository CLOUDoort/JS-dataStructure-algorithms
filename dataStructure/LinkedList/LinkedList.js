class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 가장 뒤에 노드 추가
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // 가장 뒤의 노드 삭제
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // 가장 앞의 노드 삭제
  shift() {
    if (!this.head) return undefined;
    const head = this.head;
    this.head = head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return head;
  }

  // 가장 앞에 노드 추가
  unshift(val) {
    const newNode = new Node(val);
    this.length++;
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== idx) {
      counter++;
      current = current.next;
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
    // idx가 길이랑 같을 경우 맨 마지막에 삽입하면 된다.
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) return !!this.unshift(value);
    if (idx === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const pre = this.get(idx - 1);

    newNode.next = pre.next;
    pre.next = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return !!this.shift(idx);
    if (idx === this.length - 1) return !!this.pop(idx);

    const pre = this.get(idx - 1);
    const removed = pre.next;
    pre.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

list.push('i');
list.push('j');
list.push('k');
console.log(list.insert(3, 'o'));
list.print();
list.reverse();
list.print();
