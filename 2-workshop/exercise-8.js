function exercise8() {
  // Exercise 8
  //
  // Write a program that will output the sum of all of the multiples of four
  // between 0 and 5000
  //
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  // Decided to use array and reduce function here because why not?
  const mult4 = [];
  for (let number = 0; number <= 5000; number++) {
    if (number % 4 === 0) {
      mult4.push(number);
    }
  }
  const sum = mult4.reduce((a, b) => a + b);
  console.log(`The sum is ${sum}`);
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  // Alt Code below (without array)
  // let sum=0
  // for (let number = 0; number <= 5000; number++) {
  //  if (number % 4 === 0) {
  //    sum += number ;
  //  }
  // }
  // console.log(`The sum is ${sum}`);
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-8

module.exports = exercise8;
