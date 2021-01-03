// Assignment Code
var generateBtn = document.querySelector("#generate");

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','o','m','n','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','O','M','N','P','R','S','T','U','V','W','X','Y','Z']
var numeric = ['0','1','2','3','4','5','6','7','8','9']
var specialChar = ['!','@','#','$','%','^','&','*','(',')','_','-']


// Write a function called generatePassword which will have series of prompts and user inputs
function generatePassword() {

  do{
  var length = parseInt (prompt("How many characters would you like your password to contain?"));
    // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (length < 8 ||  length > 128 || isNaN(length))
   {
    alert("Length must be between 8-128 characters") 
    }
  } while (length < 8 ||  length > 128 || isNaN(length))
  //   var length = parseInt (prompt("How many characters would you like your password to contain?"));
  // return;
 

// THEN I am presented with a series of prompts for password criteria
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// we need show an error if they give us no characters to choose from
  do{
  var gotLower = confirm("Click Ok to confirm including lowercase characters.")
  var gotUpper = confirm("Click Ok to confirm including uppercase characters.")
  var gotSpecial = confirm("Click Ok to confirm including special characters.")
  var gotNumber = confirm("Click Ok to confirm including numeric characters.")

if (gotLower === false && gotUpper === false && gotSpecial === false && gotNumber === false){
 alert("You must select at least one character type!");
}
} while (gotLower === false && gotUpper === false && gotSpecial === false && gotNumber === false)

var actualPassword = []
var randomPassword = ""

if (gotLower) {
  actualPassword = actualPassword.concat(lowercase)
  randomPassword = randomPassword + lowercase[Math.floor(Math.random() * lowercase.length)];
}
if (gotUpper) {
  actualPassword = actualPassword.concat(uppercase)
  randomPassword = randomPassword + uppercase[Math.floor(Math.random() * uppercase.length)];
}
if (gotSpecial) {
  actualPassword = actualPassword.concat(specialChar)
  randomPassword = randomPassword + specialChar[Math.floor(Math.random() * specialChar.length)];
}
if (gotNumber) {
  actualPassword = actualPassword.concat(numeric)
  randomPassword = randomPassword + numeric[Math.floor(Math.random() * numeric.length)];
}

//form all charc shows chosen, choose one randomly and add it to our password x number of times

var currentlength = randomPassword.length;
console.log(currentlength) 

for (var i = 0; i < length-(currentlength); i++) {
  randomPassword = randomPassword + actualPassword[Math.floor(Math.random() * actualPassword.length)];
  console.log(randomPassword)
  
}
return randomPassword;

}


// Write password to the #password input
function writePassword() {
  // WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//********************function starts********** */

// GIVEN I need a new, secure password.
// WHEN I click the button to generate a password





//we have to ask user for how many characters they want in password
//we have to check to make sure it is between 8 and 128
//otherwise, we tell user to fix their input.








// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria



//**************function ends*************** */
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);





