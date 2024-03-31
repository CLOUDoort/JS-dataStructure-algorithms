const solution = (bridge_length, weight, truck_weights) => {
  let sec = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let sum = 0;

  while (bridge.length) {
    sum -= bridge.shift();
    if (truck_weights.length) {
      let out = truck_weights[0];
      if (sum + out <= weight) {
        bridge.push(truck_weights.shift());
        sum += out;
      } else bridge.push(0);
    }

    sec++;
  }

  return sec;
};

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
