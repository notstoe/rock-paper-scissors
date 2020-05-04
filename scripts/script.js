
let score = [0, 0]; 
let choiceAI;


function getRandomInt() {  return Math.floor(Math.random()*3);  } //returns a random integer in [0,2]

function computerPlay(){                                          //returns a string with computer selection

    let choiceAI = ["paper", "rock", "scissors"];
    return choiceAI[getRandomInt()];
}

function playRound(playerSelection, computerSelection) {          //plays a round of the game

    switch (playerSelection) {

        case "paper": 
            if (computerSelection === "paper") {
                return "tie";

            } else if (computerSelection === "rock") {
                return "won";

            } else {
                return "lost";

            }
        break;

        case "rock":
            if (computerSelection === "rock") {
                    return "tie";

                } else if (computerSelection === "scissors") {
                    return "won";

                } else {
                    return "lost";

                }
        break;

        case "scissors":
            if (computerSelection === "scissors") {
                    return "tie";

                } else if (computerSelection === "paper") {
                    return "won";

                } else {
                    return "lost";

                }
        break;
    }

}

function game(playerSelection){                                                                                       

    let roundResult;                                                             
    
        choiceAI = computerPlay();
        roundResult = playRound(playerSelection, choiceAI);


        if (roundResult === "won") {

            score[0]++;
            console.log(`You won this round!`);

        } else if (roundResult === "lost") {

            score[1]++;
            console.log(`You lost this round!`);

        } else {

            console.log(`It\'s a tie on this round!`);
        }


    if (score[0] == 5 || score[1] == 5) {
        if (score[0] > score [1]) {

            console.log(`Congratulations! You won! \nFinal Score: AI: ${score[1]} Player: ${score[0]}`);

        } else if (score[0] < score [1]){

            console.log(`The AI got you this time! You lost! Rematch? \nFinal Score: AI: ${score[1]} Player: ${score[0]}`);
        }

        score = [0, 0];
    }
}

const buttons = document.querySelectorAll('button'); 


buttons.forEach((button) => {button.addEventListener('click', getInnerText); });


function getInnerText(e) {
    let pressedbutton = e.target.innerText;
    game(pressedbutton.toLowerCase());
}

