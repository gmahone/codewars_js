function enough(cap, on, wait) {
  let result = on + wait - cap;
  return result > 0 ? result : 0;
}

// arrow function version
const enough = (cap, on, wait) => (on + wait - cap) > 0 ? (on + wait - cap) : 0;

// other solutions

// using max switching
function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

// arrow function with max switch
const enough = (cap, on, wait) => Math.max(0,wait-cap+on);
