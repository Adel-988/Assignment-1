//? program 1

var programOne = window.Number(prompt("Enter a number for program 1"));

if (programOne === Number(programOne)) {
  window.alert(programOne);
} else {
  window.alert("please enter numbers only");
}

// //? program 2

var programTwo = window.Number(
  prompt("Enter a number for program 2 divisible by 3 & 4")
);

if (programTwo === Number(programTwo)) {
  if (programTwo % 3 == 0 && programTwo % 4 == 0) {
    window.alert("Yes");
  } else {
    window.alert("No");
  }
} else {
  window.alert("please enter numbers only");
}

//? program 3

var programThreeFirstNumber = window.Number(
  prompt("Enter the first number for program 3")
);

var programThreeSecondNumber = window.Number(
  prompt("Enter the second number for program 3")
);

if (
  programThreeFirstNumber === Number(programThreeFirstNumber) &&
  programThreeSecondNumber === Number(programThreeSecondNumber)
) {
  if (programThreeFirstNumber > programThreeSecondNumber) {
    window.alert(programThreeFirstNumber);
  } else if (programThreeSecondNumber > programThreeFirstNumber) {
    window.alert(programThreeSecondNumber);
  } else {
    window.alert("The two numbers are equal");
  }
} else {
  window.alert("Please enter numbers only");
}

//? program 4

var programFour = window.Number(prompt("Enter a number for program 4"));

if (programFour === Number(programFour)) {
  if (programFour < 0) {
    window.alert("Negative number");
  } else if (programFour > 0) {
    window.alert("Positive number");
  } else {
    window.alert("This is 0");
  }
} else {
  window.alert("please enter numbers only");
}

//? program 5

var programFiveFirstNumber = window.Number(
  prompt("Enter the first number for program 5")
);

var programFiveSecondNumber = window.Number(
  prompt("Enter the second number for program 5")
);

var programFiveThirdNumber = window.Number(
  prompt("Enter the third number for program 5")
);

if (
  programFiveFirstNumber === Number(programFiveFirstNumber) &&
  programFiveSecondNumber === Number(programFiveSecondNumber) &&
  programFiveThirdNumber === Number(programFiveThirdNumber)
) {
  if (
    programFiveFirstNumber > programFiveSecondNumber &&
    programFiveSecondNumber > programFiveThirdNumber
  ) {
    window.alert(
      "The maximum number is " +
        programFiveFirstNumber +
        " and the minimum number is " +
        programFiveThirdNumber
    );
  } else if (
    programFiveFirstNumber > programFiveThirdNumber &&
    programFiveThirdNumber > programFiveSecondNumber
  ) {
    window.alert(
      "The maximum number is " +
        programFiveFirstNumber +
        " and the minimum number is " +
        programFiveSecondNumber
    );
  } else if (
    programFiveSecondNumber > programFiveFirstNumber &&
    programFiveFirstNumber > programFiveThirdNumber
  ) {
    window.alert(
      "The maximum number is " +
        programFiveSecondNumber +
        " and the minimum number is " +
        programFiveThirdNumber
    );
  } else if (
    programFiveSecondNumber > programFiveThirdNumber &&
    programFiveThirdNumber > programFiveFirstNumber
  ) {
    window.alert(
      "The maximum number is " +
        programFiveSecondNumber +
        " and the minimum number is " +
        programFiveFirstNumber
    );
  } else if (
    programFiveThirdNumber > programFiveSecondNumber &&
    programFiveSecondNumber > programFiveFirstNumber
  ) {
    window.alert(
      "The maximum number is " +
        programFiveThirdNumber +
        " and the minimum number is " +
        programFiveFirstNumber
    );
  } else if (
    programFiveThirdNumber > programFiveSecondNumber &&
    programFiveFirstNumber > programFiveSecondNumber
  ) {
    window.alert(
      "The maximum number is " +
        programFiveThirdNumber +
        " and the minimum number is " +
        programFiveSecondNumber
    );
  } else if (
    programFiveSecondNumber > programFiveThirdNumber &&
    programFiveThirdNumber > programFiveFirstNumber
  ) {
    window.alert(
      "The maximum number is " +
        programFiveSecondNumber +
        " and the minimum number is " +
        programFiveFirstNumber
    );
  }
} else {
  window.alert("please enter numbers only");
}

//? program 6

var programSixNumber = window.Number(
  prompt("Please enter a number to check if it's even or odd")
);

