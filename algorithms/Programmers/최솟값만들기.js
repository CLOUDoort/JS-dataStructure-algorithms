const solution = (A, B) => {
  const length = A.length;
  const sortedA = A.slice().sort((a, b) => a - b);
  const sortedB = B.slice().sort((a, b) => b - a);
  let ans = 0;

  for (let i = 0; i < length; i++) {
    ans += sortedA[i] * sortedB[i];
  }
  return ans;
};
