
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var promptArray = [];
  var compArray = [];
  // Every possible character the generator can use 
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray = ["!", "#", "_", "%", "^", "&", "@", "(", ")", "-", "$", "=", "+"];
//gets the data from the check form and sees which queryselectors where checked
  var upperCase = document.querySelector('#uppercase').checked;
  var specials = document.querySelector('#specials').checked;
  var amountChar = document.querySelector('#length').value;
  var lowerCase = document.querySelector('#lowercase').checked;
  var numbers = document.querySelector('#numbers').checked;

  //validating length chosen in amountChar is between 8-128, prompt user again if not.
  console.log(upperCase);
  console.log(lowerCase);
  /* produces a pop up if the character length minimum has not been met*/ 
  /* if character amount is less than 8 or more than 128, run pop up*/
  if (amountChar < 8 || amountChar > 128) {
  window.alert('Pick a password length between 8-128');
  /* then returns No length selected in the password box */
  return "No length selected";
  }
  //validates that one was selected by returning true when all variables are included 
  if (!upperCase && !lowerCase && !numbers && !specials) {
    alert("Pick one character type");
  }
  //will check if boxes are filled or not and will combine arrays of the selected boxes to produce a password 
  if (upperCase) {
    promptArray = promptArray.concat(upperArray);
  };
  if (lowerCase) {
    promptArray = promptArray.concat(lowerArray);
  };
  if (numbers) {
    promptArray = promptArray.concat(numArray);
  };
  if (specials) {
    promptArray = promptArray.concat(specialArray);
  }
  //will contain all selected arrays
  console.log(promptArray);
  //use a for loop and math.random to pick a random index of promptarray and push it to . Loop amount determined by user input on amountChar prompt.

  for (var i = 0; i < amountChar; i++) {
    compArray.push (promptArray[Math.floor(Math.random() * promptArray.length)])
  };

  //use array.join method to convert array to string and return it
    console.log(compArray);
  return compArray.join("");
}