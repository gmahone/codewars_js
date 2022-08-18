var greet = function(name) {
  return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
};


// add string method capitalize
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};


// solution with string addition
var greet = function(name) {
  return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};
