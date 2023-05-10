const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answers = [];
rl.question('What do you think of Node.js? ', (answer) => {
  rl.question('What\'s your nick name? ', (answer1) => {
    rl.question('What do you listen to while doing that? ', (answer2) => {
      rl.question('Which pet do you like? ', (answer3) => {
        console.log(`In summary, it seems that you like ${answer}, ${answer1}, ${answer2}, ${answer3}`)
        rl.close();
      });  
    });  
  });  
});

