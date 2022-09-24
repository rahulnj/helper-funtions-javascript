//To find all Capital Letters in a string
const findCapitalLetters = (str) => {
  return str.match(/[A-Z]/g)
}

//To find all lowercase letters in a string
const findLowercaseLetters = (str) => {
  return str.match(/[a-z]/g)
}

//To find all numbers in a string
const findNumbers = (str) => {
  return str.match(/\d/g)
}

//To get full numbers in a string
const getFullNumbers = (str) => {
  return str.match(/\d+/g)
}

//To find a number in a string and replace
// that number with a question mark or any
//other character
const replaceNumber = (str, char) => {
  //remove the "+" to place the question mark
  //in the first number position of the string
  return str.replace(/\d+/g, char)
}

//To validate a email address
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
