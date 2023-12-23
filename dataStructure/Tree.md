# Tree

- 부모-자식 관계가 있는 노드로 이루어진 데이터 구조이다.
- 노드는 자식의 노드만을 가리킬 수 있다.
- 한 노드는 여러 개의 노드들로 연결 될 수 있는 branch 구조이다.
- 연결리스트는 경로가 하나밖에 없는 선형구조이며 트리는 경로가 여러 갈래인 비선형구조이다.
- 연결리스트는 특별한 트리의 종류라고 생각할 수도 있다.

## 용어

- root
- child
- parent
- siblings
- leaf
- edge

## 예시

- HTML, DOM
- 네트워크 라우팅
- AI
- 폴더 시스템
- 파일 시스템
- JSON

## Binary Tree

- 각 노드는 최대 2개의 자식 노드를 가질 수 있다.

## Binary Search Tree

- 각 노드는 최대 2개의 자식 노드를 가질 수 있다.
- 부모 노드의 왼쪽에 있는 모든 노드는 부모보다 작고, 부모 노드의 오른쪽에 있는 모든 노드는 부모 노드보다 크다.
- 이렇게 정렬하는 이유
  - 삽입과 탐색을 아주 빠르고 쉽게 해준다.
  - 비교할 때마다 비교 숫자가 반으로 줄어든다.
- Big-O
  - Insertion - O(logN)
  - Searching - O(logN)
  - 편향트리의 경우 삽입과 탐색의 시간복잡도가 O(N)으로 악화될 수 있다.
    그럴 경우 BST를 사용하지 않거나 루트 노드를 재정의하여 트리를 다시 만들면 된다.

## 구현

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (current.value > value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (current.value > value) current = current.left;
      else if (current.value < value) current = current.right;
      else found = true;
    }
    if (!found) return false;
    return current;
  }

  contains(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (current.value > value) current = current.left;
      else if (current.value < value) current = current.right;
      else return true;
    }
    return false;
  }
}
```
