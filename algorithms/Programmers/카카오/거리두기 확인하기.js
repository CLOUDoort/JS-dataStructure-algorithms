const solution = (places) => {
  const ans = Array.from({ length: 5 }).fill(1);
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const checkBoundary = (x, y) => x < 0 || x >= 5 || y < 0 || y >= 5;

  const getManhattanDistanceParticipantArr = (place, x, y) => {
    const arr = [
      [x - 2, y],
      [x + 2, y],
      [x, y - 2],
      [x, y + 2],
      [x - 1, y - 1],
      [x - 1, y + 1],
      [x + 1, y + 1],
      [x + 1, y - 1],
    ];

    return arr.filter((el) => {
      const [x, y] = el;
      if (checkBoundary(x, y) || place[x][y] !== 'P') return false;
      return true;
    });
  };

  for (let k = 0; k < 5; k++) {
    const place = places[k];
    let flag = false;
    let participants = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P') participants.push([i, j]);
      }
    }

    for (const [curX, curY] of participants) {
      for (let i = 0; i < 4; i++) {
        const x = curX + dx[i];
        const y = curY + dy[i];
        if (checkBoundary(x, y)) continue;

        if (place[x][y] === 'P') {
          ans[k] = 0;
          flag = true;
          break;
        }
      }

      if (flag) break;

      const mDis = getManhattanDistanceParticipantArr(place, curX, curY);
      if (mDis.length === 0) continue;

      for (const [disX, disY] of mDis) {
        const diffX = curX - disX;
        const diffY = curY - disY;

        if (diffX === -2 && place[curX + 1][curY] === 'X') continue;
        if (diffX === 2 && place[curX - 1][curY] === 'X') continue;
        if (diffY === -2 && place[curX][curY + 1] === 'X') continue;
        if (diffY === 2 && place[curX][curY - 1] === 'X') continue;

        if (diffX === 1 && diffY === 1 && place[curX][curY - 1] === 'X' && place[curX - 1][curY] === 'X') continue;
        if (diffX === 1 && diffY === -1 && place[curX - 1][curY] === 'X' && place[curX][curY + 1] === 'X') continue;
        if (diffX === -1 && diffY === -1 && place[curX][curY + 1] === 'X' && place[curX + 1][curY] === 'X') continue;
        if (diffX === -1 && diffY === 1 && place[curX + 1][curY] === 'X' && place[curX][curY - 1] === 'X') continue;

        ans[k] = 0;
        break;
      }
    }
  }

  return ans;
};
