const solution1 = (k, tangerine) => {
  const dict = {};
  tangerine.forEach((v) => (dict[v] = (dict[v] || 0) + 1));
  const arr = Object.values(dict).sort((a, b) => b - a);

  let ans = 0;
  for (const t of arr) {
    ans++;
    if (k > t) k -= t;
    else break;
  }

  return ans;
};

const solution2 = (k, tangerine) => {
  const data = new Map();
  tangerine.forEach((v) => {
    if (data.has(v)) data.set(v, data.get(v) + 1);
    else data.set(v, 1);
  });
  const sorted = Array.from(data).sort((a, b) => b[1] - a[1]);

  let temp = 0;
  for (let i = 0; i < sorted.length; i++) {
    temp += sorted[i][1];
    if (temp >= k) return i + 1;
  }
};
