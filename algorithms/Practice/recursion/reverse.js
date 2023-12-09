/*
문자열을 받아들이고 그 문자열의 역순인 문자열을 반환하는 reverse 함수를 작성합니다.
*/

function reverse(str) {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}
