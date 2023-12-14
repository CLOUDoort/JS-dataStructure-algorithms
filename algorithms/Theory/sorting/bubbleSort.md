# 버블 정렬

- 루프를 돌면서 각 항목을 다음 항목과 비교하여 누가 더 큰 지 비교하고, 더 크면 **교환**한다.
- 반복할 때마다 가장 큰 값 또는 작은 값이 끝으로 가기 때문에 정렬할 항목이 줄어든다.
- 거의 정렬이 되어 있는 상태를 대비하여 루프 과정에서 교환 횟수를 세어 최적화 가능하다.
- 시간복잡도는 O(N^2).

## swap

```js
// ES5
function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

## 구현

```js
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
  let isSwap;
  for (let i = arr.length; i > 0; i--) {
    isSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, arr[j], arr[j + 1]);
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
};
```
