# Object

- 순서가 없는 데이터 구조이다. 시작, 중간, 끝 개념이 없다.
- 모두 key value pair를 갖고 저장되어 있다.

## when

- 정렬할 필요가 없을 때
- 빠른 접근, 입력, 제거를 원할 때
  - 접근, 입력, 제거 모두 O(1)
  - value 탐색은 O(N)

## Methods

- Object.keys - O(N)
- Object.values - O(N)
- Object.entries - O(N)
- hasOwnProperty - O(1)
