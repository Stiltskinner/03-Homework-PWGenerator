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

// Functions

// This guy clears the html text when you press generate password, so that only the new password shows up instead of adding onto the previous password. It gets called first when the button is pressed.

function clearPassword() {
  password = ""
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// This prompts the user to enter their length, and if it's too short or too long it starts the function over

function askLength() {
  pwLength=window.prompt("Please choose a password length between 8 and 128 characters");
  console.log(pwLength);
  if(pwLength < 8) {
    window.alert("Please make sure you choose a length between 8 and 128 characters");
    askLength();
  }
  else if(pwLength > 128) {
    window.alert("Please make sure you choose a length between 8 and 128 characters");
    askLength();
  }
  else {
    return;
  }
}

// There is probably a better way to do this, but I don't know what that is, so changes the boolean variable based on the window.confirm prompt, and then it uses those variables in a bunch of if statements to create the pool of possible characters to pull from. That pool is located in the allchars variable.
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
     window.alert("Please choose at least one type of character")
     askCharacters();
   }
   return;
}

// This generates the actual password from the available characters using random numbers. It chooses a character from allchars by referring to its matrix number
function generatePassword() {
  for (var i = 0; i <pwLength; i++) {
    var randomNumber = Math.floor(Math.random() * allchars.length);
    password += allchars[randomNumber];
  }
}

// This writes the password onto the page. This was provided with the homework. I took out the code that called generatePassword here because I thought it made more sense to generate it with the button press THEN write it
  function writePassword() {
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // When the button is pressed, the text box is cleared from prior uses, and then it calls all the functions in the correct order to get prompts from the user and create the password, then it writes the password
  generateBtn.addEventListener("click", clearPassword);
  generateBtn.addEventListener("click", askLength);
  generateBtn.addEventListener("click", askCharacters);
  generateBtn.addEventListener("click", generatePassword);
  generateBtn.addEventListener("click", writePassword);