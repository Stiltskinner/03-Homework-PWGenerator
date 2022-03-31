// Assignment Code
var generateBtn = document.querySelector("#generate");
// The variables below will be used in a function to select characters to pull for the password generator based on the user selection
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var isLowerCase = true;
var numbers = "0123456789";
var isNumbers = true;
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var isUpperCase = true;
var symbols = "!@#$%^&*()[],./?;:{}";
var isSymbols = true;
var allchars = ""
var pwLength = 0;
// declaring password, to be used later in the generatePassword function
var password = "";

// Write password to the #password input
function askLength() {
  pwLength=window.prompt("Please choose a password length between 8 and 128 characters");
  console.log(pwLength);
  if(pwLength < 8) {
    askLength();
  }
  else if(pwLength > 128) {
    askLength();
  }
  else {
    return;
  }
}

function askCharacters() {
   isLowerCase=window.confirm("Would you like to use lowercase letters?");
   isUpperCase=window.confirm("Would you like to use uppercase letters?");
   isNumbers=window.confirm("Would you like to use numbers?");
   isSymbols=window.confirm("Would you like to use symbols?");
   if(isLowerCase && isUpperCase && isNumbers && isSymbols){
     allchars=lowercaseletters+uppercaseletters+numbers+symbols;
      }
      else if(isLowerCase && isUpperCase && isNumbers) {
        allchars=lowercaseletters+uppercaseletters+numbers;
      }
      else if(isLowerCase && isUpperCase && isSymbols) {
        allchars=lowercaseletters+uppercaseletters+symbols;
      }
      else if(isLowerCase && isNumbers && isSymbols) {
        allchars=lowercaseletters+numbers+symbols;
      }
      else if(isUpperCase && isNumbers && isSymbols) {
        allchars=uppercaseletters+numbers+symbols;
      }      
      else if(isLowerCase && isUpperCase) {
        allchars=lowercaseletters+uppercaseletters;
      }
      else if(isLowerCase &&  isSymbols) {
        allchars=lowercaseletters + symbols;
      }
      else if(isLowerCase &&  isNumbers) {
        allchars=lowercaseletters + numbers;
      }
      else if(isUpperCase && isNumbers) {
        allchars=uppercaseletters + numbers;
      }
      else if(isUpperCase && isSymbols) {
        allchars=uppercaseletters + symbols;
      }
      else if(isSymbols && isNumbers) {
        allchars= symbols+numbers;
      }
      else if(isLowerCase) {
        allchars=lowercaseletters;
      }
      else if(isUpperCase) {
        allchars=uppercaseletters;
      }
      else if(isNumbers) {
        allchars=numbers;
      }
      else if(isSymbols) {
        allchars=symbols;
      }
   else {
     return
   }
}

function generatePassword() {
  for (var i = 0; i <pwLength; i++) {
    var randomNumber = Math.floor(Math.random() * allchars.length);
    password += allchars[randomNumber];
  }
}
  function writePassword() {
    // var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

  function clearPassword() {
    password = ""
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", clearPassword);
  generateBtn.addEventListener("click", askLength);
  generateBtn.addEventListener("click", askCharacters);
  generateBtn.addEventListener("click", generatePassword);
  generateBtn.addEventListener("click", writePassword);


// I should use window.prompt to ask the user to input a password length

// Then I should use window.confirm multiple times to ask about a: lowercase b:uppercase c:numeric d:special chars

// It should return if all values are false