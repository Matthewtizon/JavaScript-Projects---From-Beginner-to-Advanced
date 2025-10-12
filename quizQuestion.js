const prompt = require('prompt-sync')();

console.log("This is a game of quiz...");

let play = prompt("Do you want to play? Y/N: ");  
play = play.toUpperCase();
console.log(play);


let score = 0;
const totalQuestions = 4;

if (play === "Y") {
    console.log("Now Playing")

    console.log("choose: define, static, let, const")
    let question1 = prompt("Which keyword is used to declare a variable that can be reassigned later? ")

    if (question1.toLowerCase() === 'let') {
        score += 1;
        console.log(`Correct, Got +1 score: total score is ${score}`);
    } else {
        console.log(`Wrong, Got no plus points : total score is ${score}`);
    }

    console.log("choose: do-while loop, while loop, for loop, for..of loop")
    let question2 = prompt("Which loop guarantees that its body will execute at least once? ")

    if (question2.toLowerCase() === 'do-while loop') {
        score += 1;
        console.log(`Correct, Got +1 score: total score is ${score}`);
    } else {
        console.log(`Wrong, Got no plus points : total score is ${score}`);
    }

    console.log("choose: 8, '8', '53', Error")
    let question3 = prompt("What is the result of the expression 5 +′3′ in JavaScript? ")

    if (question3.toLowerCase() === "'53'") {
        score += 1;
        console.log(`Correct, Got +1 score: total score is ${score}`);
    } else {
        console.log(`Wrong, Got no plus points : total score is ${score}`);
    }

    console.log("choose: ===, ==, =, !=")
    let question4 = prompt("Which operator checks both value and type in JavaScript? ")

    if (question4.toLowerCase() === "===") {
        score += 1;
        console.log(`Correct, Got +1 score: total score is ${score}`);
    } else {
        console.log(`Wrong, Got no plus points : total score is ${score}`);
    }
    let passFail = (score >= 2 ? "passed" : "failed");
    if (score <= 2) {
        console.log(`You ${passFail} the quiz is done you've got ${score}/4.
            You've got ${Math.round((score / totalQuestions) * 100)} percent`);
    } else{
        console.log(`You ${passFail} the quiz is done you've got ${score}/4
            You've got ${Math.round((score / totalQuestions) * 100)} percent`);
    } 
    

} else {
    console.log("Not playing")

}