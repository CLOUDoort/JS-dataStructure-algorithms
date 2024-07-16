const solution = (n, k) => {
  const ans = [];
  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  const arr = Array.from({ length: n }, (_, i) => i + 1);
  let nth = k - 1;

  while (arr.length) {
    if (nth === 0) {
      ans.push(...arr);
      break;
    }
    const fact = factorial(arr.length - 1);
    const idx = (nth / fact) >> 0;
    nth = nth % fact;

    ans.push(arr[idx]);
    arr.splice(idx, 1);
  }

  return ans;
};
