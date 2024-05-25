# Binary Heap

- heap은 최댓값 및 최솟값을 찾아내는 연산을 빠르게 하기 위해 고안된 완전이진트리를 기본으로 한 자료구조이다.
- A가 B의 부모 노드이면 A의 key값과 B의 key값 사이에는 대소관계가 성립한다.
- 배열로 표현될 수 있으며, 인덱스를 이용하여 자식과 부모 관계를 파악할 수 있다.

## 힙의 특징

1. 힙은 완전이진트리이다.
2. 힙의 부모 노드는 자식 노드보다 크거나 같은 값을 가진다.
3. Max heap과 Min heap이 있다.
4. 힙의 최댓값은 루트 노드에 위치한다.
5. 힙의 최솟값은 마지막 노드에 위치한다.
6. 힙은 배열로 표현할 수 있다.
7. 삽입과 삭제 모두 O(logN)이다.

## 힙의 사용 사례

1. 우선순위 큐를 구현.
2. 힙 정렬 구현.
3. 최댓값과 최솟값을 빠르게 찾아내야 할 때.
4. 중간값을 빠르게 찾아내야 할 때.
5. 최단 경로를 찾아야 할 때.(다익스트라 알고리즘)
6. 최소 신장 트리를 찾아야 할 때.

## MaxBinaryHeap & MinBinaryHeap

- Max: 부모노드는 항상 자식노드보다 크거나 같다.
- Min: 부모노드는 항상 자식노드보다 작거나 같다.
- 최대 두 개의 노드를 가진다.
- 왼쪽, 오른쪽 순서가 없다. Max의 경우 부모노드가 자식노드보다 크기만 하면 된다.
- 왼쪽 먼저 채우고 오른쪽을 채우기 때문에 편향되지 않고 공간 활용이 효율적이다.(완전 이진 트리)
- 그래서 배열로 표현하기 쉽다.
  - 왼쪽 자식노드의 index는 2 x 부모 index + 1
  - 오른쪽 자식노드의 index는 2 x 부모 index + 2
  - 반대로 자식노드의 index로 부모노드를 찾을 수 있다. Math.floor((부모 index - 1) / 2)
- 배열로 표현할 것이기 때문에 이전처럼 left, right 포인터가 있는 node 클래스도 필요없다.
- 값을 배열에 삽입하고 배열 인덱스에 상응하는 개별 숫자들이 힙의 구조를 보여주게 된다.

## Big-O of Binary Heap

- Insertion - O(logN)
- Removal - O(logN)
- Search - O(N)

## MaxBinaryHeap 구현

- insert O(logN)
  - 값을 배열 끝에 저장한다.
  - 그 값을 알맞는 곳에 저장하기 위해 bubble up 한다.
  - 추가된 값이 부모노드보다 크면 값을 swap한다.
  - 중요한 점은 우선 배열 끝에 삽입을 하고 자리를 swap한다는 것.
- remove(ExtractMax or ExtractMin) O(logN)
  - root값을 제거.
  - 마지막 노드를 root로 이동.
  - 루트 노드를 자식 노드와 비교.
  - 알맞는 값을 찾기 위해 bubble down한다.
  - 자식 노드와 비교하면서 자신보다 큰 값이 있으면 swap한다.

```js
class MaxBinaryHeap {
  constructor() {
    this.heap = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  remove() {
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp() {
    let curIdx = this.heap.length - 1;
    let parentIdx = Math.floor((curIdx - 1) / 2);

    while (this.heap[parentIdx] < this.heap[curIdx]) {
      [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];
      curIdx = parentIdx;
      parentIdx = Math.floor((curIdx - 1) / 2);
    }
  }

  bubbleDown(idx = 0) {
    let curIdx = idx;
    let leftChildIdx = curIdx * 2 + 1;
    let rightChildIdx = curIdx * 2 + 2;
    let nxtIdx = curIdx;

    if (this.heap[nxtIdx] < this.heap[leftChildIdx]) {
      nxtIdx = leftChildIdx;
    }

    if (this.heap[nxtIdx] < this.heap[rightChildIdx]) {
      nxtIdx = rightChildIdx;
    }

    if (nxtIdx !== curIdx) {
      [this.heap[curIdx], this.heap[nxtIdx]] = [this.heap[nxtIdx], this.heap[curIdx]];
      this.bubbleDown(nxtIdx);
    }
  }
}
```

# Priority Queue (우선순위 큐)

- 우선순위 큐는 각 요소가 그에 해당하는 우선순위를 가지는 데이터 구조이다.
- 더 높은 우선순위를 가진 요소가 더 낮은 우선순위를 가진 요소보다 먼저 처리된다.
- 우선순위 큐는 힙과는 별개이고 추상적인 개념에 불과하다. 즉 우선순위 큐는 배열이나 리스트를 가지고도 만들 수 있다.
- 하지만 우선순위 큐를 만드는 최고의 방법이 힙일 뿐이다.
- 힙과 다른 점은 요소의 값이 아닌 우선순위를 비교해야 한다는 것이다.

## 구현

- MinBinaryHeap으로 구현

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let curIdx = this.values.length - 1;
    let parentIdx = Math.floor((curIdx - 1) / 2);

    while (this.values[parentIdx].priority < this.values[curIdx].priority) {
      [this.values[parentIdx], this.values[curIdx]] = [this.values[curIdx], this.values[parentIdx]];
      curIdx = parentIdx;
      parentIdx = Math.floor((curIdx - 1) / 2);
    }
  }

  dequeue() {
    const max = this.values[0];
    const last = this.values.pop();
    if(this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown(idx = 0) {
    let curIdx = idx;
    let leftChildIdx = curIdx*2+1;
    let rightChildIdx = curIdx*2+2;
    let nxtIdx = curIdx;

    if(this.values[nxtIdx].priority < this.values[leftChildIdx].priority) {
      nxtIdx = leftChildIdx;
    }

    if(this.values[nxtIdx].priority < this.values[rightChildIdx].priority) {
      nxtIdx = rightChildIdx;
    }

    if(curIdx !== nxtIdx) {
      [this.values[curIdx], this.values[nxtIdx]] = [this.values[nxtIdx], this.values[curIdx]];
      this.bubbleDown(nxtIdx;)
    }
  }
}
```
