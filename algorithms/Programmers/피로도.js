const solution = (k, dungeons) => {
  let ans = 0;
  const visited = Array.from({ length: dungeons.length }, () => false);

  const dfs = (hp, level) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= hp) {
        visited[i] = true;
        dfs(hp - dungeons[i][1], level + 1);
        visited[i] = false;
      }
    }
    ans = Math.max(ans, level);
  };
  dfs(k, 0);

  return ans;
};

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
