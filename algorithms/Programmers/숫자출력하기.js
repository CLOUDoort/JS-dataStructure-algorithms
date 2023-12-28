const solution = () => {
  const str = 'abced';
  const zero = str.indexOf('a') + '';
  const one = str.indexOf('b') + '';
  const two = str.indexOf('c') + '';
  const five = str.length + '';

  return two + zero + one + five + zero + one + one + one;
};

const betterSolution = () => {
  // 20150111.toString(33) => 33진법 gwnae
  return parseInt('gwnae', '!'.charCodeAt());
};
console.log(betterSolution());
