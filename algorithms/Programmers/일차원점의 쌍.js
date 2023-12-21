function solution(arr) {
  let pair = [];
  let min = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i + 1] - arr[i];
    if (min > temp) {
      min = temp;
      pair = [arr[i], arr[i + 1]];
    }
  }
  return pair;
}

function betterSolution(arr) {
  const comp = arr.slice(1);

  return arr.map((v, i) => [v, comp[i]]).sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
console.log(solution([1, 3, 4, 8, 13, 17, 20]));
console.log(betterSolution([1, 3, 4, 8, 13, 17, 20]));
