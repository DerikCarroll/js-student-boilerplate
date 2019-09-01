// Write a program that sums the numbers from 1 to 10.

let counter = 1; // Counter for while loop starting at 1
let sum = 0; // Sum of the numbers

// `<=` is a comparison operator that means less than or equal to
while (counter <= 10) {
  sum += counter; // sum = sum + counter;

  // `+=` is an assignment operator that adds and then assigns the new value
  counter += 1; // counter = counter + 1;
}

console.log(sum); // Displays the sum variable in the console
