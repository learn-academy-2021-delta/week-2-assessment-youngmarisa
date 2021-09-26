// // ASSESSMENT 2: Coding practical questions with Jest
//
// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process
//
// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest
//
// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest
//
//
// // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
//
// // a) Create a test with expect statements for each of the variables provided.
//
var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

// 1. declare a test function called numberDividedBy3
describe ('numberDividedBy3',() =>{
  // 2. write a test method that describes what the function does
  // the function should take in a number value and return a string that determines if the number is evenly divisibly by three
  it(' should take the number value and return a string that states whether the number is evenly divisible by three', () =>{
    // 3. write three expect method that calls on the numberDividedBy3() function followed by the .toEqual matcher with the expected return
     // expected return should be a string stating the results of the function.
     // write an expected return for each of the three variables listed above.
     expect(number(15)).toEqual('15 is divisible by three.')
     expect(number(0)).toEqual('0 is divisible by three.')
     expect(number(-7)).toEqual('-7 is not divisible by three.')
  })
})
// // //RED- FAIL :(
//

// // b) Create the function that makes the test pass.
//
// define a function that takes the value parameter (which is a number)
const numberDividedBy3 = (value) => {
  // the function will check if the value is divisible by three by writing a conditional statement
  if (value %3 === 0){
    // if the number is divisible by three, return the string "the number is divisible by three."
    return `${value} is divisible by three.`
    // write an else if statement for if the number is not divisible by three
  } else if(value %3 !==0){
    // write the return string "the number is not divisible by three." for when the number is not evenly divisible by three
    return `${value} is not divisible by three.`
  }
}
// // // GREEN- PASS :)
//
//REFACTORED
// define the function numberDividedBy3 to be if the value is evenly divisble by three
// const numberDividedBy3 = ((value) %3 === 0) => {
//   // return the string "number is divisible by three"
//   return `${value} is divisible by three.`
// }

//
// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//
// // a) Create a test with expect statements for each of the variables provided.
//
var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
//
// 1. declare a test method called arrayToUpperCase
describe ("arrayToUpperCase", ()=> {
  // 2. write a test for each array that will convert the zero index for each string in the array to an uppercase letter
  let randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
  let randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
  test('given an array of strings, return the array with the strings capitalized', ()=>{
    // 3. write two expect methods for each possible outcome that calls on the arrayToUpperCase function followed by the .toEqual matcher with the expected return
    // for each array we expect the outcome to have each string element to return the same string with all the words capitalized
    expect(arrayToUpperCase(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(arrayToUpperCase(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
// RED- FAIL :(

// // // b) Create the function that makes the test pass.
// //
//
// declare a function named arrayToUpperCase
const arrayToUpperCase = (array) => {
  // write a for loop for the array
  for (i=0; i<array.length; i++){
    // write the code that capitalizes the zero index for each string element in the array by using .charAt(0).toUpperCase()
    // use the .slice method to bring the string back together
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
  }
  // return the array with each string element at the zero index capitalized
return array
}
// // GREEN- PASS :)

// REFACTORED
// declare the function arrayToUpperCase
// const arrayToUpperCase = (array) => {
//   // for loop for the array
//   for (i=0; i<array.length; i++){
//     // return the array with the zero index of each string element in the array to be capitalized
//     return array[i].charAt(0).toUpperCase() + array[i].slice(1).split(" ")
//   }
// }


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2



// // 1. declare a test function called firstVowelIndex
describe("firstVowelIndex", () => {
  // 2. write a test method that that describes what the function does
  // this test will return the index of the first vowel for each string
  test('given a string, return the index of the first vowel', () => {
    // 3. write the three expected outcomes for each test variable
    // the first string will have a output of 1 because the first vowel in "learn" is at the first index
    // the second string will have an output of 0 because the first vowel in "academy" is at the zero index
    // the third string will have an output of 2 because the first vowel in "challenges" is at the second index
    expect(firstVowelIndex(vowelTester1)).toEqual(1)
    expect(firstVowelIndex(vowelTester2)).toEqual(0)
    expect(firstVowelIndex(vowelTester3)).toEqual(2)
  })
})
// // RED- FAIL :(
//
// // b) Create the function that makes the test pass.
//
//declare a function named firstVowelIndex
const firstVowelIndex = (value) => {
  // the function will check each index for a vowel
  let test = value.search(/[a, e, i, o, u]/g)
  // the function will return the first vowel index in each string
  return test
}
// // GREEN- Pass :)
//
// //REFACTORED
// // declared the function firstVowelIndex
// const firstVowelIndex = (value) => {
//   // return the index value for the first vowel in each string
//   return value.search(/[a, e, i, o, u]/g)
// }
