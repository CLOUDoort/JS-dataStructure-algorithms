function solution(data, col, row_begin, row_end) {
  col--;
  row_begin--;
  row_end--;

  const sorted = data.sort((a, b) => {
    if (a[col] < b[col]) return -1;
    else if (a[col] > b[col]) return 1;
    else {
      if (a[0] < b[0]) return 1;
      else if (a[0] > b[0]) return -1;
      return 0;
    }
  });

  const list = [];

  for (let i = row_begin; i <= row_end; i++) {
    const tuple = sorted[i];
    const cnt = tuple.reduce((acc, cur) => acc + (cur % (i + 1)), 0);
    list.push(cnt);
  }

  let ans = list[0];

  for (let i = 1; i < list.length; i++) {
    ans = ans ^ list[i];
  }

  return ans;
}

const solution2 = (data, col, row_begin, row_end) => {
  data = data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);

  return data
    .map((row, i) => row.reduce((acc, col) => acc + (col % (i + 1)), 0))
    .slice(row_begin - 1, row_end)
    .reduce((acc, val) => acc ^ val, 0);
};
