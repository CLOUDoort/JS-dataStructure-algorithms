function timeToMin(time) {
  const [hh, mm] = time.split(':').map(Number);
  return hh * 60 + mm;
}

function solution(plans) {
  const stack = [];

  const sortedPlans = plans.map(([subject, time, count]) => [subject, timeToMin(time), Number(count)]).sort((a, b) => b[1] - a[1]);
  console.log(sortedPlans);
  while (sortedPlans.length) {
    console.log(stack);
    const [subject, time, count] = sortedPlans.pop();
    stack.forEach((val, idx) => {
      if (time < val[1]) stack[idx][1] += count;
    });
    stack.push([subject, time + count]);
  }

  console.log(stack);
  const answer = stack.sort((a, b) => a[1] - b[1]).map((val) => val[0]);
  return answer;
}

console.log(
  solution([
    ['science', '12:40', '50'],
    ['music', '12:20', '40'],
    ['history', '14:00', '30'],
    ['computer', '12:30', '100'],
  ])
);
