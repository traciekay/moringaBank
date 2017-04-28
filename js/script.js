$(document).ready(function() {
  $("#form1").submit(function(event){
  var a = parseInt($("input#sideA").val());
  var b = parseInt($("input#sideB").val());
  var c = parseInt($("input#sideC").val());
  var text = "";
    if (a+b <= c || a+c <= b || c+b <=a) {
      text += "Not a Triangle"
    }
    else if ((a===b && b!==c && c!==a) || (a!==b && b!==c && c===a) || (a!==b && b===c && c!==a)) {
      text += "Isoscless Triangle"
    }
    else if (a===b && b===c && c===a) {
      text += "Equilateral"
    }
    else {
      text += "Scalene Triangle"
    }
    document.getElementById("demo").innerHTML = text;
    event.preventDefault();
  });
 });
