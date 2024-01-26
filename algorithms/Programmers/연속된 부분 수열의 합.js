const solution = (sequence, k) => {
  let st = 0;
  let en = 0;
  let sum = sequence[st];

  const result = [];
  while (en < sequence.length) {
    if (sum < k) sum += sequence[++en];
    else if (sum > k) sum -= sequence[st++];
    else {
      result.push([st, en]);
      sum += sequence[++en];
      sum -= sequence[st++];
    }
  }
  return result.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
};

console.log(solution([2, 2, 2, 2, 2], 2));
