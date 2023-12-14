# 정렬

컬렉션(e.g an array)의 항목을 재배열하는 과정을 의미한다.

## 자바스크립트 배열에 내장된 정렬

- 기본 정렬 순서는 **문자열 유니코드 포인트**에 따른다.
  - 즉 배열의 모든 항목이 문자열로 변환되고, 해당 문자열의 유니코드 값이 선택되고, 그 값을 기준으로 오름차순 정렬을 한다.
  - 때문에 문자열 정렬은 오름차순으로 정상 동작하지만 숫자의 경우 정상 동작하지 않는다.
  - 이를 해결하기 위해 콜백함수를 인자로 넣는다.
- sort 함수는 옵션비교함수를 인자로 받는다.
  - 이 함수에 원하는 정렬 방식을 저장한다.
  - 기본적으로 a와 b라는 항목이 있고, 반환값을 토대로 만들 정렬 순서를 정한다.
  - a - b < 0 이면 a가 b앞에 오고, a - b > 0 이면 b가 a 앞에 온다.

```js
const arr = [3, 4, 1];

// 기본 정렬, 문자열일 때만 정상동작
arr.sort();

// 오름차순 정렬 방식
function numberCompare(n1, n2) {
  return n1 - n2;
}

arr.sort(numberCompare);
// [1, 3, 4]
```

## 비교(bubble, selection, insertion)

|   Algorithm    | Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| :------------: | :-------------------: | :----------------------: | :--------------------: | :--------------: |
|  Bubble Sort   |         O(N)          |          O(N^2)          |         O(N^2)         |       O(1)       |
| Insertion Sort |         O(N)          |          O(N^2)          |         O(N^2)         |       O(1)       |
| Selection Sort |        O(N^2)         |          O(N^2)          |         O(N^2)         |       O(1)       |
