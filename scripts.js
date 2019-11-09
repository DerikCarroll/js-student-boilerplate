// Write a program that sums the numbers from any given starting point and any given ending point.

// Const array declaration.
const nums = [];

// A function can accept named parameters.
// Default variables assigned if no arguments passed in.
function numberSummer(start = 1, end = 10, interval = 1) {
  // `<=` is a comparison operator that means less than or equal to
  // For loop declares, compares, and increments its own variable for the loop
  for (let i = start; i <= end; i += interval) {
    // Uses .push to put numbers at set intervals into the array.
    nums.push(i);
  }

  // Returns the array after doing the .reduce function.
  // Taking all of them numbers in the array and condensing them into one with addition.
  return nums.reduce((total, num) => (total += num)); // Return total of variables for use in code.
}

// Invoke the function and pass in arguments.
// Assigns the total variable the value of the reduced array.
const total = numberSummer(1, 10, 1);

// Assign the output from the for loop to a new variable.
const output = document.querySelector("output");
// Set the output tag to the total calculated by the for loop.
output.textContent = total;
