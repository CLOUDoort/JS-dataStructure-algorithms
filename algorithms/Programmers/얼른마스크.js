const squareSum = (num) => {
  let sum = 0;
  while (num !== 0) {
    sum += Math.floor((num % 10) ** 2);
    num /= 10;
  }
};

let happyList = [1, 7];
let unhappyList = [2, 3, 4, 5, 6, 8, 9];

const solution = (mx) => {
  const ans = [];

  for (let i = 1; i <= mx; i++) {
    let temp = i;
    const list = [];
    while (1) {
      if (temp === 1) {
        ans.push(i);
        break;
      }
      if (happyList.includes(temp)) {
        ans.push(i);
        happyList = Array.from(new Set([...happyList, ...list]));
        break;
      }
      if (unhappyList.includes(temp)) {
        unhappyList = Array.from(new Set([...unhappyList, ...list]));
        break;
      }
      list.push(temp);
      temp = squareSum(temp);
    }
  }

  const total = ans.reduce((acc, cur) => acc + cur, 0);
  return `1 ~ ${mx} 범위의 행복 수는 ${ans.length}개이고 총합은 ${total}입니다.`;
};

console.log(solution(9));
// console.log(solution(99));
// console.log(solution(999));
// console.log(solution(9999));

var dp = [];

function sol(n) {
  if (dp[n]) return dp[n];

  var sum = 0;

  var i = n;
  while (i != 0) {
    sum += Math.floor(Math.pow(i % 10, 2));
    i = Math.floor(i / 10);
  }

  dp[n] = sum;

  if (sum != 1) {
    var r = sol(sum);
    dp[n] = r;
    return r;
  }

  return 1;
}

/********************************************/

var count = 0,
  sum = 0;

var N = 9999;

for (var i = 1; i <= N; i++) {
  if (sol(i) == 1) {
    count++;
    sum += i;
  }
}

console.log(count * sum);
