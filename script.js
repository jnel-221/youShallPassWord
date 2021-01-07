// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare variables for password length
var promptLength = "";
var numLength;

//declare variable for object, and variables to hold object array lengths.
var charTypes = {
  "upper": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  "lower": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "numbers": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "characters": ["@", "#", "$", "%", "&", "*", "!", "'", "(", ")", "+", ",", "-", ".", "/", ":", ";", "<", "?", "^"],
  
}
var caps = charTypes.upper;
var lows = charTypes.lower;
var ints = charTypes.numbers;
var chars = charTypes.characters;
//charChoices array will hold the arrays of characters chosen by the user.
var charChoices =[];

//newPassword array will hold random characters selected from the charChoices array:
var newPassWord = [];


// Write password to the #password input
function writePassword() {
  
  promptLength = prompt("Please select a password length between 8 and 128 characters");
  numLength = parseInt(promptLength);
  if (numLength >=8 && numLength <= 128) {
  //runconfirms if password length meets criteria, otherwise run else statement only
   var upperCase = confirm("Do you want uppercase letters?");
   var lowerCase = confirm("Do you want lowercase letters?");
   var nums = confirm("Do you want numbers?");
   var speChar = confirm("Do you want special characters?");

   //validate at least one password criteria was chosen; run alerts/confirms until one password criteria chosen
  while (upperCase !== true && lowerCase !== true && nums !== true && speChar!== true) {
   alert("Please select at least one password criteria from the following pop-up windows.");
   upperCase = confirm("Do you want uppercase letters?");
   lowerCase = confirm("Do you want lowercase letters?");
   nums = confirm("Do you want numbers?");
   speChar = confirm("Do you want special characters?");
  };

//Constructs array based on user choices
  if (upperCase) {
    charChoices = charChoices.concat(caps)
  } 
  if (lowerCase) {
    charChoices = charChoices.concat(lows)
  }
  if (nums) {
    charChoices = charChoices.concat(ints)
  }
  if (speChar) {
  charChoices = charChoices.concat(chars)
  }

  for (var i = 0; i < numLength; i++){
    
    if (newPassWord.length === numLength){

      break;
    } 
    generatePassword();
    
  };

  }
  
 
  function generatePassword () {
   
    //grab a random item from the charChoices array
      var randomChar = charChoices[Math.floor(Math.random() * charChoices.length)];
      // console.log(randomChar);

    //push random item into password array
      newPassWord.push(randomChar);
      // console.log(newPassWord.length);



     //changed source code from var password = generatePassword() to var password = newPassWord.join('').
     //concatinate items in new array into string & print to page
      var password = newPassWord.join('');
      var passwordText = document.querySelector("#password");
      // console.log(password);
      passwordText.value = password;
      
      
     };
    
  //application does not yet validate final password to ensure at least one character from each array is present.
   //application does not yet re-set after password is generated so user can re-run it.
};


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
