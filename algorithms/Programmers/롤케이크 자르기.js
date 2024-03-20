function solution(topping) {
  let ans = 0;
  const a = new Map();
  const obj = new Map();

  topping.forEach((v) => obj.set(v, (obj.get(v) | 0) + 1));

  for (const v of topping) {
    a.set(v, (a.get(v) | 0) + 1);
    obj.set(v, obj.get(v) - 1);
    if (obj.get(v) === 0) obj.delete(v);

    if (obj.size === a.size) ans++;
  }

  return ans;
}
