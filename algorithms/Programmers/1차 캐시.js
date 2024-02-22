const solution = (cacheSize, cities) => {
  let cache = [];
  let time = 0;
  const lowerCities = cities.map((v) => v.toLowerCase());

  for (let i = 0; i < lowerCities.length; i++) {
    if (cache.includes(lowerCities[i])) {
      const idx = cache.indexOf(lowerCities[i]);
      cache.splice(idx, 1);
      cache.push(lowerCities[i]);
      time += 1;
    } else {
      time += 5;
      cache.push(lowerCities[i]);
      if (cache.length > cacheSize) cache.shift();
    }
  }
  return time;
};
