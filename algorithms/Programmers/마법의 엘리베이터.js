const solution1 = (storey) => {
  let ans = 0;
  let remain;

  while (storey) {
    remain = storey % 10;
    storey = Math.floor(storey / 10);

    if (remain < 5) ans += remain;
    else if (remain > 5) {
      ans += 10 - remain;
      storey++;
    } else {
      ans += remain;
      if (storey % 10 >= 5) storey++;
    }
  }
};

const solution2 = (storey) => {
  if (storey < 5) return storey;
  const r = storey % 10;
  const m = (storey - r) / 10;

  return Math.min(r + solution2(m), 10 - r + solution2(m + 1));
};
