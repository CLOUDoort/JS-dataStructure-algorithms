# 선택 정렬

1. 최솟값을 저장할 수 있는 변수를 만든다.
2. 최솟값 변수의 초기값은 정렬이 안 된 배열의 첫번째 값이다.
3. 최솟값 변수의 값을 기준으로 다음 항목과 비교하여 최솟값을 찾는다.
4. 정렬이 안 된 배열의 첫번째 값과 찾은 최솟값을 교환한다.
5. 교환하여 정렬이 된 값의 다음 항목부터 다시 위 과정을 반복한다.

- 시간복잡도는 O(N^2).
- 정렬이 거의 완료된 배열은 매우 비효율적이다.

## 구현

```js
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    if (min !== i) swap(arr, i, min);
  }
  return arr;
}
```
