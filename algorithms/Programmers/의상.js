const solution = (clothes) => {
  let ans = 1;
  const map = new Map();
  clothes.map(([_, type]) => {
    if (map.has(type)) map.set(type, map.get(type) + 1);
    else map.set(type, 1);
  });

  Array.from(map).forEach(([_, arr]) => {
    ans *= arr + 1;
  });

  return ans - 1;
};
