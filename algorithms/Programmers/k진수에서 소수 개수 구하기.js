const solution = (n, k) => {
  const checkPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const target = n.toString(k);
  if (target.length === 1) return 1;

  let ans = 0;
  const arr = target.split('0').map(Number);
  for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i])) ans++;
  }

  return ans;
};
