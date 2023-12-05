# problem solving patterns

## Frequency counter

- 자바스크립트 객체를 사용해서 다양한 값과 빈도를 저장한다.
- 두 개의 for loop가 이중 for loop보다 낫다.

### practice

- 내 풀이

```js
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const firstCounter = {};
  const secondCounter = {};

  for (let char of first) {
    firstCounter[char] = firstCounter[char] + 1 || 1;
  }

  for (let char of second) {
    secondCounter[char] = secondCounter[char] + 1 || 1;
  }

  for (let key in firstCounter) {
    if (firstCounter[key] !== secondCounter[key]) {
      return false;
    }
  }

  return true;
}
```

- 더 나은 풀이

```js
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let char of first) {
    lookup[char] = lookup[char] + 1 || 1;
  }

  for (let char of second) {
    if (!lookup[char]) return false;
    lookup[char] -= 1;
  }

  return true;
}
```

## Multiple Pointers

- 포인터 변수 2개를 이용하여 성능을 개선한다.

### practice

```js
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}
```

```js
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
```

## Sliding window

- 배열이나 문자열과 같은 일련의 데이터에서 **특정 방식으로 연속적인 해당 데이터의 하위 집합을 찾는 경우**에 유용하다.

### Practice

- 정수로 이루어진 배열과 1 이상의 정수 n이 주어진다. 배열에서 n개의 연속적인 수의 합의 최댓값을 구하는 함수.

```js
const solution = (arr, n) => {
  if (arr.length < n) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) maxSum += arr[i];
  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    tempSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};
// [1,2,3,4,5], 2
```

## Divide and Conquer

- 배열, 문자열, 트리, 연결 리스트와 같이 큰 규모의 데이터를 처리하는 방식.
- 데이터를 작은 조각으로 세분하여 처리.

### Practice

- Binary Search
- 정렬된 배열이어야만 한다.
- 시간복잡도는 O(logN)

```js
const BinarySearch = (arr, target) => {
  let st = 0;
  let en = arr.length;

  while (st < en) {
    let mid = Math.floor((st + en) / 2);
    let element = arr[mid];
    if (target === element) return mid;
    else if (target > element) st = mid + 1;
    else en = mid - 1;
  }

  return -1;
};
```
