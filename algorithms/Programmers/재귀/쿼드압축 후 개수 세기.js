const solution = (arr) => {
  const ans = [0, 0];

  const divide = (row, col, len) => {
    let flag = false;
    for (let i = row; i < row + len; i++) {
      for (let j = col; j < col + len; j++) {
        if (arr[row][col] !== arr[i][j]) {
          flag = true;
          break;
        }
      }
    }
    const half = Math.floor(len / 2);
    if (flag) {
      divide(row, col, half);
      divide(row + half, col, half);
      divide(row, col + half, half);
      divide(row + half, col + half, half);
    } else {
      ans[arr[row][col]]++;
    }
  };

  divide(0, 0, arr.length);
  return ans;
};

console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
);
