function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let text =``;
  for (let i=0; i < 7; i++) {
    text += `#`;
    console.log(text)
  }
  // The code above passes the test, but if I were outputting to something other than console I would concatenate a \n to each output - console.log(text + '\n')
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-10

module.exports = exercise10;
