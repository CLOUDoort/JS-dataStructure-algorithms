const solution = (n) => {
  const ans = [];

  const Hanoi = (n, from, to, mid) => {
    if (n === 0) return;

    Hanoi(n - 1, from, mid, to);
    ans.push([from, to]);
    Hanoi(n - 1, mid, to, from);
  };

  Hanoi(n, 1, 3, 2);

  return ans;
};

console.log(solution(2));
