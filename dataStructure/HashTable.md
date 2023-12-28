# Hash Table

- **key-value pair**값을 저장하는데 사용된다.
- 배열의 index와 달리 key는 순서를 가지지 않는다.
- 삽입, 삭제, 탐색이 매우 빠르다.
- 거의 모든 프로그래밍 언어들은 해시 테이블 타입의 구조를 가지고 있다.(빠른 속도 때문)
- 자바스크립트에는 Object(key값은 무조건 string)와 Map이 있다.
- hash function의 성능이 가장 중요하다.

## Big-O Hash Table

- Insertion - O(1)
- Deletion - O(1)
- Access - O(1)

## Hash function

- 여기서는 string 타입의 key만 고려한다.
- key에 해당하는 **임의의 크기를 가지는 데이터**를 입력하면 **정해진 크기의 데이터**를 출력하는 함수이다.
- 해시 함수는 단방향 함수로, 그 반대는 또 다른 결과값만 출력한다. 즉 암호화는 가능하나 복호화는 불가능하다.
- 좋은 해시 함수의 조건
  - **속도가 빨라야 한다.**(O(1)에 가까워야 한다. 즉 key값의 크기 정도에 시간복잡도가 좌우되면 안 된다.)
  - **해시 값이 겹치는 일 없이 잘 분배가 되어야 한다. 즉 충돌을 줄여야 한다.**
  - **특정 입력값을 입력할 때마다 항상 같은 출력값이 나와야 한다.**

### 구현

- UTF 16 문자 코드를 이용한다.(`'a'.charCodeAt(0)` => 97)
- 문자코드의 합에서 원하는 배열의 길이로 나머지 연산을 해줘서 정해진 크기의 데이터를 출력하도록 한다.
- 해시태이블의 크기는 소수값을 가지면 충돌을 줄일 수 있다.

```js
const hash = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  // 데이터 길이의 최댓값을 정해놓는다.
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    // 충돌을 줄이기 위해 소수 추가.
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};
```

## Collisions(충돌)

### Separate Chaining(개별 체이닝)

- 같은 장소에 여러 데이터를 저장하게 될 경우, 배열이나 연결 리스트를 사용하여 이중 데이터 구조를 구축한다.

### Linear Probing(선형 탐색법)

- 각 위치에 하나의 데이터만 저장하는데, 만약 이미 값이 있다면 다음 빈 칸이 어디인지 확인하고 그 자리를 차지한다.

## 구현

```js
class HashTable {
  // 배열 길이의 기본값은 소수로 설정
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(100, key.length); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [[key, value]];
    else this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) return false;
    for (let [k, v] of this.keyMap[index]) {
      if (k === key) return v;
    }
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!keysArr.includes(this.keyMap[i][j][0])) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!valuesArr.includes(this.keyMap[i][j][1])) {
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }
}
```
