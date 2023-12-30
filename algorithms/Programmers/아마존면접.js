const solution = (arr) => {
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);

  return zip(arr.slice(0, arr.length / 2), arr.slice(arr.length / 2)).flat();
};

const swap = (a1, a2, arr) => {
  [arr[a1], arr[a2]] = [arr[a2], arr[a1]];
};

const inPlaceSolution = (arr) => {
  let st = 0;
  let mid = arr.length / 2;
  swap(1, 5, arr);
  swap(2, 5, arr);
  swap(3, 6, arr);
  swap(4, 5, arr);
  swap(5, 7, arr);
  swap(7, 8, arr);
  return arr;
};
console.log(solution(['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5']));
console.log(betterSolution(['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5']));
