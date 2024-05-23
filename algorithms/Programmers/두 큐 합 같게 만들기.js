const solution = (queue1, queue2) => {
  let ans = 0;
  let q1Sum = queue1.reduce((acc, cur) => acc + cur, 0);
  let q2Sum = queue2.reduce((acc, cur) => acc + cur, 0);
  const total = queue1.length + queue2.length;

  let q1Idx = 0;
  let q2Idx = 0;

  while (q1Sum !== q2Sum) {
    if (q1Sum > q2Sum) {
      q1Sum -= queue1[q1Idx];
      queue2.push(queue1[q1Idx]);
      q2Sum += queue1[q1Idx++];
    } else {
      q1Sum += queue2[q2Idx];
      queue1.push(queue2[q2Idx]);
      q2Sum -= queue2[q2Idx++];
    }
    ans++;
    if (q1Idx > total || q2Idx > total) return -1;
  }

  return ans;
};

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
