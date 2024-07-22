const solution = (board) => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const xLen = board.length;
  const yLen = board[0].length;

  const visited = Array.from({ length: xLen }, () => Array.from({ length: yLen }).fill(0));

  let ans = -1;

  let st;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') st = [i, j];
    }
  }

  const checkCondition = (x, y) => x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] === 'D';

  const queue = [[st[0], st[1], 0]];

  while (queue.length) {
    const [x, y, count] = queue.shift();
    if (board[x][y] === 'G') {
      ans = count;
      break;
    }
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      while (!checkCondition(nx, ny)) {
        nx += dx[i];
        ny += dy[i];
      }

      nx -= dx[i];
      ny -= dy[i];

      if (visited[nx][ny] === 0) {
        queue.push([nx, ny, count + 1]);
        visited[nx][ny] = 1;
      }
    }
  }

  return ans;
};
