const solution = (word) => {
  const dictionary = [];
  const arr = ['A', 'E', 'I', 'O', 'U'];
  const LIMIT = 5;

  const dfs = (str = '') => {
    if (str.length === LIMIT) {
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      str += arr[i];
      dictionary.push(str);
      dfs(str);
      str = str.slice(0, -1);
    }
  };
  dfs();
  return dictionary.indexOf(word) + 1;
};

console.log(solution('AAAE'));
