function isTriangle(a,b,c){
   let sortedSides = [a,b,c].sort()
   return a*a + b*b - c*c === 0;
}
