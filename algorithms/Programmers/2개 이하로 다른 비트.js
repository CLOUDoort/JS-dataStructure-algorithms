function solution(numbers) {
  const f = (x) => {
    if (x % 2 === 0) return x + 1;
    let bit = `0${x.toString(2)}`;
    let idx = bit.lastIndexOf('0');
    return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2);
  };
  const ans = [];
  for (let number of numbers) ans.push(f(number));
  return ans;
}
