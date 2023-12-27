const solution = (arr) => {
  return [...arr.filter((v) => v < 0), ...arr.filter((v) => v > 0)];
};

console.log(solution([-1, 1, 3, -2, 2]));
