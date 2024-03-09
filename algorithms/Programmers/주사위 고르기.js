const pickDice = (pickSize, length) => {
  const arr = [];
  const DFS = (count = [], start = 0) => {
    if (count.length === pickSize) {
      arr.push([...count]);
      return;
    }
    if (start === length) return;
    for (let i = start; i < length; i++) {
      count.push(i);
      DFS(count, i + 1);
      count.pop();
    }
  };
  DFS();
  return arr;
};

const restDice = (arr, length) => {
  return arr.map((c) => {
    const b = Array.from({ length }, (_, i) => i);
    c.forEach((n) => b.splice(b.indexOf(n), 1));
    return b;
  });
};

const simulateCase = (length) => {
  const caseArr = [];
  const DFS = (count = []) => {
    if (count.length === length) {
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
  return caseArr;
};

const solution = (dice) => {
  const length = dice.length;
  const pickSize = length / 2;
  let max = 0;
  let ans = [];

  const A = pickDice(pickSize, length);
  const B = restDice(A, length);
  const caseArr = simulateCase(length);

  const aSum = [];
  const bSum = [];
  for (let i = 0; i < A.length; i++) {
    const temp = [];
    for (let j = 0; j < caseArr.length; j++) {
      let sum = 0;
      A[i].forEach((v, idx) => {
        sum += dice[v][caseArr[j][idx]];
      });
      temp.push(sum);
    }
    aSum.push([...temp]);
  }
  for (let i = 0; i < B.length; i++) {
    const temp = [];
    for (let j = 0; j < caseArr.length; j++) {
      let sum = 0;
      B[i].forEach((v, idx) => {
        sum += dice[v][caseArr[j][idx + pickSize]];
      });
      temp.push(sum);
    }
    bSum.push([...temp]);
  }

  for (let i = 0; i < aSum.length; i++) {
    let wins = 0;
    aSum[i].forEach((v, idx) => {
      if (v > bSum[i][idx]) wins++;
    });
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
