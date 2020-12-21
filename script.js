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
  "upperCase": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  "lowerCase": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  randNums: function() {
    Math.floor(Math.random() * 10 +1)
  },
  "characters": ["@", "#", "$", "%", "&", "*", "!"],
}

// Write password to the #password input
function writePassword() {
  
  promptLength = prompt("Please select a password length between 8 and 128 characters");
  numLength =parseInt(promptLength);

  if (numLength >=8 && numLength <= 128) {
   //run alert/confirms if password length meets criteria, otherwise run else statement only
   alert("Please select password criteria from the following pop-up windows."); 
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
   //alert and reload page if user input does not meet criteria
    alert("Please enter a numeric value that is between 8 and 128 characters long.");
    location.reload();
  }

 ///now i need to figure out how I'll build my password generator.  taking the user criteria, I'll need to add logic that selects specified character types until the password is the correct length. Object vs arrays Then I'll need to print that on screen or alert via pop-up.

 //possible while loop for gathering user-specified components for password length:
 //while (i <= numLength){
   //if (uppercase !== false){
        //pull random letter from upperCase array w/for loop and push to password array
  // }
     //do this for each component
 //}

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//|| numLength == NaN)