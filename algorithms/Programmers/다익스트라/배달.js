const solution = (N, road, K) => {
  // 1번 마을에서 시작해서 N번 마을까지의 최소 거리 기록
  const record = Array.from({ length: N + 1 }).fill(Number.MAX_SAFE_INTEGER);
  const lines = Array.from({ length: N + 1 }, () => []);

  road.forEach((v) => {
    const [from, to, cost] = v;

    lines[from].push({ to, cost });
    lines[to].push({ to: from, cost });
  });

  let queue = [{ to: 1, cost: 0 }];
  record[1] = 0;

  while (queue.length) {
    let { to } = queue.pop();

    lines[to].forEach((next) => {
      if (record[next.to] > record[to] + next.cost) {
        record[next.to] = record[to] + next.cost;
        queue.push(next);
      }
    });
  }

  return record.filter((r) => r <= K).length;
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
