const solution = (numbers, target) => {
  let ans = 0;
  const visited = Array.from({ length: numbers.length }, () => false);
  const DFS = (cur) => {
    if (cur === target) {
      ans++;
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      DFS(cur + numbers[i]);
      DFS(cur - numbers[i]);
      visited[i] = false;
    }
  };

  DFS(0);
  return ans;
};
