/* // ------------- Values and Variables --------------

let js = "amazing";
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// declaring a variable
let firstName = "Matilda";
let first = "jonas";

// Variable name conventions
//camelCase
let firstNamePerson;
let first_name_person;

console.log(firstName);
console.log(firstName);
console.log(firstName);

// can't start with a number
// let 3years = 3;

// let jonas&matilda = 'JM';

// reserved keyword in js
// let new = 27;

// it works but not recommending
// let name;

// can't star with capital letters;
// let person;

// * better!!
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

// worse
let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);
*/

/* // ------------- Data types --------------

// primitive type
// *** most commonly used ***
// 1. number: Floating point numbers -> used for decimals and integers;
// 2. String : Sequence of characters -> used for text
// 3. Boolean: Logical type than can only be true or false -> used for taking decisions

// 4. Undefined: Value taken by a variable that is not yet defined ('empty value')
// 5. Null: Also means 'empty value'
// 6. Symbol(ES2015): Value that is unique and cannot be changed [Not useful for now]
// 7. BigInt(ES2020): Larger integers than the Number type can hold

// dynamic typing : data types are determined automatically.

let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// return object -> bug or error
console.log(typeof null);
*/

/* // ------------- let, const and var --------------

let age = 30;
age = 31;

// const -> not supposed to be changed
const birthYear = 1992;
// birthYear = 1990;

// const declarations needs to be initialized
// const job;

// Don't use var!!!!!!
var job = "programmer";
job = "teacher";

console.log(job);

// terrible idea. always declare variable!!
lastName = "Won";
console.log(lastName);
*/

/* // ------------- Basic Operators --------------
// Math operators
const now = 2037;
const ageJonas = now - 1992;
const ageSarah = now - 2010;

console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// + -> to join strings
const firstName = "Soyeon";
const lastName = "Won";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 => 25;
x *= 4; // x = x * 4 => 100;
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1992 > now - 2010);
*/

/* // ------------- Operator Precedence --------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const now = 2037;
const ageJonas = now - 1992;
const ageSarah = now - 2010;

console.log(now - 1991 > now - 2010);

// left to right
console.log(25 - 10 - 5);

// right to left
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/* // ------------- Strings and Template Literals --------------
const firstName = "Soyeon";
const job = "Frontend developer";
const birthYear = 1992;
const year = 2022;

const soyeon =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(soyeon);

// Template Literal
const soyeonNew = `I'm ${firstName}, a ${year - birthYear} year-old ${job}!`;

console.log(soyeonNew);

console.log(`Just a regular string...`);

// multiple lines string
console.log("String with \nmultiple\nlines");

console.log(`String
multiple
lines`);
*/

/* // ------------- Taking Decisions: if / else statement --------------
const age = 15;

// if else structure
if (age >= 18) {
  console.log(`Sarah can start driving license 👍`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/* // ------------- Type Conversion and Coercion --------------
// conversion : manually convert from one data type to another(explicitly)
const inputYear = "1992";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN); // number, an invalid number

console.log(String(23), 23);

// coercion : JS automatically convert type behind the scenes(implicitly)
console.log("I am " + 23 + " years old.");
// console.log("I am " + String(23) + " years old.");
console.log("23" - "10" - 3); // - operator triggers opposite conversion
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
*/

/* // ------------- Truthy and Falsy Values --------------
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

// const money = 0;
const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined.");
} else {
  console.log("Height is UNDEFINED!");
}
*/

/* // ------------- Equality Operators: == vs. === --------------
const age = "18";
// Strict equality operator
if (age === 18) console.log("You just became an adult! (Strict)");

// Loose equality operator
if (age == 18) console.log("You just became an adult! (Loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // '23' == 23
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("Why not 23?");
*/

// ------------- Boolean Logic --------------

/* // ------------- Logical Operators --------------

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah can drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah can drive!");
} else {
  console.log("Someone else should drive...");
}
*/

/* // ------------- The Switch Statement --------------
const day = "sunday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :)");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :)");
} else {
  console.log("Not a valid day!");
}
*/

/* // ------------- Statements and Expressions --------------

// Statement : doesn't produce a value
// Expression : produce values

3 + 4;
1992;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Soyeon";
console.log(`I'm ${2037 - 1992} years old.`);
console.log(`I'm ${2037 - 1992} years old ${me}.`);
// console.log(`I'm ${2037 - 1992} years old. ${if (23 > 10) {
//   const str = "23 is bigger";
// }}`);
*/

// ------------- The Conditional (Ternary) Operator --------------
// useful for making quick decisions

const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink juice");

const drink = age >= 18 ? "wine" : "juice";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "juice";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "juice"}`);
