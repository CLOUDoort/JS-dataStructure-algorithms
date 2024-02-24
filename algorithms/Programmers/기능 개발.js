const solution = (progresses, speeds) => {
  const ans = [];

  while (1) {
    let count = 0;
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] >= 100) continue;
      progresses[i] += speeds[i];
    }
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) break;
      else count++;
    }
    if (count) ans.push(count);
    while (count--) {
      progresses.shift();
      speeds.shift();
    }
    if (progresses.length === 0) break;
  }

  return ans;
};
