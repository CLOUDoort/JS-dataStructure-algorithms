const solution = (w, h) => {
  const getGCD = (a, b) => (b > 0 ? getGCD(b, a % b) : a);
  const gcd = getGCD(w, h);

  const wGCD = w / gcd;
  const hGCD = h / gcd;

  const plus = wGCD + hGCD - 1;

  return w * h - plus * gcd;
};
