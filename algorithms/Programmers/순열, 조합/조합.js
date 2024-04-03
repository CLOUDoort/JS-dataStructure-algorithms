/**
 * 조합(Combination)은 서로 다른 n개의 원소에서 r개를 중복없이 순서에 상관없게 선택 혹은 나열
 * nCr = n! / (n-r)!r!
 */

const combination = (n, arr) => {
  const ans = [];
  const temp = Array(n);

  const dfs = (level = 0, st = 0) => {
    if (level === n) {
      ans.push(temp.slice());
      return;
    }

    for (let i = st; i < arr.length; i++) {
      temp[level] = arr[i];
      dfs(level + 1, i + 1);
    }
  };
  dfs();

  return ans;
};

console.log(combination(2, [1, 2, 3]));
