const solution = (p) => {
  // 올바른 괄호 문자열 체크.
  const check = (str) => {
    let temp = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') temp++;
      else temp--;

      if (temp < 0) return false;
    }
    return temp === 0 ? true : false;
  };

  if (check(p)) return p;

  const recursive = (str) => {
    if (str.length === 0) return '';

    // 문자열 분리
    const divide = (s) => {
      let u = '';
      let v = '';

      for (let i = 0, temp = 0; i < s.length; i++) {
        if (s[i] === '(') temp++;
        else temp--;

        if (!temp) {
          u = s.slice(0, i + 1);
          v = s.slice(i + 1);
          break;
        }
      }

      return { u, v };
    };

    const { u, v } = divide(str);

    // u가 올바른 문자열이라면 문자열 v부터 다시 수행.
    if (check(u)) return u + recursive(v);
    else return '(' + recursive(v) + ')' + [...u.slice(1, -1)].map((v) => (v === '(' ? ')' : '(')).join('');
  };

  return recursive(p);
};

// console.log(solution('(()())()'));
console.log(solution('()))((()'));

const reverse = (str) => {
  return str
    .slice(1, -1)
    .split('')
    .map((v) => (v === '(' ? ')' : '('))
    .join('');
};
const solution2 = (p) => {
  if (p.length < 1) return '';

  let balance = 0;
  let pivot = 0;
  do {
    balance += p[pivot++] === '(' ? 1 : -1;
  } while (balance !== 0);

  const u = p.slice(0, pivot);
  const v = solution2(p.slice(pivot));

  if (u[0] === '(' && u.at(-1) === ')') return u + v;
  return '(' + v + ')' + reverse(u);
};
