# 그래프 순회

- 트리와 다르게 루트가 없으니 시작지점을 직접 정해줘야 한다.
- 트리와 다르게 한 노드에서 다른 노드로 이동할 때 여러 개의 길이 있을 수 있다.

## 사용 예시

- sns networking
- web crawlers
- finding closest, matches or recommendations
- shortest path problems
  - GPS Navigation
  - Solving mazes
  - AI(shortest path to win the game)

## DFS(Depth First Search)

```js
  depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const dfs = (vertex) => {
            if(!vertex) return null;
            result.push(vertex);
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }
        dfs(start);
        return result;
    }

    depthFirstIterative(start) {
        const result = [];
        const stack = [start];
        const visited = {};
        visited[start] = true;
        let currentVertex;

        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }

        return result;
    }
```

## BFS(Breadth First Search)

```js
  breadthFirst(start) {
        const result = [];
        const queue = [start];
        const visited = {};
        visited[start] = true;
        let currentVertex;

        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }

        return result;
    }
```
