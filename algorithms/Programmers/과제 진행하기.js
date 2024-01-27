const convert = (time) => {
  const arr = time.split(':').map(Number);
  return arr[0] * 60 + arr[1];
};

const solution = (plans) => {
  const sorted = plans
    .slice()
    .map((v) => [v[0], convert(v[1]), +v[2]])
    .sort((a, b) => a[1] - b[1]);

  const result = [];
  const first = sorted.shift();
  let curTime = first[1];

  const stack = [first];

  while (sorted.length) {
    const target = sorted.shift();
    const [_name, time, _spend] = target;
    let timeDiff = time - curTime;
    curTime = time;

    while (stack.length && timeDiff > 0) {
      const latestPlan = stack.pop();
      const [lName, _lTime, lSpend] = latestPlan;

      if (lSpend <= timeDiff) {
        result.push(lName);
        timeDiff -= lSpend;
      } else {
        latestPlan[2] = lSpend - timeDiff;
        timeDiff = 0;
        stack.push(latestPlan);
      }
    }

    stack.push(target);
  }

  while (stack.length) {
    result.push(stack.pop()[0]);
  }

  return result;
};

console.log(
  solution([
    ['science', '12:40', '50'],
    ['music', '12:20', '40'],
    ['history', '14:00', '30'],
    ['computer', '12:30', '100'],
  ])
);
