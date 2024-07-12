const solution = (N, road, K) => {
  const minCostInfos = Array.from({ length: N + 1 }).fill(Number.MAX_SAFE_INTEGER);
  const line = Array.from({ length: N + 1 }, () => []);

  road.forEach((v) => {
    const [from, to, cost] = v;
    line[from].push({ to, cost });
    line[to].push({ to: from, cost });
  });

  const queue = [{ to: 1, cost: 0 }];
  minCostInfos[1] = 0;

  while (queue.length) {
    const { to, cost } = queue.pop();

    line[to].forEach((next) => {
      if (minCostInfos[next.to] > minCostInfos[to] + cost) {
        minCostInfos[next.to] = minCostInfos[to] + cost;
        queue.push(next);
      }
    });
  }

  return minCostInfos.filter((v) => v <= K).length;
};

console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
);
