const operation = (str) => {
  const s = str.toLowerCase();
  const arr = [];
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i].match(/[a-z]/g) !== null && s[i + 1].match(/[a-z]/g) !== null) {
      arr.push(s[i] + s[i + 1]);
    }
  }
  return arr;
};

const solution = (str1, str2) => {
  const a1 = operation(str1);
  const a2 = operation(str2);
  if (a1.length === 0 && a2.length === 0) return 65536;

  let union = a1.length;
  let intersection = 0;
  for (let i = 0; i < a2.length; i++) {
    if (a1.includes(a2[i])) {
      a1.splice(a1.indexOf(a2[i]), 1);
      intersection++;
    } else union++;
  }

  return union === 0 ? 65536 : Math.trunc((intersection / union) * 65536);
};
