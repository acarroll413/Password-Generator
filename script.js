
var generateBtn = document.querySelector("#generate")

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password
}

function generatePassword() {
  let charAmount = 0
  let toLowerChars = false
  let toUpperChars = false
  let numberChars = false
  let specialChars = false

  let lowerCharsOptions = "abcdefghijklmnopqrstuvwxyz"
  let upperCharsOptions = "ABCDEFGHIJKLMNOPQRSTUVWSYZ"
  let numCharsOptions = "0123456789"
  let specCharsOptions = "!@#$%^&*()"

  charAmount = prompt(
    "Enter desired password length (8-128 characters): "
  )

    while (charAmount < 8 || charAmount > 128 || !charAmount.match(/^[0-9]+$/)) {
    console.log(charAmount)
    alert("Please pick a number between 8 and 128")
    charAmount = prompt(
      "Enter desired password length (8-128 characters): "
    )
  }


  toLowerChars = confirm(
    "Allow lower case letters (abcde....z)\n(Ok=Yes or Cancel=No): "
  )
  toUpperChars = confirm(
    "Allow upper case letters (abcde....z)\n(Ok=Yes or Cancel=No): "
  )
  numberChars = confirm("Allow numbers (0123....9)\n(Ok=Yes or Cancel=No): ")
  specialChars = confirm(
    "Allow numbers (0123....9)\n(Ok=Yes or Cancel=No): "
  )


  let passwordChars = ''
  if (toLowerChars) {
    passwordChars += lowerCharsOptions
  }
  if (toUpperChars) {
    passwordChars += upperCharsOptions
  }
  if (numberChars) {
    passwordChars += numCharsOptions
  }
  if (specialChars) {
    passwordChars += specCharsOptions
  }

  let newPassword = ''
  
  for (let i = 0; i < charAmount; i++) {
    let char = Math.floor(Math.random() * passwordChars.length)
    newPassword += passwordChars[char]
  }
  return newPassword
}

generateBtn.addEventListener('click', writePassword)