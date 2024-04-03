/*
  - 순열(Permutation)은 서로 다른 n개의 원소에서 r개를 중복없이 순서에 상관있게 선택 혹은 나열
  - nPr = n! / (n-r)!
*/

const permutation = (n, arr) => {
  const ans = [];
  const temp = Array(n);
  const visited = Array.from({ length: arr.length }, () => 0);

  const dfs = (level = 0) => {
    if (level === n) {
      ans.push(temp.slice());
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        temp[level] = arr[i];
        dfs(level + 1);
        visited[i] = 0;
      }
    }
  };
  dfs();

  return ans;
};

console.log(permutation(2, [1, 2, 3]));
