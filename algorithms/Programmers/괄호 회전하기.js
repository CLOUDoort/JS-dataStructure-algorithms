const check = (s) => {
  const parenSt = ['[', '(', '{'];
  const parenEn = [']', ')', '}'];

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (parenSt.includes(s[i])) stack.push(s[i]);
    else {
      if (!stack.length) return 0;
      if (parenSt.indexOf(stack.at(-1)) === parenEn.indexOf(s[i])) stack.pop();
    }
  }
  return stack.length ? 0 : 1;
};

const leftRotate = (s) => {
  return s.slice(1) + s[0];
};

const solution = (s) => {
  const maxRotate = s.length;
  let ans = 0;

  for (let i = 0; i < maxRotate; i++) {
    if (check(s)) ans++;
    s = leftRotate(s);
  }

  return ans;
};
