# Graph

- 그래프는 노드간의 연결을 보여주는 데이터 구조이다.
- 그래프에는 부모노드, 루트노드 같은 개념이 없다. 다 똑같은 노드이며 서로 다른 방식으로 연결될 뿐이다.
- 부모노드와 자식노드가 연결된 트리 또한 그래프의 일종이다.
- 이 꼭지점들의 집합에 순서가 없는 경우에는 무방향, 순서가 있는 경우에는 방향 그래프라 한다.

## 사용 예시

- SNS
- 지도, 방향 안내, 길 찾기
- 네트워크 라우팅
- 추천 알고리즘, 엔진

## 용어

- Vertex: 정점(하나의 노드)
- Edge: 간선(노드 사이의 연결)
- Weighted(간선에 값을 부여한다.)
  - 지도, 길찾기와 같다. 간선에 거리값을 부여한다.
  - 최단경로를 계산할 때 필요하다.
- Unweighted(간선에 부여된 값이 없다.)
- Directed(단방향, 화살표 방향으로 표현)
  - 인스타그램 팔로우
- Undirected(양방향)
  - 페이스북 친구

## 정점 사이의 관계, 간선을 표현하는 방법

- Adjacency Matrix(인접 행렬)
  - 공간을 많이 차지한다.
  - 순회가 느리다.
  - 모든 연결을 저장하기 때문에 특정 값을 찾고 접근하는 것이 빠르다.
- **Adjacency List(인접 리스트)**
  - **실제 연결(간선)만을 저장하기 때문에 공간적인 면에서 효율적이다.**
  - 순회가 빠르다.
  - 데이터가 퍼져있고 간선이 많지 않으면 인접 리스트가 좋다.
  - 특정 값을 찾고 접근하는 데, 순회 과정이 필요하기 때문에 행렬보다 느리다.

### Big-O

- \|V\| - number of vertices
- \|E\| - number of edges

|   Operation   |  Adjacency List  | Adjacency Matrix |
| :-----------: | :--------------: | :--------------: |
|  Add Vertex   |       O(1)       |    O(\|V^2\|)    |
|   Add Edge    |       O(1)       |       O(1)       |
| Remove Vertex | O(\|V\| + \|E\|) |    O(\|V^2\|)    |
|  Remove Edge  |     O(\|E\|)     |       O(1)       |
|     Query     | O(\|V\| + \|E\|) |       O(1)       |
|    Storage    | O(\|V\| + \|E\|) |    O(\|V^2\|)    |

## 구현

- Adjacency List를 사용한다.

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    const list = this.adjacencyList[vertex];

    list.forEach((el) => this.removeEdge(vertex, el));
    delete this.adjacencyList[vertex];
  }
}
```
