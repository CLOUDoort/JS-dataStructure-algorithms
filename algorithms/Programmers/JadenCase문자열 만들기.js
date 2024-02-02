const solution = (s) => {
  const arr = s.split(' ').map((str) => str.toLowerCase());
  return arr.map((v) => v.replace(v.charAt(), v.charAt().toUpperCase())).join(' ');
};
console.log(solution('3people unFollowed me'));
console.log(solution('for the last week'));
