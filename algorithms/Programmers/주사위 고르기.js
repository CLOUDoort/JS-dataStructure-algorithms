// 브루트포스
// 1. 가능한 N/2개의 주사위 조합 생성(주사위 중복 X)
// 2. 조합별로 주사위를 굴렸을 때 얻을 수 있는 6^(N/2) * 2개의 결과 저장(A, B)
// 3. A의 모든 n에 대하여 B의 결과에서 n보다 작은 수의 숫자를 모두 더하여 승리 횟수 구하기(이진탐색 활용)
// 4. 최대 승리 횟수 + 최대로 승리했을 때의 조합 인덱스 저장
// 5. combination[최대 승리 인덱스]

function solution(dice) {
  // 1.
  const N = dice.length;
  const combination = [];
  const tmp = [];
  const dfs = (N, prev = 0) => {
    if (tmp.length === N / 2) {
      combination.push([...tmp]);
      return;
    }
    for (let i = prev + 1; i <= N; i++) {
      tmp.push(i);
      dfs(N, i);
      tmp.pop();
    }
  };
  dfs(N);

  // 2.
  const simulateAllDices = (dices) => {
    const result = [];
    const roll = (dices, count = 0, sum = 0) => {
      if (dices.length === count) {
        result.push(sum);
        return;
      }
      const currentDice = dice[dices[count] - 1];
      for (let i = 0; i < 6; i++) {
        roll(dices, count + 1, sum + currentDice[i]);
      }
    };
    roll(dices);
    return result;
  };

  // 3.
  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    let result = 0;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
        result = mid;
      } else {
        right = mid - 1;
      }
    }
    return result;
  };

  // 3.
  const countWins = (resultA, resultB) => {
    resultB.sort((a, b) => a - b);
    let count = 0;
    for (let num of resultA) {
      count += binarySearch(resultB, num);
    }
    return count;
  };

  // 4.
  const allDices = new Array(N).fill().map((_, i) => i + 1);
  let maxWin = -1;
  let maxIdx = -1;
  for (let i = 0; i < combination.length; i++) {
    const A = combination[i];
    const aSet = new Set(A);
    const B = allDices.filter((v) => !aSet.has(v));

    const resultA = simulateAllDices(A);
    const resultB = simulateAllDices(B);

    const wins = countWins(resultA, resultB);
    if (wins > maxWin) {
      maxWin = wins;
      maxIdx = i;
    }
  }
  return combination[maxIdx];
}

console.log(
  solution([
    [1, 2, 3, 4, 5, 6],
    [3, 3, 3, 3, 4, 4],
    [1, 3, 3, 4, 4, 4],
    [1, 1, 4, 4, 5, 5],
  ])
);
