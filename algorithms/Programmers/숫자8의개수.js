function solution() {
  return Array(10000)
    .fill(0)
    .map((_, i) => i + 1)
    .toString()
    .split(',')
    .filter((v) => v === 8).length;
}
