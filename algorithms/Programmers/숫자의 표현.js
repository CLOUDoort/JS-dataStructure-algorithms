const solution = (n) => {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 !== 0) ans++;
  }

  return ans;
};

console.log(solution(15));

// const solution = (n) => {
//   let ans = 0;
//   let now = 1,
//     count = 1,
//     plusNum = 0;

//   while (count <= n) {
//     plusNum += now;
//     if (plusNum >= n) {
//       if (plusNum === n) ans++;
//       plusNum = 0;
//       count++;
//       now = count;
//     } else now++;
//   }
//   return ans;
// };
