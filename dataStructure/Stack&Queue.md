# Stack

- Last In First Out(LIFO) 개념의 데이터 구조
- 예시
  - Call Stack
  - Managing function invocations
  - 실행 취소, 다시 실행(Undo, Redo)
  - 브라우저의 인터넷 방문 기록
  - DFS
- Big-O
  - Insertion - O(1)
  - Removal - O(1)
  - Searching - O(N)
  - Access - O(N)

## 구현

- 내장 배열의 push와 pop, unshift와 shift(효율성만 따질 때는 배열을 사용하지 않는다.)
- 데이터의 크기가 작고 더 빨리 쉽게 할 때는 그냥 배열 사용한다.
- 후입선출만 신경쓰면 되는 상황이라면 인덱스가 없는 연결리스트가 더 낫다.
- 연결리스트로 stack 구현

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // 연결리스트의 unshift
  push(val) {
    const newNode = new Node(val);
    this.size++;
    if (!this.first) {
      this.first = this.last = newNode;
      return this.size;
    }

    newNode.next = this.first;
    this.first = newNode;
    return this.size;
  }

  // 연결리스트의 shift
  pop() {
    if (!this.first) return null;
    const removed = this.first;
    this.size--;
    if (this.size === 0) {
      this.first = this.last = null;
      return removed;
    }

    this.first = removed.next;
    removed.next = null;
    return removed;
  }
}
```

# Queue

- First In First Out(FIFO) 개념의 데이터 구조
- 예시
  - 줄 서서 기다리는 경우
  - 접속 대기
  - 백그라운드 작업
  - 파일 업로드
  - 프린트 대기열
- Big-O
  - Insertion - O(1)
  - Removal - O(1)
  - Searching - O(N)
  - Access - O(N)

## 구현

- FIFO 개념만 충족하면 된다.
- 배열로 구현(어느 방법을 선택하든 인덱스 재조정이 필요하기 떄문에 비효율적)
  - push와 shift 조합
  - unshift와 pop 조합
- 연결리스트로 구현

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    // 연결리스트의 push
    enqueue(val) {
      const newNode = new Node(val);
      this.size++;
      if(!this.first) {
        this.first = this.last = newNode;
        return this.size;
      }
      this.last.next = newNode;
      this.last = newNode;
      return this.size
    }

    // 연결리스트의 shift
    dequeue() {
      if(!this.first) return null;
      const removed = this.first;
      this.size--;
      if(this.size === 0) {
        this.first = this.last = null;
        return removed;
      }

      this.first = removed.next;
      removed.next = null;
      return removed;
    }
  }
}
```
