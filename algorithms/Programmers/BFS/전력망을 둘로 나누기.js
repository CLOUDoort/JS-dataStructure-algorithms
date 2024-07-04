const solution = (n, wires) => {
  let ans = Number.MAX_SAFE_INTEGER;

  let tree = Array.from({ length: n + 1 }, () => []);
  wires.map((el) => {
    let [a, b] = el;

    tree[a].push(b);
    tree[b].push(a);
  });

  const searchTree = (root, exceptNum) => {
    let count = 0;
    let visit = [];
    let queue = [root];
    visit[root] = true;

    while (queue.length) {
      let idx = queue.pop();
      tree[idx].forEach((el) => {
        if (el !== exceptNum && !visit[el]) {
          visit[el] = true;
          queue.push(el);
        }
      });
      count++;
    }
    return count;
  };

  wires.forEach((el) => {
    let [a, b] = el;
    ans = Math.min(ans, Math.abs(searchTree(a, b) - searchTree(b, a)));
  });

  return ans;
};

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
