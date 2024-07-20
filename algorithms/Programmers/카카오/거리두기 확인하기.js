const solution = (places) => {
  const ans = Array.from({ length: 5 }).fill(1);
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const checkBoundary = (x, y) => x < 0 || x >= 5 || y < 0 || y >= 5;

  // 상하좌우 제외하고 참가자 중심으로 한 맨핸튼 거리에 있는 모든 참가자 수
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

  places.forEach((place) => {
    let flag = false;

    // 참가자수 찾기
    let participants = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P') participants.push([i, j]);
      }
    }

    // 각 참가자마다 거리두기 확인
    for (const [curX, curY] of participants) {
      for (let i = 0; i < 4; i++) {
        const x = curX + dx[i];
        const y = curY + dy[i];

        // 범위 벗어나면 넘어가기
        if (checkBoundary(x, y)) continue;

        // 상하좌우 위치에 다른 참가지 있으면 무조건 거리두기 어긴 것으로 판단하고 Break;
        if (place[x][y] === 'P') {
          ans[k] = 0;
          flag = true;
          break;
        }
      }

      // 거리두기 어긴 사실 있으면 Break;
      if (flag) break;

      // 상하좌우 제외하고 참가자 중심으로 한 맨핸튼 거리에 있는 모든 참가자 수
      const mDis = getManhattanDistanceParticipantArr(place, curX, curY);

      // 맨해튼 거리 범위에 참가자 아무도 없으면 거리두기 지킨 것으로 판단하고 continue;
      if (mDis.length === 0) continue;

      // 참가자와 맨해튼 거리에 있는 참가자의 거리를 비교해서 파티션 있는지 판단
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
  });

  return ans;
};
