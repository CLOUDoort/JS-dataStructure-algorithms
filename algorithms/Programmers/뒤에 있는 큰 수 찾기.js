const solution = (numbers) => {
  const ans = [];
  const idx = numbers.findIndex((v, i) => v > numbers[0]);
  if (idx !== -1) ans.push(numbers[idx]);
  else ans.push(-1);

  for (let i = 1; i < numbers.length - 1; i++) {
    const temp = ans.filter((v) => v !== -1).at(-1);
    console.log(temp);
    if (temp > numbers[i]) ans.push(temp);
    else {
      let flag = false;
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] > numbers[i]) {
          ans.push(numbers[j]);
          flag = true;
          break;
        }
      }
      if (!flag) ans.push(-1);
    }
  }
  ans.push(-1);

  return ans;
};

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
