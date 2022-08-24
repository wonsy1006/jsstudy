"use strict";

/* // ------------- Activating Strict Mode
// 1. forbids us to do certain things
// 2. creates visible errors

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :)");

// reserved words 
// const interface = "Audio";
// const private = 534;
// const if = 23;
*/

/* // ------------- Functions
function logger() {
  // function body
  // returns nothing
  console.log(`My name is soyeon.`);
}

// invoking / calling / running the function
logger();
logger();
logger();

// parameter
function fruitProcessor(apples, oranges) {
  // using parameters
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);
console.log(fruitProcessor(6, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/* // ------------- Function Declarations vs. Expressions
// Declarations
// 함수가 선언되기 전에 호출 가능
const age1 = calcAge1(1992);

function calcAge1(birthYear) {
  // const age = 2037 - birthYear;
  // return age;
  return 2037 - birthYear;
}

// Expressions (anonymous function)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1992);
console.log(age1, age2);
*/

/* // ------------- Arrow Functions
// return implicitly
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1992, "Soyeon"));

// does not have this

*/

/* // ------------- Functions Calling Other Functions
// fits into don't repeat yourself (DRY) principle
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of an apple and ${orangePieces} pieces of an orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/* // ------------- Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1992, "Soyeon"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

/* // ------------- Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// * more usual
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// new를 사용해 새 배열 생성
// const years = new Array(1991, 1984, 2008, 2020);

// friends 배열의 0번째 요소 출력 (배열의 인덱스는 0부터 시작)
console.log(friends[0]);
console.log(friends[2]);

// length -> 배열에 포함된 항목의 수
console.log(friends.length);
// 배열의 마지막 요소 출력
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Soyeon";
const soyeon = [firstName, "Won", 2037 - 1992, "teacher", friends];
console.log(soyeon);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years)); // NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
  calcAge(years[4]),
];
console.log(ages);
*/

/* // ------------- Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// Add Elements
// push
const newLength = friends.push("Jay");

console.log(friends);
console.log(newLength);

// unshift -> 0번째로 추가
friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last item
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // First item
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // -1

friends.push(23);
// includes(ES6)
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23")); // no type coercion
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

/* // ------------- Introduction to Objects
// array : ordered
const soyeonArray = [
  "Soyeon",
  "Won",
  2037 - 1992,
  "student",
  ["Michael", "Peter", "Steven"],
];

// property: value
// object : unstructured(unordered) data
const soyeon = {
  firstName: "Soyeon",
  lastName: "Won",
  age: 2037 - 1992,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};
*/

/* // ------------- Dot vs. Bracket Notation
const soyeon = {
  firstName: "Soyeon",
  lastName: "Won",
  age: 2037 - 1992,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(soyeon);

console.log(soyeon.lastName);
console.log(soyeon["lastName"]);

const nameKey = "Name";
console.log(soyeon["first" + nameKey]);
console.log(soyeon["last" + nameKey]);

// not working
// console.log(jonas.'last' + nameKey);

const interestedIn = prompt(
  "What do you want to know about Soyeon? Choose between firstName, lastName, age, job, and friends."
);
console.log(interestedIn);
// console.log(soyeon.interestedIn); // undefined

if (soyeon[interestedIn]) {
  console.log(soyeon[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends."
  );
}

// add key-value in object
soyeon.location = "Korea";
soyeon["twitter"] = "@acrosstheriver";
console.log(soyeon);

// Challenge
// "Soyeon has 3 friends, and his best friend is called Michael"

console.log(
  `${soyeon.firstName} has ${soyeon.friends.length} friends and his best friends is called ${soyeon.friends[0]}`
);
*/

/* // ------------- Object Methods
const soyeon = {
  firstName: "Soyeon",
  lastName: "Won",
  birthYear: 1992,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
  driversLicense: false,
  // method(expression)
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    // console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  hasDriversLicense: function () {
    if (this.driversLicense === true) {
      return "a";
    } else {
      return "no";
    }
  },
  // How T solved
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and she has ${this.driversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(soyeon.calcAge());
// console.log(soyeon["calcAge"](soyeon.birthYear));

// Challenge
// 'Soyeon is a 45-year old student and she has a/no driver's license.';

// How I solved
// console.log(
//   `${soyeon.firstName} is a ${soyeon.calcAge()}-year old ${
//     soyeon.job
//   } and she has ${soyeon.hasDriversLicense()} driver's license.`
// );

console.log(soyeon.getSummary());
*/

/* // ------------- Iteration: The for Loop
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/

/* // ------------- Looping Arrays, Breaking and Continuing
const soyeonArray = [
  "Soyeon",
  "Won",
  2037 - 1992,
  "student",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

// console.log(soyeonArray[0]);
// console.log(soyeonArray[1]);
// ...
// console.log(soyeonArray[4]);
// soyeonArray[5] does NOT exist

for (let i = 0; i < soyeonArray.length; i++) {
  // Reading from jonas array
  console.log(soyeonArray[i], typeof soyeonArray[i]);

  // Filling types array
  // types[i] = typeof soyeonArray[i];
  types.push(typeof soyeonArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < soyeonArray.length; i++) {
  if (typeof soyeonArray[i] !== "string") continue;
  console.log(soyeonArray[i], typeof soyeonArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < soyeonArray.length; i++) {
  console.log(soyeonArray[i], typeof soyeonArray[i]);
  if (typeof soyeonArray[i] === "number") break;
}
*/

/* // ------------- Looping Backwards and Loops in Loops
const soyeonArray = [
  "Soyeon",
  "Won",
  2037 - 1992,
  "student",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ...., 4
// 4, 3, ...., 0
for (let i = soyeonArray.length - 1; i >= 0; i--) {
  console.log(i, soyeonArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
  }
}
*/

// ------------- The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end!");
  }
}
