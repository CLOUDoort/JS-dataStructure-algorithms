function solution(maps) {
  const xLen = maps.length;
  const yLen = maps[0].length;

  const dist = Array.from({ length: xLen }, () => Array.from({ length: yLen }, () => 0));
  const queue = [[0, 0]];
  maps[0][0] = true;
  dist[0][0] = 1;

  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  while (queue.length) {
    const [a, b] = queue.shift();

    if (a === xLen - 1 && b === yLen - 1) return dist[a][b];

    for (let i = 0; i < 4; i++) {
      const X = a + dx[i];
      const Y = b + dy[i];
      if (X < 0 || X >= xLen || Y < 0 || Y >= yLen) continue;
      if (maps[X][Y] !== 1) continue;

      queue.push([X, Y]);
      maps[X][Y] = true;
      dist[X][Y] = dist[a][b] + 1;
    }
  }

  return -1;
}
