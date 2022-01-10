const Bowling = require('./lib/bowling.js')
bowling = new Bowling();


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 function bowlingRoll(){
  return new Promise(resolve => {
    rl.question('Enter a roll: ', (answer) => {
      console.log(bowling.turn)
      console.log(bowling.roll)
      if (bowling.turn === 10 && bowling.roll >= 2) {console.log(bowling.stillRolling())}
      if (parseInt(answer) - bowling.remainder() <= 0 && ((bowling.turn < 10) || bowling.turn === 10 && bowling.stillRolling() === true) || 
      (bowling.turn === 10 && ((bowling.stillRolling() === true)))) 
      {
        bowling.myRoll(parseInt(answer))
        console.log(`Current bowls:`)
        bowling.rollsIveDone()
        if (bowling.roll > 3 || bowling.turn >= 11)
    {       console.log('The game is over! No more rolls')
            console.log(`Your final score is: ${bowling.totalScore()}`)}
      } 
      else
      console.log('Too high of a score or not a valid input!')
      resolve(answer);
    });
  });
}

async function run() {
    while (true) {
      await bowlingRoll();
    }
}

run()
