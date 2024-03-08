const solution = (dice) => {
  const len = dice.length;
  const pickSize = len / 2;
  const A = [];
  let max = 0;
  let ans = [];

  const pickDice = (count = [], start = 0) => {
    if (count.length === pickSize) {
      A.push([...count]);
      return;
    }
    if (start === len) return;
    for (let i = start; i < len; i++) {
      count.push(i);
      pickDice(count, i + 1);
      count.pop();
    }
  };
  pickDice();
  const B = A.map((c) => {
    const b = Array.from({ len }, (_, i) => i);
    c.forEach((n) => b.splice(b.indexOf(n), 1));
    return b;
  });

  const simulate = (a, b) => {
    const caseArr = [];
    let wins;
    const DFS = (count = []) => {
      if (count.length === a.length) {
        caseArr.push([...count]);
        return;
      }
      for (let i = 0; i < 6; i++) {
        count.push(i);
        DFS(count);
        count.pop();
      }
    };
    DFS();
    console.log(caseArr);
    for (let i = 0; i < caseArr.length; i++) {
      let sumA = 0;
      let sumB = 0;
      caseArr[i].forEach((c, idx) => {
        sumA += dice[A[idx]][c];
        sumB += dice[B[idx]][c];
      });
      if (sumA > sumB) wins++;
    }
  };

  for (let i = 0; i < A.length; i++) {
    const wins = simulate(A[i], B[i]);
    if (wins > max) {
      max = wins;
      ans = [...A[i]];
    }
  }

  return ans.sort((a, b) => a - b).map((i) => i + 1);
};

console.log(
  solution([
    [1, 2, 3, 4, 5, 6],
    [3, 3, 3, 3, 4, 4],
    [1, 3, 3, 4, 4, 4],
    [1, 1, 4, 4, 5, 5],
  ])
);
