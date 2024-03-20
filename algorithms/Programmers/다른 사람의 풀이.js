function solution(skill, skill_trees) {
  let ans = 0;

  skill_trees.forEach((tree) => {
    let order = -1;
    let flag = true;

    for (let i = 0; i < tree.length; i++) {
      const idx = skill.indexOf(tree[i]);
      if (idx === -1) continue;

      if (order === -1) {
        if (idx === 0) order = idx + 1;
        else {
          flag = false;
          break;
        }
      } else {
        if (order === idx) order = idx + 1;
        else {
          flag = false;
          break;
        }
      }
    }
    if (flag) ans++;
  });

  return ans;
}

const solution2 = (skill, skill_trees) => {
  let ans = 0;
  const regex = new RegExp(`[^${skill}]`, 'g');

  return skill_trees.map((x) => x.replace(regex, '')).filter((x) => skill.indexOf(x) === 0 || x === '').length;
};

const solution3 = (skill, skill_trees) => {
  const isCorrect = (n) => {
    let test = skill.split('');
    for (let i = 0; i < n.length; i++) {
      if (!skill.includes[n[i]]) continue;
      if (n[i] === test.shift()) continue;
      return false;
    }
    return true;
  };

  return skill_trees.filter(isCorrect).length;
};

console.log(solution2('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));
