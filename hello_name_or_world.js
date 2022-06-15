function hello(name) {
  resultName = (name == "" || name == null) ? "World" : name[0].toUpperCase() + name.toLowerCase().substring(1);
  return("Hello, " + resultName + "!");
}

// alternative with undefined
function hello(name) {
  resultName = (name == "" || name == undefined) ? "World" : name[0].toUpperCase() + name.toLowerCase().substring(1);
  return("Hello, " + resultName + "!");
}

// other solutions

// arrow function with template literal
const hello = name =>
  `Hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : 'World'}!`;
