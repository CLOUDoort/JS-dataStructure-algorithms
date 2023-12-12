/**
 * 객체를 받아들이고 문자열에 해당하는 모든 값의 배열을 반환하는 collectStrings라는 함수를 작성합니다.
 */

function collectStrings(obj) {
  let collect = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') collect.push(obj[key]);
    else if (typeof obj[key] === 'object') {
      collect = collect.concat(collectStrings(obj[key]));
    }
  }
  return collect;
}

function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}
