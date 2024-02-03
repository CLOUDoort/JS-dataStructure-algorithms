const ST = '(';
const EN = ')';

// const solution = (s) => {
//     if(s[0] === EN) return false;

//     const stack = [];
//     s.split('').forEach(v => {
//         if(stack.length === 0) {
//             if(v === EN) return false;
//             else stack.push(v)
//         } else {
//             if(v === ST) {
//                 if(stack.at(-1) === EN) stack.pop();
//                 else stack.push(v);
//             } else {
//                 if(stack.at(-1) === ST) stack.pop();
//                 else stack.push(v);
//             }
//         }
//     })
//     return stack.length === 0 ? true : false;
// }

const solution = (s) => {
  let cum = 0;
  for (let paren of s) {
    cum += paren === ST ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
};
