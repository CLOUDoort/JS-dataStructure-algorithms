const timeStampFormat = (time) => {
  return time.split(':').join('');
};

const solution = (time) => {
  const personTime = [
    ['09:12:23', '11:14:35'],
    ['10:34:01', '13:23:40'],
    ['10:34:31', '11:20:10'],
  ];
  let ans = 0;
  const inputStamp = timeStampFormat(time);

  personTime.forEach(([start, finish]) => {
    if (inputStamp >= timeStampFormat(start) && inputStamp <= timeStampFormat(finish)) ans++;
  });

  return ans;
};

console.log(solution('11:05:20'));
