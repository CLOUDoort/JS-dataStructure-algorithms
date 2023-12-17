# Radix Sort

- bubble, selection, insertion, merge, quick sort의 방식은 모두 비교 정렬 알고리즘이다.
- 가장 빠른 시간 복잡도를 가지는 것은 merge와 quick으로 O(NlogN)을 가진다.
- 비교 정렬 알고리즘보다 더 빠른 정렬 알고리즘이 있다. 바로 Radix Sort이다.
- Radix(기수)는 데이터를 구성하는 기본요소를 의미한다.
  - 2진법이면 0, 1
  - 8진법이면 0 ~ 7
  - 10진법이면 0 ~ 9

## 구현

### 자릿수 알아내기(getDigit 메서드)

- 수와 위치를 받은 다음, 그 위치의 숫자를 반환한다.
- 10진수만 적용된다.

```js
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
```

### 최대 자릿수 크기 알아내기(버킷 수 결정)

- 10진수를 받으면 자릿수를 반환한다.

```js
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigit = 0;
  nums.forEach((v) => {
    if (digitCount(v) > maxDigit) maxDigit = digitCount(v);
  });
  return maxDigit;
}
```

### 정렬 구현

```js
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    nums.forEach((v) => {
      let digit = getDigit(v, k);
      digitBuckets[digit].push(v);
    });
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
```

## Big-O

- n은 정렬할 항목의 수, k는 자릿수의 길이

| Algorithm  | Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| :--------: | :-------------------: | :----------------------: | :--------------------: | :--------------: |
| Radix Sort |         O(NK)         |          O(NK)           |         O(NK)          |      O(N+K)      |
