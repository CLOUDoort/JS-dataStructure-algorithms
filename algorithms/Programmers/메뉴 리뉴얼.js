const solution = (orders, course) => {
  const ans = [];
  let stores = {};

  const combination = (n, arr) => {
    const temp = [];

    const dfs = (level = 0, st = 0) => {
      if (level === n) {
        const str = [...temp.slice()].sort().join('');
        stores[str] = (stores[str] || 0) + 1;
        return;
      }

      for (let i = st; i < arr.length; i++) {
        temp[level] = arr[i];
        dfs(level + 1, i + 1);
      }
    };
    dfs();
  };

  course.forEach((c) => {
    stores = {};
    orders.forEach((order) => {
      const orderArr = order.split('');
      combination(c, orderArr);
    });

    let maxKeys = [];
    let maxValue = -Infinity;

    for (const [key, value] of Object.entries(stores)) {
      if (value < 2) continue;
      if (value > maxValue) {
        maxValue = value;
        maxKeys = [key];
      } else if (value === maxValue) maxKeys.push(key);
    }

    ans.push(...maxKeys);
  });

  return ans.sort();
};

console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));
