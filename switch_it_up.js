function switchItUp(number){
  let result = "Zero";
  switch(number){
    case 1:
      result = "One";
      break;
    case 2:
      result = "Two";
      break;
    case 3:
      result = "Three";
      break;
    case 4:
      result = "Four";
      break;
    case 5:
      result = "Five";
      break;
    case 6:
      result = "Six";
      break;
    case 7:
      result = "Seven";
      break;
    case 8:
      result = "Eight";
      break;
    case 9:
      result = "Nine";
      break;
  }
  return result;
}


const switchItUp = n => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n];
