// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.split(""))

// a) Your answer: ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '1']
// b) Verify and explain: ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '1']
// .split("") is a JavaScript built in method that converts a string into an array where the original string is unchaged.
// .split() takes an arguement to describe where the string is split. By using .split("") you are returning an array that splits each character in the string



// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}

// const greeter = (name) => {
//    return `Hello, ${name}!`
// }


console.log(greeter("LEARN Student"))


// a) Your answer: "Hello, LEARN Student!"
// b) Verify and explain: Undefined.
// The above statement is a function but it is missing the return. Every function needs a return or else the output will be undefined.
// Return describes the output of the function. 

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [8, 10, 12, 14, 16]
// using the .map() built in function for arrays allows the developer to iterate through an array to return a new array of the same length with the updated values
// we are returning an array where each value in the original array is multiplied by 2


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: [12, 14]
// b) Verify and explain: [12, 14]
//using the .filter() higher order function for arrays will loop through the oddsOnly original array
// and returns a new array that with values that satisfy the condition
// in this case, the condition is returning an array with values that are even


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn { student: George, cohort: Delta, year: 2021 }
// b) Verify and explain: Learn { student: 'George', cohort: 'Delta', year: 2021 }
// by using new, you are creating an object for an instance of this class. This allows the class to be resuable and more dynamic
// the return is the Learn's profile which contains 3 key: value pairs.
