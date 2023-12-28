const solution = (str) => {
  let ans = [...str];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0 && Number.isFinite(Number(str[i]))) ans[i] = '*';
  }

  return ans.join('');
};

console.log(solution('a1b2cde3~g45hi6'));
