const solution = (msg) => {
  const dictionary = {};
  let charCode = 65;
  for (let i = 1; i <= 26; i++) {
    dictionary[String.fromCharCode(charCode)] = i;
    charCode++;
  }

  let dicIdx = 27;
  const ans = [];
  let st = 0;

  while (1) {
    let s = '';
    let curIdx = 0;

    for (var i = st; i < msg.length; i++) {
      s += msg[i];
      if (dictionary[s]) curIdx = dictionary[s];
      else {
        dictionary[s] = dicIdx++;
        ans.push(curIdx);
        st = i;
        break;
      }
    }
    if (i === msg.length) {
      ans.push(curIdx);
      break;
    }
  }

  return ans;
};
