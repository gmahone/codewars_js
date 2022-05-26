function enough(cap, on, wait) {
  let result = on + wait - cap;
  return result > 0 ? result : 0;
}

// arrow function version
const enough = (cap, on, wait) => (on + wait - cap) > 0 ? (on + wait - cap) : 0;
