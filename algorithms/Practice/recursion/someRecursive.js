/**
 배열과 콜백을 받아들이는 someRecursive 라는 재귀(recursive) 함수를 작성하시오. 이 함수는 배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다.
*/

function someRecursive(arr, fn) {
  if (arr.length === 0) return false;
  if (fn(arr[0])) return true;
  return someRecursive(arr.slice(1), fn);
}
