# Dynamic Programming

동적 프로그래밍은 복잡한 문제를 더 간단한 하위 문제의 모음으로 쪼개서, 각 하위 문제들을 풀어서 그 답을 저장하는 방식으로 문제를 해결하는 방법이다.

## 사용 조건

- 반복되는 하위 문제가 있어야 한다.
- 최적 부분 구조를 가져야 한다.
  - 하위 문제의 최적 해답을 통해서 더 큰 범주의 문제의 최적 해답을 구성할 수 있어야 한다.

> 과거에 얻은 지식을 미래의 문제를 더 쉽게 풀기 위해 사용하는 방법

## Memoization

- top-down방식
- 배열이나 객체 같이 데이터를 저장할 구조를 만든 다음에 시간이 오래 걸리는 함수를 실행하고, 그 결과값을 데이터 구조에 저장한다.
- 필요할 때 저장한 결과값을 다시 사용함으로써 반복되는 실행을 줄일 수 있다.

## Tabulation

- bottom-up 방식
- 가장 작은 하위 문제부터 해결하고 테이블에 저장한다.
- 얻고자 하는 답을 얻을 때까지 반복한다.

## 구현

```js
// 일반 재귀 O(2^N)
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// Memoization O(N)
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// Tabulation
function fib(n) {
  if(n <= 2) return 1;
  const table = [0, 1, 1];
  for(let i = 3; i <= n i++) {
    table[i] = table[i-1]+table[i-2];
  }
  return table[n];
}
```
