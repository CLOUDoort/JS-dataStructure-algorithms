const solution = () => {
  let machinePrice = 10;
  let perform = 150;

  let partPrice = 3;
  let partPerform = [30, 70, 15, 40, 65];
  partPerform.sort((a, b) => b - a);

  let cost = perform / machinePrice;

  partPerform.forEach((part) => {
    if (cost < (perform + part) / (machinePrice + partPrice)) {
      perform += part;
      machinePrice += partPrice;
      cost = ~~(perform / machinePrice);
    }
  });

  return cost;
};

console.log(solution());
