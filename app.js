var birthdayDate = document.querySelector(".date");
var luckyNumber = document.querySelector(".luckyNumber");
var check = document.querySelector(".output-btn");
var privacy = document.querySelector(".close-btn");
var privacyPrompt = document.querySelector(".alert");
var output = document.querySelector("#output");
var outputDiv = document.querySelector(".output");

function hidePrivacy() {
  privacyPrompt.style.display = "none";
}

function heIsLucky() {
  output.innerHTML = "yes, Your birthday is lucky";
  outputDiv.style.display = "block";
}

function heIsNotLucky() {
  output.innerHTML = "Oh No, Your birthday is not lucky";
  outputDiv.style.display = "block";
}

function calSum(dob) {
  var newDate = dob.replaceAll("-", "");
  var sum = 0;
  for (var i = 0; i < newDate.length; i++) {
    sum += Number(newDate.charAt(i));
  }
  return sum;
}

function clickHandler() {
  dob = birthdayDate.value;
  var sum = calSum(dob);
  var number = luckyNumber.value;
  var luckyOrNot = sum % number;
  if (luckyOrNot == 0) heIsLucky();
  else heIsNotLucky();
}

privacy.addEventListener("click", hidePrivacy);
check.addEventListener("click", clickHandler);
