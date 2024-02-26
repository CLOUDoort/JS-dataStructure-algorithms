const solution = (priorities, location) => {
  let ans = 1;

  while (1) {
    const max = Math.max(...priorities);
    while (1) {
      const firstEl = priorities.shift();
      if (max > firstEl) {
        priorities.push(firstEl);
        if (location === 0) location = priorities.length - 1;
        else location--;
      } else {
        if (location === 0) return ans;
        location--;
        ans++;
        break;
      }
    }
  }
};

const solution2 = (priorities, location) => {
  const arr = priorities.map((priority, index) => {
    return { index, priority };
  });
  const queue = [];

  while (arr.length > 0) {
    const firstEl = arr.shift();
    const hasHigh = arr.some((el) => el.priority > firstEl.priority);
    if (hasHigh) arr.push(firstEl);
    else queue.push(firstEl);
  }

  return queue.findIndex((el) => el.index === location) + 1;
};
