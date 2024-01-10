const sqrSum = (n) => {
  return [...n.toString()].reduce((acc, cur) => acc + Number(cur) ** 2, 0);
};

const solution = (n) => {
  let tmp = n;
  let ans = '';
  while (true) {
    tmp = sqrSum(tmp);
    if (tmp === 1) {
      ans = 'Happy Number';
      return `${n} is a ${ans}.`;
    }
    if (tmp === n) {
      ans = 'Unhappy Number';
      return `${n} is a ${ans}.`;
    }
  }
};

console.log(solution(7));
console.log(solution(4));
console.log(solution(13));
