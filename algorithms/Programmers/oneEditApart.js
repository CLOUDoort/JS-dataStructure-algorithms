const oneEditApart = (a, b) => {
  while (a.length !== 0 && b.length !== 0) {
    if (a.slice(-1) === b.slice(-1)) {
      a = a.slice(0, -1);
      b = b.slice(0, -1);
    } else if (a[0] === b[0]) {
      a = a.slice(1);
      b = b.slice(1);
    } else break;
  }
  return a.length <= 1 && b.length <= 1;
};

console.log(oneEditApart('cat', 'dog'));
console.log(oneEditApart('cat', 'cats'));
console.log(oneEditApart('cat', 'cut'));
console.log(oneEditApart('cat', 'cast'));
console.log(oneEditApart('cat', 'at'));
console.log(oneEditApart('cat', 'acts'));
