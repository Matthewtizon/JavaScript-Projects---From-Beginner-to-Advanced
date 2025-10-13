const prompt = require("prompt-sync")();


// user prompt
const answer1 = prompt("Would you like to play a game? y/n");

if (answer1.toLowerCase() === "y") {
    const answer2 = prompt(`Would you like to go left or rigth? (left/right)?`);
    if (answer2.toLowerCase() === "left") {
        const answer3 = prompt(`Would you like to go up or down? (up/down)?`);
        if (answer3.toLowerCase() === "up") {
            console.log(`you finished`);
        } else {
            console.log(`you lose`);
        }
    } else {
        console.log(`you lose and crack a leg bone`)
    }
} else {
    console.log(`Okay see you around......`)
}



console.log(`you win the game`);



