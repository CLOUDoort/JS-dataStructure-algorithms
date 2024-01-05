const makePrison = (n) => {
  return Array(n).fill(1);
};

const solution = (door) => {
  for (let i = 2; i <= door.length; i++) {
    for (let n = i; n <= door.length; n++) {
      if (n % i === 0) door[n - 1] *= -1;
    }
  }

  return door.filter((v) => v === 1).length;
};

const door = makePrison(120);
console.log(solution(door));
