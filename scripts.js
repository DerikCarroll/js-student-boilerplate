// Write a program that sums the numbers from any given starting point and any given ending point.

// A function can accept named parameters.
// Default variables assigned if no arguments passed in.
function numberSummer(start = 1, end = 10, inc = 1) {
  let sum = 0; // Sum of the numbers.

  // `<=` is a comparison operator that means less than or equal to
  // For loop declares, compares, and increments its own variable for the loop
  for (let i = start; i <= end; i += inc) {
    // `+=` is an assignment operator that adds and then assigns the new value
    sum += i; // sum = sum + i;
  }

  return sum; // Return sum variable for use in code.
}

// Invoke the function and pass in arguments.
// Assigns the total variable the value of the sum variable.
const total = numberSummer(5, 500, 5);

// Assign the output from the for loop to a new variable.
const output = document.querySelector("output");
// Set the output tag to the total calculated by the for loop.
output.textContent = total;
