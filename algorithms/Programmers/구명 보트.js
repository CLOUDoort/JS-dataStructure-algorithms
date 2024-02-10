const solution = (people, limit) => {
  let ans = 0;
  const sorted = people.slice().sort((a, b) => a - b);

  let st = 0;
  let en = sorted.length - 1;

  while (st <= en) {
    if (sorted[en] + sorted[st] <= limit) st++;
    ans++;
    en--;
  }

  return ans;
};

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
