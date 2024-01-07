// 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31

const subdate = (date) => {
  let year = parseInt(date.slice(0, 4), 10);
  let month = parseInt(date.slice(4, 6), 10);
  let day = parseInt(date.slice(6), 10);
  let days = year * 365 + day;

  const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 1; i < month; i++) {
    days += months[i];
  }
  return days;
};

const solution = (a, b) => {
  return Math.abs(subdate(a) - subdate(b));
};

console.log(solution('20070515', '20070501')); // 14
console.log(solution('20070501', '20070515')); // 14
console.log(solution('20070301', '20070515')); // 75
