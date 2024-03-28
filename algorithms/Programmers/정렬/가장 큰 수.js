function solution(numbers) {
  let ans = numbers
    .map((v) => v.toString())
    .sort((a, b) => b + a - (a + b))
    .join('');

  return ans[0] === '0' ? '0' : ans;
}
