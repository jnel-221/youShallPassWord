// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("Please select a password length between 8 and 128 characters");
  var numLength =parseInt(length);
  // console.log(numLength);
  if (numLength >=8 && numLength <= 128) {
    // console.log(numLength);
    // console.log(numLength >= 8);
    // console.log(numLength <= 128);
    alert("thanks for following directions");
  } else {
    // console.log(numLength);
    // console.log(numLength >= 8);
    // console.log(numLength <= 128);
    alert("Please enter a numeric value that is between 8 and 128 characters long");
    location.reload();
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//|| numLength == NaN)