# 검색 알고리즘

## 선형 검색(Linear Search)

모든 개별 항목을 한 번에 하나씩 확인하여 해당 값을 찾거나 맨 끝에 도달할 때까지 계속 한다.

- 시간복잡도: O(n)
- 자바스크립트에 선형 검색 메서드가 있다.
  - indexOf
  - includes
  - find
  - findIndex

### practice

```js
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}
```

## 이진 검색(Binary Search)

정렬된 배열에서 중간값을 골라 값을 비교하고 검색 범위를 반씩 줄여나가는 알고리즘이다.

- 시간복잡도: O(logN)

### practice

```js
function binarySearch(arr, value) {
  let st = 0;
  let en = arr.length - 1;

  while (st <= en) {
    let mid = Math.floor((st + en) / 2);
    if (arr[mid] === value) return mid;
    else if (arr[mid] > value) en = mid - 1;
    else st = mid + 1;
  }
  return -1;
}
```

## Naive String Search

긴 문자열에서 부분 문자을 검색한다.

```js
function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch('asdomgasdmomg', 'omg');
```
