function hello(name) {
  resultName = (name == "" || name == null) ? "World" : name[0].toUpperCase() + name.toLowerCase().substring(1);
  return("Hello, " + resultName + "!");
}
