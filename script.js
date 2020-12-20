// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //variables to get password length from user and conditions to validate correct length
  //browser to refresh if incorrect length chosen
  var length = prompt("Please select a password length between 8 and 128 characters");
  var numLength =parseInt(length);

  //declare variables for password criteria outside of conditional statement:
  var upperCase;
  var lowerCase;
  var nums;
  var speChar;

  if (numLength >=8 && numLength <= 128) {
   
    alert("Please select password criteria from the following pop-up windows.");
     //run password criteria confirms if password length meets criteria, otherwise run else statement only
  var upperCase = confirm("Do you want uppercase letters?");
  var lowerCase = confirm("Do you want lowercase letters?");
  var nums =confirm("Do you want numbers?");
  var speChar = confirm("Do you want special characters?");
  console.log(upperCase);
  console.log(lowerCase);
  console.log(nums);
  console.log(speChar);
  } else {
   
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