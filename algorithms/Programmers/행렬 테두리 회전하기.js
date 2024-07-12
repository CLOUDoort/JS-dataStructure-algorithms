const solution = (rows, columns, queries) => {
  let i = 1;
  const m = Array.from({ length: rows }, () => Array.from({ length: columns }, () => i++));

  let ans = [];

  queries.forEach((q) => {
    const list = [];
    let [x1, y1, x2, y2] = q.map((v) => v - 1);
    list.push(m[x1][y1]);

    let nxtX = x1;
    let nxtY = y1;

    while (nxtY < y2) {
      nxtY++;
      const nxt = m[nxtX][nxtY];
      m[nxtX][nxtY] = list.at(-1);
      list.push(nxt);
    }
    while (nxtX < x2) {
      nxtX++;
      const nxt = m[nxtX][nxtY];
      m[nxtX][nxtY] = list.at(-1);
      list.push(nxt);
    }
    while (nxtY > y1) {
      nxtY--;
      const nxt = m[nxtX][nxtY];
      m[nxtX][nxtY] = list.at(-1);
      list.push(nxt);
    }
    while (nxtX > x1) {
      nxtX--;
      const nxt = m[nxtX][nxtY];
      m[nxtX][nxtY] = list.at(-1);
      list.push(nxt);
    }

    ans.push(Math.min(...list));
  });

  return ans;
};
