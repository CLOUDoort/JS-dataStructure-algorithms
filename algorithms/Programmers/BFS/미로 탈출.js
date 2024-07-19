const solution = (maps) => {
  const xLen = maps.length;
  const yLen = maps[0].length;
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  let st, lever;
  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (maps[i][j] === 'L') lever = [i, j];
      if (maps[i][j] === 'S') st = [i, j];
    }
  }

  const BFS = (start, startValue, end) => {
    const visited = Array.from({ length: xLen }, () => Array.from({ length: yLen }).fill(false));
    const record = Array.from({ length: xLen }, () => Array.from({ length: yLen }).fill(Number.MAX_SAFE_INTEGER));

    const queue = [];
    queue.push(start);
    const [sx, sy] = queue[0];
    record[sx][sy] = startValue;
    visited[sx][sy] = true;

    while (queue.length) {
      const [curX, curY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const x = curX + dx[i];
        const y = curY + dy[i];

        if (x < 0 || y < 0 || x >= xLen || y >= yLen || maps[x][y] === 'X' || visited[x][y]) continue;

        if (maps[x][y] === end) return record[curX][curY] + 1;

        queue.push([x, y]);
        visited[x][y] = true;
        record[x][y] = Math.min(record[x][y], record[curX][curY] + 1);
      }
    }
    return -1;
  };

  const leverValue = BFS(st, 0, 'L');
  if (leverValue === -1) return -1;

  return BFS(lever, leverValue, 'E');
};

console.log(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE']));
