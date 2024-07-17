function solution(expression) {
  const ans = [];
  const compute = (o1, o2, operator) => eval(`${o1}${operator}${o2}`);

  // 숫자와 연산자 분리
  const operand = expression.replaceAll(/[-*+]/g, ',').split(',');
  let operator = [];
  expression.split('').forEach((e) => {
    if (isNaN(e)) operator.push(e);
  });

  // 분리된 것 다시 합치기
  const arr = [];
  for (let i = 0; i < operand.length; i++) {
    operand[i] && arr.push(operand[i]);
    operator[i] && arr.push(operator[i]);
  }

  // 중복 제거
  operator = [...new Set(operator)];

  // 경우의 수
  let operatorCase;
  if (operator.length === 1) return Math.abs(eval(expression));
  else if (operator.length === 2)
    operatorCase = [
      [0, 1],
      [1, 0],
    ];
  else {
    operatorCase = [
      [0, 1, 2],
      [0, 2, 1],
      [1, 0, 2],
      [1, 2, 0],
      [2, 0, 1],
      [2, 1, 0],
    ];
  }

  operatorCase.forEach((c) => {
    let temp = [...arr];
    c.forEach((o) => {
      for (let i = 0; i < temp.length; i++) {
        if (temp[i] === operator[o]) {
          temp[i - 1] = compute(temp[i - 1], temp[i + 1], operator[o]);
          temp.splice(i, 2);
          i -= 2;
        }
      }
    });
    ans.push(temp[0]);
  });

  return Math.max(...ans.map((v) => Math.abs(v)));
}

const solution2 = (expression) => {
  const splitted = expression.split(/([*+-])/);

  const solve = (precedence, left = 0, right = splitted.length) => {
    console.log(left, right, splitted);
    if (left + 1 === right) {
      return eval(splitted[left]);
    }

    for (const operator of precedence) {
      for (let i = right - 2; i > left; i -= 2) {
        if (splitted[i] === operator) {
          return eval(`${solve(precedence, left, i)}${operator}${solve(precedence, i + 1, right)}`);
        }
      }
    }
    return Number.POSITIVE_INFINITY;
  };

  return Math.max(
    ...[
      ['*', '+', '-'],
      ['*', '-', '+'],
      ['+', '*', '-'],
      ['+', '-', '*'],
      ['-', '*', '+'],
      ['-', '+', '*'],
    ]
      .map((p) => solve(p))
      .map(Math.abs)
  );
};

console.log(solution('100-200*300-500+20'));
console.log(solution2('100-200*300-500+20'));