if (programSixNumber === Number(programSixNumber)) {
  if (programSixNumber % 2 == 0) {
    window.alert("This number is even");
  } else {
    window.alert("This number is odd");
  }
} else {
  window.alert("please enter numbers only");
}

//? program 7

var programSevenLetter = document.getElementById("programSeven");

var resultSpan = document.getElementById("programSevenResultSpan");

function result() {
  programSevenLetter = document.getElementById("programSeven").value;
  if (typeof programSevenLetter == "string" && programSevenLetter != "") {
    if (
      programSevenLetter == "A" ||
      programSevenLetter == "a" ||
      programSevenLetter == "E" ||
      programSevenLetter == "e" ||
      programSevenLetter == "I" ||
      programSevenLetter == "i" ||
      programSevenLetter == "U" ||
      programSevenLetter == "u" ||
      programSevenLetter == "O" ||
      programSevenLetter == "o"
    ) {
      document.getElementById("programSevenResultSpan").innerHTML = "vowel";
    } else {
      document.getElementById("programSevenResultSpan").innerHTML = "not-vowel";
    }
  } else {
    document.getElementById("programSevenResultSpan").innerHTML =
      "please insert a letter";
  }
}

//? program 8

var program8Num = document.getElementById("programEight");

function programEightNumber() {
  document.getElementById("programEightResultSpan").innerHTML = " ";
  program8Num = document.getElementById("programEight").value;
  for (var i = 1; i <= program8Num; i++) {
    document.getElementById("programEightResultSpan").innerHTML += i;
  }
}

//? program 9

var program9Num = document.getElementById("programNine");

function programNineNumber() {
  document.getElementById("programNineResultSpan").innerHTML = " ";
  program9Num = document.getElementById("programNine").value;
  for (var i = 1; i <= 12; i++) {
    document.getElementById("programNineResultSpan").innerHTML +=
      i * program9Num;
  }
}

//? program 10

var program10Num = document.getElementById("programTen");

function programTenNumber() {
  document.getElementById("programTenResultSpan").innerHTML = " ";
  program10Num = document.getElementById("programTen").value;
  if (program10Num % 2 == 0) {
    for (var i = 1; i <= program10Num / 2; i++) {
      document.getElementById("programTenResultSpan").innerHTML += i * 2;
    }
  } else {
    for (var i = 1; i <= (program10Num - 1) / 2; i++) {
      document.getElementById("programTenResultSpan").innerHTML += i * 2;
    }
  }
}

//? program 11

var program11FirstNum = document.getElementById("programElevenFirstNumber");

var program11SecondNum = document.getElementById("programElevenSecondNumber");

function programEleven() {
  document.getElementById("programElevenResultSpan").innerHTML = " ";

  var program11FirstNum = document.getElementById(
    "programElevenFirstNumber"
  ).value;

  var program11SecondNum = document.getElementById(
    "programElevenSecondNumber"
  ).value;

  var program11Result = (document.getElementById(
    "programElevenResultSpan"
  ).innerHTML = program11FirstNum ** program11SecondNum);

  return program11Result;
}

//? program 12

document.getElementById("programTwelveResultSpan").innerHTML = " ";

var program12FirstNum = document.getElementById("programTwelveFirstNumber");

var program12SecondNum = document.getElementById("programTwelveSecondNumber");

var program12ThirdNum = document.getElementById("programTwelveThirdNumber");

var program12FourthNum = document.getElementById("programTwelveFourthNumber");

var program12FifthNum = document.getElementById("programTwelveFifthNumber");

function programTwelve() {
  var program12FirstNum = Number(
    document.getElementById("programTwelveFirstNumber").value
  );

  var program12SecondNum = Number(
    document.getElementById("programTwelveSecondNumber").value
  );

  var program12ThirdNum = Number(
    document.getElementById("programTwelveThirdNumber").value
  );

  var program12FourthNum = Number(
    document.getElementById("programTwelveFourthNumber").value
  );

  var program12FifthNum = Number(
    document.getElementById("programTwelveFifthNumber").value
  );

  var totalMarks =
    program12FirstNum +
    program12SecondNum +
    program12ThirdNum +
    program12FourthNum +
    program12FifthNum;

  var averageMarks = totalMarks / 5;

  var percentage = (totalMarks / 500) * 100;

  var result = (document.getElementById("programTwelveResultSpan").innerHTML =
    "Total Marks: " +
    totalMarks +
    "</br>" +
    "Average Marks: " +
    averageMarks +
    "</br>" +
    "Percentage: " +
    percentage +
    "%");

  return result;
}

