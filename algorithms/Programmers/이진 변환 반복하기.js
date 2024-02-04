const removeZero = (s) => {
  return s.replaceAll('0', '');
};

const convertBinary = (s) => {
  return s.length.toString(2);
};

function solution(s) {
  const ans = [0, 0];

  while (s !== '1') {
    ans[0]++;
    let temp = removeZero(s);
    ans[1] += s.length - temp.length;
    s = convertBinary(temp);
  }

  return ans;
}
