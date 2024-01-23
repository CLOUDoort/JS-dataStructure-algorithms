const getTime = (time) => {
  const refineTime = time.split(':').map(Number);
  return refineTime[0] * 60 + refineTime[1];
};

const solution = (book_time) => {
  let room = 0;

  const sortedArr = book_time.slice().sort();

  const list = [];
  sortedArr.forEach((time) => {
    if (list.length) {
      let flag = false;
      for (let i = 0; i < list.length; i++) {
        if (getTime(time[0]) >= getTime(list[i]) + 10) {
          list[i] = time[1];
          flag = true;
          break;
        }
      }
      if (!flag) {
        list.push(time[1]);
        room++;
      }
    } else {
      list.push(time[1]);
      room++;
    }
  });

  return room;
};

console.log(
  solution([
    ['15:00', '17:00'],
    ['16:40', '18:20'],
    ['14:20', '15:20'],
    ['14:10', '19:20'],
    ['18:20', '21:20'],
  ])
);
