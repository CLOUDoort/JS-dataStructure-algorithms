const solution = (maps) => {
  const ans = [];
  const length = maps.length;
  const visited = Array.from({ length }, () => []);
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (visited[i][j] === true || maps[i][j] === 'X') continue;

      const stack = [];
      let sum = Number(maps[i][j]);
      visited[i][j] = true;
      stack.push([i, j]);

      while (stack.length > 0) {
        const [curX, curY] = stack.pop();
        for (let k = 0; k < 4; k++) {
          const x = curX + dx[k];
          const y = curY + dy[k];

          if (x < 0 || x >= length || y < 0 || y >= length) continue;
          if (visited[x][y] === true || maps[x][y] === 'X') continue;

          sum += Number(maps[x][y]);
          visited[x][y] = true;
          stack.push([x, y]);
        }
      }

      ans.push(sum);
    }
  }
  if (ans.length === 0) return [-1];
  ans.sort((a, b) => a - b);
  return ans;
};

console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1']));
