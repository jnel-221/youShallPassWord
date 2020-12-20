// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //variables to get password length from user and change user input from string to number
  var length = prompt("Please select a password length between 8 and 128 characters");
  var numLength =parseInt(length);

  //variables to hold user-selected password criteria
  var upperCase = confirm("Do you want uppercase letters?");
  var lowerCase = confirm("Do you want lowercase letters?");
  var nums =confirm("Do you want numbers?");
  var speChar = confirm("Do you want special characters?");
 console.log(upperCase);
 console.log(lowerCase);
 console.log(nums);
 console.log(speChar);
  if (numLength >=8 && numLength <= 128) {
    // console.log(numLength);
    // console.log(numLength >= 8);
    // console.log(numLength <= 128);
    alert("Please select from the following criteria: ");
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