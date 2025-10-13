const prompt = require("prompt-sync")();
let gameSet = 1;
const typeHand = ["rock", "paper", "scissors"];
let yourWin = 0;
let comWin = 0;
let tie = 0;
const winLose = (yourWin > comWin ? "win" : "lose");

while (gameSet <= 10) {

    const randomNum = Math.floor(Math.random() * 3);

    const userInput = prompt("Pick: rock/paper/scissors? ");
    const picked = typeHand[randomNum];
    console.log(`${gameSet}/10`);
    console.log(`You've picked: ${String(userInput)}`);
    console.log(`Computer picked: ${String(picked)}`);

    if (userInput === "rock" && picked === "paper") {
        console.log('You Lose');
        comWin++;
    } else if (userInput === "rock" && picked === "scissors") {
        console.log("You Win");
        yourWin++;
    } else if (userInput === "paper" && picked === "rock") {
        console.log("You Win");
        yourWin++;
    } else if (userInput === "paper" && picked === "scissors") {
        console.log("You Lose");
        comWin++;
    } else if (userInput === "scissors" && picked === "rock") {
        console.log("You Lose");
        comWin++;
    } else if (userInput === "scissors" && picked === "paper") {
        console.log("You Win");
        yourWin++;
    } else {
        tie++;
        console.log("its a Tie")
    }
        
    

    gameSet++;

    
}



if (gameSet >= 10) {
    if (yourWin > comWin) {
        console.log(`You have ${winLose} to a computer: your score is ${yourWin} over computer score is ${comWin} and ties are ${tie}`);
    } else if (yourWin < comWin) {
        console.log(`You have ${winLose} to a computer: your score is ${yourWin} over computer score is ${comWin} and ties are ${tie}`);
    } else {
        console.log(`You have ${winLose} to a computer: your score is ${yourWin} over computer score is ${comWin} and ties are ${tie}`);        
    }
}