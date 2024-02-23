const solution = (s) => {
  const arr = s
    .slice(2, s.length - 2)
    .split('},{')
    .map((v) => [...v.split(',')].map(Number))
    .sort((a, b) => a.length - b.length);
  const set = new Set();

  arr.forEach((v) => {
    for (let i = 0; i < v.length; i++) {
      if (!set.has[v[i]]) set.add(v[i]);
    }
  });

  return Array.from(set);
};
