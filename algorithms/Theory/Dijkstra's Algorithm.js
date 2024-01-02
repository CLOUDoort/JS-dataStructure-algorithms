class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (parent.priority <= element.priority) break;
      this.values[idx] = parent;
      this.values[parentIdx] = element;
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
      const leftChildIdx = idx * 2 + 1;
      const rightChildIdx = idx * 2 + 2;
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
        if ((swap === null && rightChild.priority < element.priority) || swap !== null || rightChild.priority < leftChild.priority) {
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
    this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2].filter((v) => v !== v1);
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
    let path = [];
    let smallest;

    for (let v in this.adjacencyList) {
      if (v === start) {
        distances[v] = 0;
        nodes.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        // nodes.enqueue(v, Infinity);
      }
      previous[v] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        path.push(smallest);
        return path.reverse();
      }
      if (smallest || distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach((neighbor) => {
          let candidate = distances[smallest] + neighbor.weight;
          if (candidate < distances[neighbor.node]) {
            console.log(distances);
            distances[neighbor.node] = candidate;
            previous[neighbor.node] = smallest;
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

console.log(graph.Dijkstra('A', 'E'));
