'use strict';
/* // --------------- An High-Level Overview of JavaScript
// -- High-level: Developer does NOT have to worry about managing resources. Everything happens automatically.
// -- Garbage-collected: Cleaning the memory so we don't have to
// -- Interpreted or just-in-time compiled: The computers only understand 0s and 1s. All human-made languages needs to be converted to the machine code and it's called compiling
// -- Multi-paradigm
// Paradigm: An approach and mindset of structuring code, which will direct your coding style and technique.
// 1. Procedural programming
// 2. Object-oriented programming(OOP)
// 3. Functional programming(FP)
// -- Prototype-based object-oriented
// ex) Array.prototype.push, Array.prototype.indexOf -> prototype
// Our arrays are built from prototype and inherits methods from prototype
// -- First-class functions : In a language with first-class functions, functions are simply treated as variables. We can pass them into other functions, and return them from functions
// -- Dynamic -> Dynamically-typed language
//    No data type definitions. Types becomes known at runtime
//    Data type of variable is automatically changed
// -- Single-threaded
// -- Non-blocking event loop
//    Concurrency model: how the JavaScript engine handles multiple tasks happening at the same time.
//    -> Why do we need that? JavaScript runs in one single thread so it can only do one thing at a time
//    -> So what about a long-running task? Sounds like it would block the single thread. However, we want non-blocking behavior
//    -> How do we achieve that? By using an event-loop: takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished.
*/

// --------------- The JavaScript Engine and Runtime
// -- JS ENGINE : Program that executes JavaScript code
//    ex) V8 Engine
// -- JS Engines contain call stack and heap
//    CALL STACK: includes execution context / where our code is executed
//    HEAP: Where objects are stored
// -- COMPILATION: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer
//    source code (compilation)-> Portable file: machine code (Execution)-> Program running
// -- INTERPRETATION: Interpreter runs through the source code and executes it line by line. Slower than compilation.
//    source code (Execution line by line) -> Program running
// -- * Just-in-time(JIT) compilation: Entire code is converted into machine code at once, then executed immediately

// --------------- Execution Contexts and The Call Stack
const name = 'Soyeon';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();

// CALL STACK

// second()
// first()      first()
// Global       Global      Global

/* // --------------- Scope and The Scope Chain
// Scoping: How our program's variables are organized and accessed. "Where do variables live?" or "Where can we access a certain variable, and where not?"

// Lexical scoping: Scoping is controlled by placement of functions and blocks in the code

// Scope: Space or environment in which a certain variable is declared(variable environment in case of functions). There is global scope, function scope, and block scope

// Scope of a variable: Region of our code where a certain variable can be accessed.

// 3 types of scope
// 1. Global scope
//    - Outside of any function or block
//    - Variables declared in global scope are accessible everywhere
// 2. Function scope
//    - Variables are accessible only inside function, NOT outside
//    - Also called local scope
// 3. Block scope(ES6)
//    - Variables are accessible only inside block(block scoped)
//    - ! HOWEVER, this only applies to let and const variables
//    - Functions are also block scoped(only in strict mode)

// SCOPE CHAIN
const myName = 'Soyeon';

function first() {
  const age = 30;

  if (age >= 30) {
    const decade = 3; // let and const -> block-scoped
    var millenial = true; // var ->  function-scoped
  }

  function second() {
    const job = 'teacher';

    console.log(`${myName} is a ${age}-year-old ${job}`); // myName, age -> not in current scope
    // Soyeon is a 30-year-old teacher
  }

  second();
}

first();

// VARIABLE LOOKUP IN SCOPE CHAIN (Not working vice-versa)

// Global scope
// myName = 'Soyeon';

// first() scope
// age = 30;
// myName = 'Soyeon';

// second() scope
// job = 'teacher';
// age = 30;
// myName = 'Soyeon';

const a = 'Soyeon';
first();

function first() {
  const b = 'Hello!';
  second();
}

function second() {
  const c = 'Hi';
  third();
}

function third() {
  const d = 'Hey!';
  console.log(d + c + b + a);
  // Reference Error
}

// SCOPE CHAIN has nothing to do with order in which functions were called
*/

// --------------- Scoping in Practice
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(FirstName);
  return age;
}

const FirstName = 'Soyeon';
calcAge(1992);

// --------------- Variable Environment Hoisting and The TDZ

// --------------- Hoisting and TDZ in Practice

// --------------- The this Keyword

// --------------- The this Keyword in Practice

// --------------- Regular Functions vs. Arrow Functions

// --------------- Primitives vs. Objects (Primitive vs. Reference Types)

// --------------- Primitives vs. Objects in Practice
