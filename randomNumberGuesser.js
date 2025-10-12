const prompt = require("prompt-sync")();
let userInput;




let target = Math.floor(Math.random() * 10);
let attempts = 0;

    
while (Number(userInput) !== target) {
    
    userInput = prompt("guess: ");
    attempts++;
    console.log(attempts);
    if (userInput > target){
        console.log(`Your guess is too high`)
    } else if (userInput < target){
        console.log(`Your guess is too low`)
    } else {
        console.log(`You've gues the right number`);
    }
    
}

