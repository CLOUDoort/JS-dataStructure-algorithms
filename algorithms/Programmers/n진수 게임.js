function solution(n, t, m, p) {
  let ans = '';
  let game = 1;
  let gameStr = '0';

  const MAX = t * m;
  while (gameStr.length < MAX) {
    gameStr += game.toString(n).toUpperCase();
    game++;
  }

  let idx = p - 1;
  while (ans.length < t) {
    ans += gameStr[idx];
    idx += m;
  }

  return ans;
}

function solution2(n, t, m, p) {
  let res = '';
  let num = 0;
  let seq = '';
  while (res.length < t) {
    if (seq.length >= m) {
      res += seq[p - 1];
      seq = seq.slice(m);
    } else {
      seq += num.toString(n).toUpperCase();
      num++;
    }
  }
  return res;
}
