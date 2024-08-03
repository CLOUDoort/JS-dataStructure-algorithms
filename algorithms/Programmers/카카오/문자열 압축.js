const solution = (s) => {
  let min = s.length;

  const sliceStr = (str, n) => {
    const result = [];
    for (let i = 0; i < str.length; i += n) {
      result.push(str.slice(i, i + n));
    }

    return result;
  };

  const minimizeStr = (str) => {
    let result = '';
    let sum = 1;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) sum++;
      else {
        if (sum > 1) result += `${sum}${str[i]}`;
        else result += str[i];
        sum = 1;
      }
    }

    return result;
  };

  for (let i = 1; i < s.length; i++) {
    const arr = sliceStr(s, i);
    const minStr = minimizeStr(arr);
    min = Math.min(min, minStr.length);
  }

  return min;
};
