function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};


// thorough solution
function Sleigh() {
  this.name = "Santa Claus";
  this.password = "Ho Ho Ho!";
}

Sleigh.prototype.authenticate = function(name, password) {
  return this.name == name && this.password == password;
};


// solution with ternary
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return (name === "Santa Claus" && password === "Ho Ho Ho!")? true : false;
};
