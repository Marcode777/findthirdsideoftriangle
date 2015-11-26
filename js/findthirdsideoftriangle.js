alert ("hey there!");


function calculateThirdSide () {
  var firstSide = document.getElementById("firstNumber").value;
  console.log("firstSide");
  var secondSide = document.getElementById("secondNumber").value;
  var thirdSide = Math.sqrt(firstSide * firstSide + secondSide * secondSide);

  alert("Third side is" + thirdSide);

}