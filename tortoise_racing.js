// DESC:
//  v1 is the speed of tortoise 1 (feet per hour)
//  v2 is the speed of tortoise 2 (feet per hour)
//  g is the headstart of v1 (feet)
//  if v1 >= v2, return None

// math
//  x = distance traveled by both
//  x/v1 = (x+g)/v2

/*
function travelComp(v1, v2, g, s){
  let dist1 = v1/3600 * s + g;
  let dist2 = v2/3600 * s;
  if(dist2 >= dist1){
      return s;
  } else {
      return travelComp(v1, v2, g, s+1);
  }
}
*/

// create travelComp functions for Hour Minute and Second
function travelCompHour(v1, v2, g, h, m, s){
  let dist1 = v1 * h + g;
  let dist2 = v2 * h;
  if(dist2 > dist1){
    return travelCompMinute(v1, v2, g, h-1, m+1, s);
  } else if (dist2 == dist1){
    return [h, 0, 0]
  } else {
    return travelCompHour(v1, v2, g, h+1, m, s);
  }
}

function travelCompMinute(v1, v2, g, h, m, s){
  let dist1 = v1 * h + g;
  let dist2 = v2 * h;
  if(dist2 > dist1){
    return travelCompSecond(v1, v2, g, h, m-1, s+1);
  } else if (dist2 == dist1){
    return [h, m, 0]
  } else {
    return travelCompHour(v1, v2, g, h+1, m, s);
  }
}


// lets just brute force with recursion...
function race(v1, v2, g) {
  if(v1 > v2){
    return None;
  }
  let result = travelComp(v1, v2, g, s=0);
  result -= 1;
  return [Math.floor(result / 3600), 
          Math.floor((result % 3600) / 60), 
          Math.floor((result % 3600) % 60)];
}

// -------------------------------------------------


// switching to a normal while loop, its easier
function race(v1, v2, g) {
  if(v1 > v2){
    return null;
  }
  console.log(v1, v2)
  let s = 0;
  while(true){
    let dist1 = v1/3600 * s + g;
    let dist2 = v2/3600 * s;
    
    if(dist2 > dist1){
      let resultH = Math.floor(s / 3600);
      let resultM = Math.floor((s % 3600) / 60);
      let resultS = Math.floor((s % 3600) % 60)-1;
        return [resultH, 
          resultM, 
          resultS < 0 ? 0 : resultS];
    }
    if(dist2 == dist1){
      let resultH = Math.floor(s / 3600);
      let resultM = Math.floor((s % 3600) / 60);
      let resultS = Math.floor((s % 3600) % 60);
        return [resultH, 
          resultM, 
          resultS < 0 ? 0 : resultS];
    }
    s += 1;
  }
}




// math solution
function race(v1, v2, g) {
    if (v1 > v2) return null
    // d1 = v1 * t + g
    // d2 = v2 * t
    // v1 * t + g = v2 * t
    // t (v2 - v1) = g
    // t = g / (v2 - v1)
    let time = g / (v2 - v1)
    
    let minutesPerHour = 60
    let secondsPerHour = 60 * 60
    let secondsPerMinute = 60
    
    let hours   = Math.floor(time)
    let minutes = Math.floor(time * minutesPerHour 
                            - hours * minutesPerHour)
    let seconds = Math.floor(time * secondsPerHour
                            - hours * secondsPerHour 
                            - minutes * secondsPerMinute)
    
    return [hours, minutes, seconds]
}
