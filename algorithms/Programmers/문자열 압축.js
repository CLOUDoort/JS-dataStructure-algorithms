function solution(str) {
  let count = 0;
  let result = str[0];
  [...str].forEach((s) => {
    if (s === result.slice(-1)) count += 1;
    else {
      result += count + s;
      count = 1;
    }
  });
  result += count;
  return result;
}

function regularExpression(s) {
  const reg = /(\w)\1*/g;
  let ans = '';

  [...s.matchAll(reg)].forEach((s) => {
    ans += `${s[1]}${s[0].length}`;
  });

  return ans;
}

console.log(solution('aaabbcccccca'));
