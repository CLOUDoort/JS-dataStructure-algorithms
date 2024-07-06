const solution = (weights) => {
  let ans = 0;
  const sorted = weights.sort((a, b) => b - a);
  const map = new Map();

  const calCase = [1, 3 / 2, 2, 4 / 3];

  sorted.forEach((w) => {
    calCase.forEach((c) => {
      if (map.has(w * c)) {
        ans += map.get(w * c);
      }
    });
    map.set(w, (map.get(w) || 0) + 1);
  });

  return ans;
};

console.log(solution([100, 180, 360, 100, 270]));