//? program 13

var program13Num = document.getElementById("programThirteenNumber");

function programThirteen() {
  var program13Num = Number(
    document.getElementById("programThirteenNumber").value
  );

  document.getElementById("programThirteenResultSpan").innerHTML = "";

  if (program13Num == 1) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 31";
  } else if (program13Num == 2) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 28";
  } else if (program13Num == 3) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 31";
  } else if (program13Num == 4) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 30";
  } else if (program13Num == 5) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 31";
  } else if (program13Num == 6) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 30";
  } else if (program13Num == 7) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 31";
  } else if (program13Num == 8) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 31";
  } else if (program13Num == 9) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 30";
  } else if (program13Num == 10) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 31";
  } else if (program13Num == 11) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 30";
  } else if (program13Num == 12) {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "Days in month: 31";
  } else {
    document.getElementById("programThirteenResultSpan").innerHTML =
      "please enter the month number";
  }
}

//? program 14

document.getElementById("programFourteenResultSpan").innerHTML = " ";

var program14FirstNum = document.getElementById("programFourteenFirstNumber");

var program14SecondNum = document.getElementById("programFourteenSecondNumber");

var program14ThirdNum = document.getElementById("programFourteenThirdNumber");

var program14FourthNum = document.getElementById("programFourteenFourthNumber");

var program14FifthNum = document.getElementById("programFourteenFifthNumber");

function programFourteen() {
  var program14FirstNum = Number(
    document.getElementById("programFourteenFirstNumber").value
  );

  var program14SecondNum = Number(
    document.getElementById("programFourteenSecondNumber").value
  );

  var program14ThirdNum = Number(
    document.getElementById("programFourteenThirdNumber").value
  );

  var program14FourthNum = Number(
    document.getElementById("programFourteenFourthNumber").value
  );

  var program14FifthNum = Number(
    document.getElementById("programFourteenFifthNumber").value
  );

  var totalMarks =
    program14FirstNum +
    program14SecondNum +
    program14ThirdNum +
    program14FourthNum +
    program14FifthNum;

  var percentage = (totalMarks / 500) * 100;

  if (percentage >= 90) {
    document.getElementById("programFourteenResultSpan").innerHTML =
      "the percentage is " + percentage + "%" + "</br>" + "the grad is A.";
  } else if (percentage >= 80) {
    document.getElementById("programFourteenResultSpan").innerHTML =
      "the percentage is " + percentage + "%" + "</br>" + "the grad is B.";
  } else if (percentage >= 70) {
    document.getElementById("programFourteenResultSpan").innerHTML =
      "the percentage is " + percentage + "%" + "</br>" + "the grad is C.";
  } else if (percentage >= 60) {
    document.getElementById("programFourteenResultSpan").innerHTML =
      "the percentage is " + percentage + "%" + "</br>" + "the grad is D.";
  } else if (percentage >= 40) {
    document.getElementById("programFourteenResultSpan").innerHTML =
      "the percentage is " + percentage + "%" + "</br>" + "the grad is E.";
  } else if (percentage < 40) {
    document.getElementById("programFourteenResultSpan").innerHTML =
      "the percentage is " + percentage + "%" + "</br>" + "the grad is F.";
  }
}

//? switch cases

//? program 15

var programFifteenNum = document.getElementById("programFifteenNumber");

function programFifteen() {
  document.getElementById("programFifteenResultSpan").innerHTML = "";

  var programFifteenNum = Number(
    document.getElementById("programFifteenNumber").value
  );

  switch (programFifteenNum) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      document.getElementById("programFifteenResultSpan").innerHTML =
        "Days in month: 31";

      break;
    case 4:
    case 6:
    case 9:
    case 11:
      document.getElementById("programFifteenResultSpan").innerHTML =
        "Days in month: 30";
      break;

    case 2:
      document.getElementById("programFifteenResultSpan").innerHTML =
        "Days in month: 28";
      break;

    default:
      document.getElementById("programFifteenResultSpan").innerHTML =
        "please enter the month number";
      break;
  }
}

//? program 16

var programSixteenLetter = document.getElementById("programSixteen");

