/*
배열의 배열을 받아들이고 모든 값이 평활화(flattened)된 새 배열을 반환하는 flatten이라는 재귀(recursive) 함수를 작성합니다.
*/

function flatten(oldArr) {
  const newArr = [];
  oldArr.forEach((arr) => {
    if (Array.isArray(arr)) newArr = newArr.concat(flatten(arr));
    else newArr.push(arr);
  });
  return newArr;
}
