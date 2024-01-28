const convert = (plan) => {
  const [subject, time, spend] = plan;
  const [hour, min] = time.split(':').map(Number);
  return [subject, hour * 60 + min, Number(spend)];
};

const solution = (plans) => {
  const queue = plans.map(convert).sort((a, b) => a[1] - b[1]);
  const first = queue.shift();
  let curTime = first[1];

  const result = [];
  const doing = [first];

  while (queue.length) {
    const next = queue.shift();
    const [name, time, spend] = next;
    let timeDiff = time - curTime;
    curTime = time;

    while (doing.length && timeDiff > 0) {
      const latestPlan = doing.pop();
      const [lName, lTime, lSpend] = latestPlan;

      if (lSpend <= timeDiff) {
        result.push(lName);
        timeDiff -= lSpend;
      } else {
        latestPlan[2] = lSpend - timeDiff;
        timeDiff = 0;
        doing.push(latestPlan);
      }
    }
    doing.push(next);
  }

  while (doing.length) {
    result.push(doing.pop()[0]);
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
