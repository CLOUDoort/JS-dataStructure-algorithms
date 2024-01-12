const solution = (x, y, page) => {
  let time = 1;
  while (true) {
    if (Math.floor(time / x) + Math.floor(time / y) >= page) {
      return time;
    }
    time += 1;
  }
};

console.log(solution(1, 1, 5));
console.log(solution(3, 5, 4));
