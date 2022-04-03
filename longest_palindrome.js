// not great to have the double loop :(
longestPalindrome=function(s){
    let out = 0;
    for(i = 0; i < s.length; i++){
        for(j = s.length; j > i; j--){
            if(s.slice(i,j) === s.slice(i,j).split("").reverse().join("")){
                out = s.slice(i,j).length > out ? s.slice(i,j).length : out;
            }
        }
    }
    return out;
}

// other solution

longestPalindrome=function(s){
  let isPalindrome = str => str.split('').reverse().join('') === str;
  
  for(let i = s.length; i >= 0; i--) {
    for(let j = s.length - i; j >= 0; j--){
      if( isPalindrome( s.substr(j, i) ) ){
        return i;
      }
    }
  }
}
