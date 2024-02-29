const solution = (numbers, target) => {
  let ans = 0;
  const DFS = (count, sum) => {
    if (count === numbers.length) {
      if (sum === target) ans++;
      return;
    }

    DFS(count + 1, sum + numbers[count]);
    DFS(count + 1, sum - numbers[count]);
  };

  DFS(0, 0);
  return ans;
};

console.log(solution([1, 1, 1, 1, 1], 3));