function programSixteen() {
  document.getElementById("programSixteenResultSpan").innerHTML = "";

  var programSixteenLetter = document.getElementById("programSixteen").value;

  switch (programSixteenLetter) {
    case "a":
    case "A":
    case "e":
    case "E":
    case "i":
    case "I":
    case "o":
    case "O":
    case "u":
    case "U":
      document.getElementById("programSixteenResultSpan").innerHTML =
        "This is vowel";
      break;

    default:
      document.getElementById("programSixteenResultSpan").innerHTML =
        "This is consonant";
      break;
  }
}

//? program 17

var program17FirstNum = document.getElementById("programSeventeenFirstNumber");

var program17SecondNum = document.getElementById(
  "programSeventeenSecondNumber"
);

function programSeventeen() {
  document.getElementById("programSeventeenResultSpan").innerHTML = "";

  var program17FirstNum = document.getElementById(
    "programSeventeenFirstNumber"
  ).value;

  var program17SecondNum = document.getElementById(
    "programSeventeenSecondNumber"
  ).value;

  var greater = false;

  if (program17FirstNum > program17SecondNum) {
    greater = true;
  }

  switch (greater) {
    case true:
      document.getElementById("programSeventeenResultSpan").innerHTML =
        "The maximum number is " + program17FirstNum;
      break;

    default:
      document.getElementById("programSeventeenResultSpan").innerHTML =
        "The maximum number is " + program17SecondNum;
      break;
  }
}

//? program 18

var program18Num = document.getElementById("programEighteenNumber");

function programEighteen() {
  document.getElementById("programEighteenResultSpan").innerHTML = "";

  var program18Num = document.getElementById("programEighteenNumber").value;

  var even = false;

  if (program18Num % 2 == 0) {
    even = true;
  }

  switch (even) {
    case true:
      document.getElementById("programEighteenResultSpan").innerHTML =
        "This number is even";
      break;

    default:
      document.getElementById("programEighteenResultSpan").innerHTML =
        "This number is odd ";
      break;
  }
}

//? program 19

var program19Num = document.getElementById("programNineteenNumber");

function programNineteen() {
  document.getElementById("programNineteenResultSpan").innerHTML = "";

  var program19Num = document.getElementById("programNineteenNumber").value;

  var positive = false;

  var negative = false;

  var zero = false;

  if (program19Num > 0) {
    positive = true;
  } else if (program19Num < 0) {
    negative = true;
  } else if (program19Num == 0) {
    zero = true;
  }

  switch (positive) {
    case true:
      document.getElementById("programNineteenResultSpan").innerHTML =
        "This number is positive";
      break;

    default:
      switch (zero) {
        case true:
          document.getElementById("programNineteenResultSpan").innerHTML =
            "this number is zero";
          break;

        default:
          switch (negative) {
            case true:
              document.getElementById("programNineteenResultSpan").innerHTML =
                "this number is negative";
              break;

            default:
              document.getElementById("programNineteenResultSpan").innerHTML =
                "please enter a number";
              break;
          }
      }
  }
}

//? program 20

var program20FirstNum = document.getElementById("programTwentyFirstNumber");

var program20SecondNum = document.getElementById("programTwentySecondNumber");

var program20Operator = document.getElementById("programTwentyOperator");

function programTwenty() {
  document.getElementById("programTwentyResultSpan").innerHTML = "";

  var program20FirstNum = Number(
    document.getElementById("programTwentyFirstNumber").value
  );

  var program20SecondNum = Number(
    document.getElementById("programTwentySecondNumber").value
  );

  var program20Operator = document.getElementById(
    "programTwentyOperator"
  ).value;

  switch (program20Operator) {
    case "+":
      document.getElementById("programTwentyResultSpan").innerHTML =
        "The result of summation of the numbers = " +
        (program20FirstNum + program20SecondNum);
      break;

    case "-":
      document.getElementById("programTwentyResultSpan").innerHTML =
        "The result of the subtraction of the numbers = " +
        (program20FirstNum - program20SecondNum);
      break;

    case "/":
      document.getElementById("programTwentyResultSpan").innerHTML =
        "The result of the division of the numbers = " +
        program20FirstNum / program20SecondNum;
      break;

    case "*":
      document.getElementById("programTwentyResultSpan").innerHTML =
        "The result of the multiplication of the numbers = " +
        program20FirstNum * program20SecondNum;
      break;

    default:
      document.getElementById("programTwentyResultSpan").innerHTML =
        "please enter numbers and operator";
      break;
  }
}
