function addLength(str) {
  return str.split(" ").map(a => `${a} ${a.length}`);
}

const addLength = str => str.split(" ").map(a => `${a} ${a.length}`);
