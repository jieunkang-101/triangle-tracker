$(document).ready(function(){
  $("form").submit(function() {
    event.preventDefault();
    var lengthA = parseInt($("#lengthA").val());
    var lengthB = parseInt($("#lengthB").val());
    var lengthC = parseInt($("#lengthC").val());
    console.log(lengthC);
    if (lengthA + lengthB <= lengthC) {
        $("#output").text("NOT a triangle");
      } else if (lengthA === lengthB && lengthB === lengthC) {
        $("#output").text("Equilateral");
      } else if (lengthA === lengthB || lengthB === lengthC || lengthA === lengthC) {
        $("#output").text("Isosceles");
      } else {
        $("#output").text("Scalene");
      }
  });
});