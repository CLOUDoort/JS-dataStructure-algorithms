const solution = (orders, course) => {
  const ans = [];

  const combination = (n, arr) => {
    const temp = [];
    const results = [];

    const dfs = (level = 0, st = 0) => {
      if (level === n) {
        const str = [...temp.slice()].sort().join('');
        results.push(str);
        return;
      }

      for (let i = st; i < arr.length; i++) {
        temp[level] = arr[i];
        dfs(level + 1, i + 1);
      }
    };

    dfs();
    return results;
  };

  course.forEach((c) => {
    const map = {};
    let max = 0;

    orders.forEach((order) => {
      const orderArr = order.split('');
      combination(c, orderArr).forEach((str) => {
        map[str] = (map[str] || 0) + 1;
      });
      for (const k in map) {
        if (map[k] > max) max = map[k];
      }
    });

    for (const k in map) {
      if (map[k] === max && max > 1) ans.push(k);
    }
  });

  return ans.sort();
};

const solution2 = (orders, course) => {
  const ordered = {};
  const candidates = {};
  const maxNum = Array.from({ length: 11 }).fill(0);

  const createSet = (arr, start, len, foods) => {
    if (len === 0) {
      ordered[foods] = (ordered[foods] || 0) + 1;
      if (ordered[foods] > 1) candidates[foods] = ordered[foods];
      maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      createSet(arr, i + 1, len - 1, foods + arr[i]);
    }
  };

  orders.forEach((od) => {
    const sorted = od.split('').sort();
    course.forEach((len) => {
      createSet(sorted, 0, len, '');
    });
  });

  const launched = Object.keys(candidates).filter((food) => maxNum[food.length] === candidates[food]);

  return launched.sort();
};

console.log(solution2(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));
