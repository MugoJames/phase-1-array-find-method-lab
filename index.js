// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ];
  function superbowlWin(record) {
    const winningYear = record.find(game => game.result === "W");

    return winningYear ? winningYear.year : undefined;
  }

  // Test the function
  console.log(superbowlWin(record)); // This will output the year of the Superbowl win or undefined if no win is found