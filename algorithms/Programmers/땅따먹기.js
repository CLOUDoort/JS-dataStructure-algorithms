function solution(land) {
  let ans = 0;
  const length = land.length;

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < 4; j++) {
      land[i][j] += Math.max(...land[i - 1].filter((_, i) => i !== j));
    }
  }

  return Math.max(...land.at(-1));
}
