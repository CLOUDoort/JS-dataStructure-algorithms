# Quick Sort

- Merge Sort와 비슷하게 0개 또는 1개의 요소가 남을 때까지 분할한 뒤, 개별적으로 퀵 정렬을 실시하는 재귀적 성질을 이용한다.
- 피벗 포인트라 부르는 단일 요소를 선택하기.
  - 퀵 정렬의 실행시간은 피벗 선택 위치에 따라 달라질 수 있다.
  - 이상적으로는 데이터 집합의 중간값이 되도록 선택해야 한다.
  - 첫번째값, 마지막값, 중간값, 무작위값 등 여러 선택지가 있지만 단순하게 첫번째값 선택한다.
- 피벗보다 작은 값은 모두 왼쪽으로 이동하며 피벗보다 큰 값은 모두 오른쪽으로 이동한다.
- 왼쪽과 오른쪽 안에서는 순서가 중요하지 않다. 피벗보다 작거나 크기만 하면 된다.
- 헬퍼 함수는 주어진 배열 안에서 수행해야 한다. 새로운 배열을 만들면 안 된다.

## Pivot Helper

- 배열이 주어지면 요소를 피벗 포인트로 지정하여 배열 속 요소를 재배치하는 함수이다.
- 이 함수는 배열, 시작 인덱스, 마지막 인덱스라는 3개의 인수를 받는다.
- 배열의 시작부분에서 피벗 선택(피벗 위치는 원하면 바꿀 수 있다.)
- 피벗 인덱스를 변수로 저장하고, 피벗이 보고 있는 요소보다 클 때, 피벗 인덱스를 증가시킨 다음 현재 요소와 피벗 인덱스의 요소를 교환한다.
- 마지막에는 시작했던 피벗과 피벗 인덱스 요소를 교환한 다음 피벗 인덱스를 반환한다.

```js
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const pivot = (arr, start, end) => {
  const pivotPoint = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotPoint > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};
```

## 구현

```js
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return;
  const pivotIdx = pivot(arr, left, right);
  quickSort(arr, left, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, right);
  return arr;
};

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
```

## Big-O

- **정렬된 배열**에서 **피벗 포인트를 가장 작은 요소를 선택하거나 가장 큰 요소를 선택**한 상황에서 퀵정렬할 경우 최악의 케이스가 발생한다.
  - 분할하는데 O(N)이 발생하고, 분할한 배열에서 O(N) 번의 비교를 해야하기 때문에 최악의 경우로 O(N^2)이 발생한다.
  - 이를 개선하려면 **피벗 포인트를 무작위로** 고르면 된다. 정렬된 배열일 경우라도 문제를 피할 수 있다.

| Algorithm  | Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| :--------: | :-------------------: | :----------------------: | :--------------------: | :--------------: |
| Merge Sort |       O(NlogN)        |         O(NlogN)         |         O(N^2)         |       O(N)       |
