# 삽입 정렬

- 각 요소를 선택해서 정렬된 배열 속의 해당하는 위치에 삽입한다.
- 즉 한 번에 하나의 항목을 올바른 위치에 삽입해서 배열의 정렬된 부분을 점진적으로 구축하는 알고리즘이다.
- 거의 정렬된 배열이라면 좋은 성능을 가진다.
- 실시간으로 데이터를 받는 경우, 전체 배열을 한 번에 정렬할 필요가 없기 때문에 삽입 정렬이 좋다.
- 시간복잡도는 O(N^2).

1. 배열에서 두 번째 요소를 선택해서 시작.(첫 번째 요소는 이미 정렬된 것으로 간주)
2. 두 번째 요소 값을 취해서 앞에 있는 값과 비교하고 필요하면 교환.
3. 위 과정을 반복.

## 구현

```js
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curVal;
  }
  return arr;
}
```
