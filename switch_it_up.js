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

// non switch based solution
const switchItUp = n => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n];

// using return instead of break
function switchItUp(number){
  switch(number) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return  'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return 'Unknown number';
  }
}
