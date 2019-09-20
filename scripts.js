// Write a program that sums the numbers from any given starting point and any given ending point.

// A function can accepts named parameters.
function numberSummer(start, end) {
  let sum = 0; // Sum of the numbers.

  // `<=` is a comparison operator that means less than or equal to
  // For loop declares, compares, and increments its own variable for the loop
  for (let i = start; i <= end; i += 1){
    // `+=` is an assignment operator that adds and then assigns the new value
    sum += i; // sum = sum + i;
  }

  console.log(sum); // Displays the sum variable in the console
}

// Invoke the function and pass in arguments.
numberSummer(1, 10);
