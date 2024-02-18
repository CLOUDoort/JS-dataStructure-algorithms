const solution = (n, left, right) => {
  const ans = [];
  for (let i = left; i <= right; i++) {
    ans.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
  return ans;
};

console.log(solution(3, 2, 5));
