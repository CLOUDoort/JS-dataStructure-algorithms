const makeList = (n) => {
  return Array.from({ length: n }, (v, i) => `a${i + 1}`).concat(Array.from({ length: n }, (v, i) => `b${i + 1}`));
};

const amazonSort = (list) => {
  const n = list.length / 2;
  // 총 n-1번 swap
  for (let i = 1; i < n; i++) {
    // 1, 3, 5...
    for (let j = i * 2 - 1; j < n + i; j++) {
      [list[j], list[n + i - 1]] = [list[n + i - 1], list[j]];
    }
  }
  return list;
};

const list = makeList(10);
console.log(amazonSort(list));
