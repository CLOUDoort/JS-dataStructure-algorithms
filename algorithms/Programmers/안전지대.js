function solution(board) {
  const n = board.length;
  const d = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) d.push([i, j]);
  }

  const danger = new Set();

  board.forEach((value, idx) => {
    value.forEach((v, i) => {
      if (v === 1) {
        d.forEach(([a, b]) => {
          const [row, col] = [idx + a, i + b];
          if (row >= 0 && row < n && col >= 0 && col < n) {
            danger.add(`${row} ${col}`);
          }
        });
      }
    });
  });

  return n ** 2 - danger.size;
}
