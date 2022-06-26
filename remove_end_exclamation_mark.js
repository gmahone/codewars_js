function remove (string) {
  if(string[string.length - 1] === "!"){
    string.pop();
  }
  return string;
}
