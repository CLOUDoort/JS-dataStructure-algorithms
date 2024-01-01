# 다익스트라 최단 거리 알고리즘

- **그래프**와 이진 힙으로 구현한 **우선순위 큐**를 사용한다.
- **그래프의 두 정점 사이에 존재하는 최단 경로**를 찾는 알고리즘이다.
- 단지 두 노드 사이의 최단 경로만 주는 것이 아니다. 시작점에서 모든 노드로 가는 최단 거리를 다 알려주는 데이터 구조를 만들어준다.

## 구현

- 다익스트라 함수는 시작점과 도착점을 받는다.
- 시작점을 기준으로 각 정점까지의 최단거리를 기록할 distance 객체를 선언한다.
  - 시작점은 0으로, 나머지 정점은 Infinity로 초기화해준다.
- 우선순위 큐를 만든다.
  - 각 우선순위는 시작점은 0으로, 나머지 정점은 Infinity로 초기화한다.
- previous 객체를 만든다.
  - 모든 정점에 대해 key를 설정하고 null로 초기화한다.
- 우선순위 큐에 데이터가 있는 동안 loop한다.
  - 우선순위 큐에서 정점을 dequeue한다.
  - 방문한 노드가 도착점이면 break, 그렇지 않으면 인접 노드들 다시 Loop.
  - 거리 계산하고 기존값보다 낮으면 distance와 previous 업데이트한다.

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
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return min;
  }

  bubbleDown() {
    let idx = 0;
    const element = this.values[0];
    const length = this.values.length;
    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    const removeList = this.adjacencyList[vertex];

    removeList.forEach((v) => this.removeEdge(vertex, v));
    delete this.adjacencyList[vertex];
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // Build up initial state
    for (let v in this.adjacencyList) {
      if (v === start) {
        distances[v] = 0;
        nodes.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        nodes.enqueue(v, Infinity);
      }
      previous[v] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // Build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        path.push(smallest);
        return path.reverse();
      }
      if (smallest || distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach((neighbor) => {
          // caculate
          let candidate = distances[smallest] + neighbor.weight;
          if (candidate < distances[neighbor.node]) {
            // updating new smallest distance to neighbor
            distances[neighbor.node] = candidate;
            // updating previous - How we got to neighbor
            previous[neighbor.node] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(neighbor.node, candidate);
          }
        });
      }
    }
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph);

graph.Dijkstra('A', 'E');
```
