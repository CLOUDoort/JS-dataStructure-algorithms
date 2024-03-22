const solution = (order) => {
  let ans = 0;
  const items = order.slice().sort((a, b) => a - b);
  let cur = 0;
  const stack = [];

  items.forEach((v) => {
    if (v !== order[cur]) stack.push(v);
    else {
      cur++;
      ans++;
      while (v > order[cur]) {
        if (stack.at(-1) === order[cur]) {
          stack.pop();
          cur++;
          ans++;
        } else return ans;
      }
    }
  });

  return ans;
};
