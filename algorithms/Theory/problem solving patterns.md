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
