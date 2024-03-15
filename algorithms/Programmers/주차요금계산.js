const solution = (fees, records) => {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;

  const parsing = (str) => {
    const [time, carNum, state] = str.split(' ');
    const [hour, min] = time.split(':').map(Number);

    return [hour * 60 + min, carNum, state];
  };

  const calculate = (time) => {
    if (time <= defaultTime) return defaultFee;

    const extraTime = Math.ceil((time - defaultTime) / unitTime);
    return defaultFee + extraTime * unitFee;
  };

  const ans = {};
  const map = new Map();
  const accTime = {};

  records.forEach((record) => {
    const [time, carNum, state] = parsing(record);
    if (state === 'IN') map.set(carNum, time);
    else {
      const total = time - map.get(carNum);
      accTime[carNum] = (accTime[carNum] | 0) + total;
      map.delete(carNum);
    }
  });

  const END_TIME = 1439;
  if (map.size) {
    for (const [key, value] of map) {
      const total = END_TIME - value;
      accTime[key] = (accTime[key] | 0) + total;
    }
  }
  for (const [key, value] of Object.entries(accTime)) {
    const fee = calculate(value);
    ans[key] = (ans[key] | 0) + fee;
  }

  return Array.from(Object.keys(ans))
    .sort((a, b) => a - b)
    .map((num) => ans[num]);
};
