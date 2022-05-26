function enough(cap, on, wait) {
  let result = on + wait - cap;
  return result > 0 ? result : 0;
}
