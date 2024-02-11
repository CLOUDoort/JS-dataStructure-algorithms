const solution = (n, a, b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  a = min;
  b = max;
  let ans = 1;

  while (n !== 2) {
    if (a % 2 !== 0 && a === b - 1) break;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    ans++;
    n /= 2;
  }

  return ans;
};

console.log(solution(8, 4, 7));
