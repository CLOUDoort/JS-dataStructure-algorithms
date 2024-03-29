function solution(numbers) {
  let arr = [];
  let check = Array.from({ length: numbers.length }, () => 0);

  const dfs = (str = '') => {
    arr.push(+str);
    for (let i = 0; i < numbers.length; i++) {
      if (!check[i]) {
        check[i] = 1;
        dfs(str + numbers[i]);
        check[i] = 0;
      }
    }
  };
  dfs();
  arr.shift();

  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  return Array.from(new Set([...arr])).filter(isPrime).length;
}
