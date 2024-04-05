function solution(n) {
  const ans = [];
  const arr = Array.from({ length: n }, () => Array(n).fill(0));

  const directions = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];

  let row = -1;
  let col = 0;

  let nowValue = 1;
  let nowDirectionIndex = 0;

  for (let i = n; i > 0; i--) {
    const [dRow, dCol] = directions[nowDirectionIndex];

    for (let j = 0; j < i; j++) {
      row += dRow;
      col += dCol;

      arr[row][col] = nowValue;
      nowValue++;
    }

    nowDirectionIndex = (nowDirectionIndex + 1) % 3;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j]) ans.push(arr[i][j]);
    }
  }

  return ans;
}
