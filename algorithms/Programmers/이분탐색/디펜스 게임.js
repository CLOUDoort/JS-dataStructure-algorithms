// 이분탐색
const solution1 = (n, k, enemy) => {
  let [left, right] = [0, enemy.length];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const round = enemy.slice(0, mid).sort((a, b) => b - a);
    let chance = k;

    const remainEnemy = round.reduce((acc, cur) => {
      if (chance) {
        chance--;
        return acc;
      }
      return acc + cur;
    });

    if (n - remainEnemy >= 0) left = mid + 1;
    else right = mid - 1;
  }

  return left - 1;
};

console.log(solution1(7, 3, [4, 2, 4, 5, 3, 3, 1]));

const solution2 = (n, k, enemy) => {
  let left = 0,
    right = enemy.length;

  const check = (n, k, mid, enemy) => {
    if (mid <= k) return true;

    let round = enemy.slice(0, mid).sort((a, b) => b - a);
    let sum = 0;

    for (let i = k; i < round.length; i++) {
      sum += t[i];
      if (sum > n) return false;
    }

    return true;
  };

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(n, k, mid, enemy)) left = mid + 1;
    else right = mid - 1;
  }

  return left - 1;
};
