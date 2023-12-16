function solution(board) {
  const dxdy = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) dxdy.push([i, j]);
  }

  const bomb = [];
  board.forEach((value, idx) => {
    value.forEach((v, i) => {
      if (v === 1) bomb.push({ x: idx, y: i });
    });
  });

  const line = board.length - 1;
  bomb.forEach(({ x, y }) => {
    dxdy.forEach(([a, b]) => {
      if (!(x + a < 0 || x + a > line || y + b < 0 || y + b > line)) {
        board[x + a][y + b] = 1;
      }
    });
  });

  return board.flat().filter((v) => v === 0).length;
}
