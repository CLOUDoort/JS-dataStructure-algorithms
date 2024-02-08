const solution = (n, words) => {
  const ans = [0, 0];
  const box = Array.from({ length: n }, () => []);

  let boxNum = 0;
  let wordsNum = 0;
  let wordsLen = words.length;
  let times = 1;
  let prev = '';

  while (1) {
    if (prev && prev.at(-1) !== words[wordsNum].at(0)) {
      return [boxNum + 1, times];
    }

    for (let i = 0; i < n; i++) {
      if (i === boxNum) continue;
      if (box[i].includes(words[wordsNum])) {
        return [boxNum + 1, times];
      }
    }

    box[boxNum].push(words[wordsNum]);
    prev = words[wordsNum];

    wordsNum++;
    boxNum++;

    if (boxNum === n) {
      boxNum = 0;
      times++;
    }
    if (wordsNum === wordsLen) return [0, 0];
  }

  return ans;
};
