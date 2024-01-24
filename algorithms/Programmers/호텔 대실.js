const getTime = (time) => {
  const refineTime = time.split(':').map(Number);
  return refineTime[0] * 60 + refineTime[1];
};

const solution = (book_time) => {
  const sortedArr = book_time.slice().sort();

  const room = [];
  sortedArr.forEach((time) => {
    const idx = room.findIndex((e) => getTime(time[0]) >= getTime(e) + 10);
    if (idx === -1) room.push(time[1]);
    else room[idx] = time[1];
  });

  return room.length;
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
