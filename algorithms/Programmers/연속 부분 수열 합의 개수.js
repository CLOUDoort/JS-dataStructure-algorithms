const solution = (elements) => {
  const ans = new Set(elements);

  const double = elements.concat(elements);

  const len = elements.length;
  for (let i = 2; i < len; i++) {
    let sum = 0;
    for (let t = 0; t < i; t++) sum += double[t];

    let en = i;
    for (let st = 0; st < len; st++) {
      ans.add(sum);
      sum -= double[st];
      sum += double[en];
    }
  }

  ans.add(elements.reduce((acc, cur) => acc + cur, 0));
  return ans.size;
};

const solution2 = (elements) => {
  const circular = elements.concat(elements);
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
};
