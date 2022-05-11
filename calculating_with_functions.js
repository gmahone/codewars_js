function calculationInterpreter(arr){
    let result;
    if(arr[1]=="+"){
        result = arr[2] + arr[0]
    }
    if(arr[1]=="-"){
        result = arr[2] - arr[0]
    }
    if(arr[1]=="/"){
        result = arr[2] / arr[0]
    }
    if(arr[1]=="*"){
        result = arr[2] * arr[0]
    }
    return(Math.floor(result));
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
