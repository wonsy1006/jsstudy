// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* // ------------- Setting up Prettier and VS code
// strongly opinionated tool
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
*/

/* // ------------- Installing Node.js and Setting up a Dev Environment
console.log(calcAge(1992));

// run live server from terminal
// live-server
*/

// ------------- Learning How to Code

/* // ------------- How to Think Like a Developer: Become a Problem Solver!

// 4 STEPS TO SOLVE ANY PROBLEM
// 1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of problem.
// 2. Divide and conquer: Break a big problem into smaller sub-problems.
// 3. Don't be afraid to do as much research as you have to
// 4. For bigger problems, write pseudo-code before writing the actual code
*/

/* // ------------- Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) {
      max = curTemp;
    }

    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) {
      max = curTemp;
    }

    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

/* // ------------- Debugging(Fixing Errors)
// Software bug: Defect or problem in a computer program. Basically, any unexpected or unintended behavior of a computer program is a software bug.

// Bugs are completely normal in software development!

// Debugging: Process of finding, fixing and preventing bugs.

// IDENTIFY -> FIND -> FIX -> PREVENT
*/

// ------------- Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    value: 10,
  };

  // B) FIND
  console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // debugger;
    if (curTemp > max) {
      max = curTemp;
    }

    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
