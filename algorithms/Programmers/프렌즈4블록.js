function solution(m, n, board) {
  board = board.map((row) => Array.from(row));

  while (true) {
    const find = [];
    for (let y = 0; y < m - 1; y++) {
      for (let x = 0; x < n - 1; x++) {
        const pick = board[y][x];
        if (pick && pick === board[y][x + 1] && pick === board[y + 1][x] && pick === board[y + 1][x + 1]) {
          find.push([y, x]);
        }
      }
    }
    if (!find.length) return board.flat().filter((v) => !v).length;
    find.forEach(([y, x]) => {
      board[y][x] = 0;
      board[y][x + 1] = 0;
      board[y + 1][x] = 0;
      board[y + 1][x + 1] = 0;
    });

    for (let y = m - 1; y >= 0; y--) {
      for (let x = 0; x < n; x++) {
        for (let i = y - 1; i >= 0; i--) {
          if (board[y][x]) break;
          if (board[i][x]) {
            board[y][x] = board[i][x];
            board[i][x] = 0;
            break;
          }
        }
      }
    }
  }
}
