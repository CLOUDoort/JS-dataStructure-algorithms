# Array

- 순서가 있는 데이터 구조이다.

## when

- 정렬이 필요할 때
- 데이터 접근할 때 매우 빠르다.
  - 접근 O(1)
  - 탐색 O(N)
  - 삽입과 제거는 삽입과 제거하는 위치에 따라 다르다.
    - 배열 끝에 추가, 삭제하는 push와 pop은 O(1)
    - 배열 앞에 추가, 삭제하는 unshift와 shift는 O(N)이다.

## methods

- push O(1)
- pop O(1)
- unshift O(N)
- shift O(N)
- concat O(N)
- slice O(N)
- splice O(N)
- sort O(NlogN)
- forEach/map/filter/reduce/etc. O(N)
