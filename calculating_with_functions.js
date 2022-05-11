function calculationInterpreter(arr){
    let result;
    if(arr[1]=="+"){
        result = Number(arr[2]) + Number(arr[0]);
    }
    if(arr[1]=="-"){
        result = Number(arr[2]) - Number(arr[0]);
    }
    if(arr[1]=="/"){
        result = Number(arr[2]) / Number(arr[0]);
    }
    if(arr[1]=="*"){
        result = Number(arr[2]) * Number(arr[0]);
    }
    return(Math.floor(result));
}

function zero(x = null){
    let result = (x ? x + "0" : "0");
    if(result.length > 2){
        result = (calculationInterpreter(result.split("")));
    }
    return(result);
}

function one(x = null){
    let result = (x ? x + "1" : "1");
    if(result.length > 2){
        result = (calculationInterpreter(result.split("")));
    }
    return(result);
}

function two(x = null){
    let result = (x ? x + "2" : "2");
    if(result.length > 2){
        result = (calculationInterpreter(result.split("")));
    }
    return(result);
}

function three(x = null){
    let result = (x ? x + "3" : "3");
    if(result.length > 2){
        result = (calculationInterpreter(result.split("")));
    }
    return(result);
}

function four(x = null){
    let result = (x ? x + "4" : "4");
    if(result.length > 2){
        result = (calculationInterpreter(result.split("")));
    }
    return(result);
}

function five(x = null){
    let result = (x ? x + "5" : "5");
    if(result.length > 2){
        result = (calculationInterpreter(result.split("")));
    }
    return(result);
}

function six(x = null){
    let result = (x ? x + "6" : "6");
    if(result.length > 2){
        result = (calculationInterpreter(result.split("")));
    }
    return(result);
}

function seven(x = null){
    let result = (x ? x + "7" : "7");
    if(result.length > 2){
        result = (calculationInterpreter(result.split("")));
    }
    return(result);
}

function eight(x = null){
    let result = (x ? x + "8" : "8");
    if(result.length > 2){
        result = (calculationInterpreter(result.split("")));
    }
    return(result);
}

function nine(x = null){
    let result = (x ? x + "9" : "9");
    if(result.length > 2){
        result = (calculationInterpreter(result.split("")));
    }
    return(result);
}

function times(x = null){
    return(x ? x + "*" : "*");
}

function dividedBy(x = null){
    return(x ? x + "/" : "/");
}

function plus(x = null){
    return(x ? x + "+" : "+");
}

function minus(x = null){
    return(x ? x + "-" : "-");
}


// other solutions

// minimal functions
function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };


// digit logic abstracted into own function
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }


// digit function abstracted and assigned via forEach
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }
