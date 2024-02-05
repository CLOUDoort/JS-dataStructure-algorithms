const compareBinary = (a, b) => {
  const biA = a.toString(2).match(/1/g).length;
  const biB = b.toString(2).match(/1/g).length;
  return biA === biB;
};

const solution = (n) => {
  let temp = n + 1;
  while (1) {
    if (compareBinary(n, temp)) return temp;
    temp++;
  }
};
