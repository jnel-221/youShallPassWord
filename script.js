// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare variables for password length
var promptLength = ""
var numLength;

//declare variables for password character criteria
var upperCase;
var lowerCase;
var nums;
var speChar;

//declare variable for object
var charTypes = {
  "upperCase": [ ],
  "lowerCase": [ ],
  randNums: function() {
    Math.floor(Math.random() * 10 +1)
  },
  "characters": [],
}

// Write password to the #password input
function writePassword() {
  
  promptLength = prompt("Please select a password length between 8 and 128 characters");
  numLength =parseInt(promptLength);

  if (numLength >=8 && numLength <= 128) {
   
    alert("Please select password criteria from the following pop-up windows.");
     //run password criteria confirms if password length meets criteria, otherwise run else statement only
   upperCase = confirm("Do you want uppercase letters?");
   lowerCase = confirm("Do you want lowercase letters?");
   nums =confirm("Do you want numbers?");
   speChar = confirm("Do you want special characters?");
   //validate at least one password criteria was chosen; run alerts/confirms until one password criteria chosen
  while (upperCase !== true && lowerCase !== true && nums !== true && speChar!== true) {
    alert("Please select password criteria from the following pop-up windows.");
   upperCase = confirm("Do you want uppercase letters?");
   lowerCase = confirm("Do you want lowercase letters?");
   nums =confirm("Do you want numbers?");
   speChar = confirm("Do you want special characters?");
  }
  } else {
   //reload page if user input does not meet criteria
    alert("Please enter a numeric value that is between 8 and 128 characters long");
    location.reload();
  }

 ///now i need to figure out how I'll build my password generator.  taking the user criteria, I'll need to add logic that selects specified character types until the password is the correct length. Object vs arrays Then I'll need to print that on screen or alert via pop-up.

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//|| numLength == NaN)