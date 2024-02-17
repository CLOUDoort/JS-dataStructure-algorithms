const solution = (want, number, discount) => {
  let ans = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const temp = discount.slice(i, i + 10);

    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (temp.filter((v) => v === want[j]).length === number[j]) continue;
      else {
        flag = false;
        break;
      }
    }
    if (flag) ans++;
  }
  return ans;
};

// const toObj = (arr) => {
//   const obj = {};

//   arr.forEach((v) => {
//     obj[v] = (obj[v] || 0) + 1;
//   });
//   return obj;
// };

// function solution(want, number, discount) {
//   let ans = 0;
//   let st = 0;
//   let en = 10;

//   while (en <= discount.length) {
//     const temp = discount.slice(st++, en++);
//     const isInItem = want.every((v) => temp.includes(v));
//     if (!isInItem) continue;

//     const obj = toObj(temp);
//     for (var i = 0; i < want.length; i++) {
//       if (number[i] === obj[want[i]]) continue;
//       else break;
//     }
//     if (i === want.length) ans++;
//   }
//   return ans;
// }
