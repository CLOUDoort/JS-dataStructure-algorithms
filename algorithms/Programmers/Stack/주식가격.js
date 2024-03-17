function solution1(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let sec = 0;
    for (let j = i + 1; j < prices.length; j++) {
      sec++;
      if (prices[i] > prices[j]) break;
    }
    answer.push(sec);
  }

  return answer;
}

function solution2(prices) {
  const length = prices.length;
  const answer = Array.from({ length }, () => 0);
  const stack = [];

  for (let i = 0; i < length; i++) {
    while (stack.length && prices[i] < prices[stack.at(-1)]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }

  while (stack.length) {
    let temp = stack.pop();
    answer[temp] = length - temp - 1;
  }

  return answer;
}

console.log(solution2([1, 2, 3, 2, 3]));
