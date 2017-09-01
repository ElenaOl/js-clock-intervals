

var rotate = function(arrow, degree){
  var element = document.getElementById(arrow);
   element.style.transform = "rotate(" + degree + "deg)";
}


var getAngleSecMin = function(num){

  return num*6;
}

var getAngleHours = function(num){
  return num*30;
}


var run = function(){
var d = new Date(); 
var hours = d.getHours();
var minutes = d.getMinutes(); 
var seconds = d.getSeconds();
 rotate("second", getAngleSecMin(seconds));
 rotate("minute", getAngleSecMin(minutes));
 rotate("hour", getAngleHours(hours));

}


setInterval (run,1000);
run();








