var Ball = function(ballType) {
  return "";
};

const Ball = {
  ballType : function(type) {
    if(type == "super"){
      return "super";
    }
  }
};

var Ball = function(ballType) {
  if(this.ballType == "super"){
    return "super";
  } else {
    return "regular";
  };
};
