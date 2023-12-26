# Binary Heap

- heap은 트리의 한 종류이고 Binary Heap은 이진 트리의 한 종류이다.
- heap은 우선순위 큐를 만들기 위해 사용된다.
- 그래프 순회할 때 사용한다.

## MaxBinaryHeap & MinBinaryHeap

- Max: 부모노드는 항상 자식노드보다 크다. Min: 부모노드는 항상 자식노드보다 작다.
- 최대 두 개의 노드를 가진다.
- 왼쪽, 오른쪽 순서가 없다. Max의 경우 부모노드가 자식노드보다 크기만 하면 된다.
- 왼쪽 먼저 채우고 오른쪽을 채우기 때문에 편향되지 않고 공간 활용이 효율적이다.
- 그래서 배열로 표현하기 쉽다.
  - 왼쪽 자식노드의 index는 2 x 부모 index + 1
  - 오른쪽 자식노드의 index는 2 x 부모 index + 2
  - 반대로 자식노드의 index로 부모노드를 찾을 수 있다. Math.floor((부모 index - 1) / 2)
- 배열로 표현할 것이기 때문에 이전처럼 left, right 포인터가 있는 node 클래스도 필요없다.
- 값을 배열에 삽입하고 배열 인덱스에 상응하는 개별 숫자들이 힙의 구조를 보여주게 된다.

## MaxBinaryHeap 구현

- 값을 배열 끝에 저장한다.
- 그 값을 알맞는 곳에 저장하기 위해 bubble up 해야 한다.
- 추가된 값이 부모노드보다 크면 값을 swap한다.
- 중요한 점은 일단 배열 끝에 삽입을 하고 자리를 swap한다는 것.

```js
class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent >= element) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}
```
