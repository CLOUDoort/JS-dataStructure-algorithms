const solution = (dirs) => {
  const dirKey = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  let ans = 0;
  let cur = [0, 0];
  const map = new Map();

  for (const dir of dirs) {
    const [dx, dy] = dirKey[dir];
    const [x, y] = cur;
    const nextX = x + dx;
    const nextY = y + dy;
    if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) continue;

    const key = `${x}${y}${nextX}${nextY}`;
    const value = `${nextX}${nextY}${x}${y}`;

    if (map.get(key) !== value && map.get(value) !== key) {
      ans++;
    }

    map.set(key, value);
    cur = [nextX, nextY];
  }

  return ans;
};
