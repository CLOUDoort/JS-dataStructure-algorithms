# Tree Traversal

## BFS(Breath First Search)

- 수평으로 탐색한다. 즉 형제 노드를 우선으로 탐색한다.
- 큐에 방문할 목록을 저장하며 진행한다.(배열로 큐 구현하는 것이 편하다. enqueue: push, dequeue: shift)
- 탐색한 요소는 리스트에 저장하고 마지막에 출력한다.

### 구현

- 배열로 구현한 큐와 방문한 방문한 노드 배열을 생성한다.
- 큐에 root 노드 넣고, 큐가 빌 때까지 루프를 돌린다.
  - 큐에서 노드하나 삭제하고, 그 값을 노드배열에 저장한다.
  - 삭제한 노드의 left에 값이 있으면 큐에 추가
  - 삭제한 노드의 right에 값이 있으면 큐에 추가
- 노드 배열 출력

```js
BFS() {
  const queue = [];
  const visited = [];
  queue.push(this.root);
  while (queue.length) {
    const removed = queue.shift();
    visited.push(removed);
    if (removed.left) queue.push(removed.left);
    if (removed.right) queue.push(removed.right);
  }
  return visited;
};
```

## DFS(Depth First Search)

### pre-order traversal

### in-order traversal

### post-order traversal
