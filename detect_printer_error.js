function printerError(s) {
  let error = s.split("").reduce( (acc,c) => c > "m" ? acc + 1 : acc, 0);
  let total = s.length;
  return `${error}/${total}`;
}
