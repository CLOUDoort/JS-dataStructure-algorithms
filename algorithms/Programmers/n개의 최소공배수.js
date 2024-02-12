// a를 b로 나눈 나머지를 r이라고 했을 때, a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

// 두 수의 곱을 최대공약수로 나누 값은 두 수의 최소공배수와 같다.
const solution = (arr) => {
  return arr.reduce((a, b) => (a / gcd(a, b)) * b);
};
