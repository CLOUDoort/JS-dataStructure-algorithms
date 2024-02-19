const solution = (citations) => {
  const sorted = citations.sort((a, b) => b - a);
  let ans = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (i + 1 <= sorted[i]) ans++;
  }

  return ans;
};
