const solution = (picks, minerals) => {
  let ans = 0;
  const total = picks.reduce((acc, cur) => acc + cur, 0);
  const availMinerals = minerals.slice(0, total * 5);

  const countedMinerals = availMinerals.reduce((acc, cur, idx) => {
    const index = Math.floor(idx / 5);
    if (!acc[index]) acc[index] = [0, 0, 0];
    if (cur === 'diamond') acc[index][0]++;
    else if (cur === 'iron') acc[index][1]++;
    else acc[index][2]++;
    return acc;
  }, []);

  const sortedMinerals = countedMinerals.sort((a, b) => b[0] - a[0] || b[1] - a[1]);

  sortedMinerals.forEach((el) => {
    const [dia, iron, stone] = el;
    if (picks[0]) {
      picks[0]--;
      ans += dia + iron + stone;
    } else if (picks[1]) {
      picks[1]--;
      ans += dia * 5 + iron + stone;
    } else {
      picks[2]--;
      ans += dia * 25 + iron * 5 + stone;
    }
  });

  return ans;
};
