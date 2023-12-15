# 합병 정렬

- 큰 배열을 0개 또는 1개의 요소를 가지는 단일 요소 배열로 나눈다.
- 단일 요소 배열들끼리의 합병과정을 통해 정렬을 한다.
- 단일 요소 배열은 정렬되어 있다는 사실을 통해 합병을 한다.

## Merge Function

- 시간복잡도: O(n+m)

```js
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
```

## Merge Sort

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```

## Big-O

| Algorithm  | Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| :--------: | :-------------------: | :----------------------: | :--------------------: | :--------------: |
| Merge Sort |       O(NlogN)        |         O(NlogN)         |        O(NlogN)        |       O(N)       |
