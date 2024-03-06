function solution(friends, gifts) {
  const character = friends.reduce((acc, cur, i) => {
    acc[cur] = i;
    return acc;
  }, {});

  const arr = Array.from({ length: friends.length }, () => Array.from({ length: friends.length }, () => 0));
  gifts.forEach((gift) => {
    const from = gift.split(' ')[0];
    const to = gift.split(' ')[1];
    arr[character[from]][character[to]] = (arr[character[from]][character[to]] || 0) + 1;
  });

  const giftIdx = [];
  for (let i = 0; i < arr.length; i++) {
    let give = 0;
    let take = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      give += arr[i][j];
      take += arr[j][i];
    }
    giftIdx[i] = { give, take, idx: give - take };
  }

  const ans = Array.from({ length: friends.length }, () => 0);

  const check = Array.from({ length: friends.length }, () => []);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (check[i][j] || check[j][i]) continue;
      if (arr[i][j]) {
        check[i][j] = 1;
        check[j][i] = 1;
        if (arr[i][j] > arr[j][i]) ans[i] = (ans[i] || 0) + 1;
        else if (arr[i][j] === arr[j][i]) {
          if (giftIdx[i].idx > giftIdx[j].idx) ans[i] = (ans[i] || 0) + 1;
          else if (giftIdx[i].idx < giftIdx[j].idx) ans[j] = (ans[j] || 0) + 1;
        } else ans[j] = (ans[j] || 0) + 1;
      } else if (!arr[i][j] && !arr[j][i]) {
        check[i][j] = 1;
        check[j][i] = 1;
        if (giftIdx[i].idx > giftIdx[j].idx) ans[i] = (ans[i] || 0) + 1;
        else if (giftIdx[i].idx < giftIdx[j].idx) ans[j] = (ans[j] || 0) + 1;
      }
    }
  }
  return Math.max(...ans);
}
