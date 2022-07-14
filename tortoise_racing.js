// DESC:
//  v1 is the speed of tortoise 1 (feet per hour)
//  v2 is the speed of tortoise 2 (feet per hour)
//  g is the headstart of v1 (feet)
//  if v1 >= v2, return None

// math
//  x = distance traveled by both
//  x/v1 = (x+g)/v2

function travelComp(v1, v2, g, s){
    let dist1 = v1/3600 * s + g;
    let dist2 = v2/3600 * s;
    if(dist2 >= dist1){
        return s;
    } else {
        return travelComp(v1, v2, g, s+1);
    }
}

// lets just brute force with recursion...
function race(v1, v2, g) {
    let result = travelComp(v1, v2, g, s=0);
    console.log(result);
    return "";
}
