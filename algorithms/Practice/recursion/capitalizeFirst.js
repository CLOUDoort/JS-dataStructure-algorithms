/**
 * 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.
 */

function capitalizeFirst(str) {
  let arr = [];
  if (str.length === 0) return arr;

  arr.push(str[0][0].toUpperCase + str[0].slice(1));

  arr = arr.concat(capitalizeFirst(slice(1)));
  return arr;
}
