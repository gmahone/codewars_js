/** non-working solutions
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


var Ball = {
  ballType: "super";
  ballType: function() {
    return this.ballType;
  }
};

function Ball(ballType){
  this.ballType = function(){
    if(this.ballType == "super"){
      return "super";
    } else {
      return "regular";
    }
  }
}

function Ball(ballType){
  this.ballType = function(){
      return this.ballType === "super" ? "super" : "regular";  
  }
}
**/

// working solution
function Ball(ballType){
  if(ballType === undefined){
    this.ballType = "regular";
  } else {
    this.ballType = "super";
  };
};
