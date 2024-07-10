const solution = (arrayA, arrayB) => {
  let ans = 0;
  const setA = Array.from(new Set(arrayA));
  const setB = Array.from(new Set(arrayB));

  const getMultipleGCD = (arr) => {
    if (arr.length === 0) return 0;
    let result = arr[0];

    // const gcd = (a, b) => {
    //   while (b != 0) {
    //     [a, b] = [b, a % b];
    //   }
    //   return a;
    // };
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

    for (let i = 1; i < arr.length; i++) {
      result = gcd(result, arr[i]);
      if (result === 1) break;
    }

    return result;
  };

  const aGCD = getMultipleGCD(setA);
  const bGCD = getMultipleGCD(setB);

  if (aGCD === 1 && bGCD === 1) return 0;

  const isDivisible = (gcd, arr) => {
    for (let num of arr) {
      if (num % gcd === 0) return true;
    }
    return false;
  };

  if (bGCD !== 1 && !isDivisible(bGCD, setA)) {
    ans = bGCD;
  }
  if (aGCD !== 1 && !isDivisible(aGCD, setB)) {
    ans = Math.max(ans, aGCD);
  }

  return ans;
};

console.log(solution([10, 17], [5, 20]));
console.log(solution([10, 20], [5, 17]));
console.log(solution([14, 35, 119], [18, 30, 102]));

const solution2 = (arrayA, arrayB) => {
  const getAnswer = (a, b) => {
    a.sort((a, b) => a - b);

    for (let i = a[0]; i > 1; i--) {
      if (a.every((v) => v % i === 0) && !b.some((v) => v % i === 0)) return i;
    }
    return 0;
  };

  const aResult = getAnswer(arrayA, arrayB);
  const bResult = getAnswer(arrayB, arrayA);

  return aResult > bResult ? aResult : bResult;
};
