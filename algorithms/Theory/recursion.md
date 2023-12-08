# Recursion

재귀란 자기 자신을 호출하는 함수를 의미한다.

## Why do i need to know this?

- 재귀는 모든 곳에 사용된다.
- JSON.parse / JSON.stringify 는 보통 재귀적으로 구현된다.
- document.getElementById and DOM traversal algorithms
- Object traversal
- more complex data structures
- it's sometimes a cleaner alternative to iteration

## Two conditions

- **Base Case**, 즉 함수 종료 조건이 있어야 재귀를 멈출 수 있다.
- **Different Input**, 즉 다른 입력값이 있어야 한다.

## Practice

```js
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
```

```js
function sum(num) {
  if (num === 1) return 1;
  return num + sum(num - 1);
}
```

```js
function factorialFn(n) {
  if (num === 1) return 1;
  return n * factorialFn(n - 1);
}
```

## Wrong case

- Base case가 없거나 잘못된 경우.
- 잘못된 값을 return하거나 아예 return하지 않는 경우.
- 잘못하면 Stack overflow가 발생한다.

## Helper method recursion

일종의 결과를 컴파일할 때 흔히 사용되는 패턴이다. <br />
결과는 보통 배열이나 배열과 비슷한 다른 형태 데이터 구조이다.

- outer 함수와 inner 함수가 있다.
- 재귀적이지 않은 outer 함수가 재귀함수인 inner 함수를 내부에서 호출하여 일을 처리하는 패턴이다.

```js
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}
```

## Pure recursion

- slice, spread, concat과 같은 메서드는 원본을 훼손하지 않는다.
- 문자열은 immutable하기 떄문에 slice, substr, substring을 활용해야 한다.
- object인 경우 object.assign, spread operator를 활용한다.

```js
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```
