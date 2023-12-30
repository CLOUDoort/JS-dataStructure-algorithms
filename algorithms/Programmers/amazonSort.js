const makeList = (n) => {
  return Array.from(Array(n), (v, i) => `a${i + 1}`).concat(Array.from(Array(n), (v, i) => `b${i + 1}`));
};

const solution = (arr) => {
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);

  return zip(arr.slice(0, arr.length / 2), arr.slice(arr.length / 2)).flat();
};

const amazonSort = (list) => {
  const n = list.length / 2;
  for (let i = 1; i < n; i++) {
    for (let j = i * 2 - 1; j < n + i; j++) {
      [list[j], list[n + i - 1]] = [list[n + i - 1], list[j]];
    }
  }
  return list;
};

const list = makeList(10);
console.log(solution(list));
console.log(amazonSort(list));
