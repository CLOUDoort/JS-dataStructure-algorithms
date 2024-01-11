const solution = (n) => {
  let uglyNumberList = [1];
  for (let i = 0; i < n - 1; i++) {
    let last = uglyNumberList.at(-1);

    let temp = [];
    for (let i of uglyNumberList) {
      for (let j of [i * 2, i * 3, i * 5]) {
        if (j > last) temp.push(j);
      }
    }
    uglyNumberList.push(Math.min(...temp));
  }
  return uglyNumberList.at(-1);
};

console.log(solution(10000));
