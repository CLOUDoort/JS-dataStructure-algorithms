const solution = (sequence, k) => {
  function solution(sequence, k) {
    //정답이 될 수 있는 값을 담을 배열
    const answer = [];
    let sum = 0;
    let head = 0;
    for (let i = 0; i < sequence.length; i++) {
      sum += sequence[i];
      if (sum > k) {
        // 작아질때까지 앞에 값을 빼줌.
        while (sum > k) {
          sum -= sequence[head++];
        }
      }
      //같다면 리턴
      if (sum === k) {
        answer.push([head, i]);
      }
    }
    let min = sequence.length;
    let result = [];
    answer.forEach((element) => {
      if (min > element[1] - element[0]) {
        min = element[1] - element[0];
        result = [element[0], element[1]];
      }
    });
    return result;
  }
};

console.log(solution([1, 2, 3, 4, 5]));
