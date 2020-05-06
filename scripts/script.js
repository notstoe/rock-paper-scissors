
let score = [0, 0]; 
let choiceAI;

function capitalize(str) {                                  //returns string first letter capitalized

    if (isNaN(str) == true){ 
     let lower = (str.toLowerCase()).slice(1);
     let upper = (str.toUpperCase()).slice(0,1);
         return upper+lower;
    }
}

function getRandomInt() {  return Math.floor(Math.random()*3);  } //returns a random integer in [0,2]

function computerPlay(){                                          //returns a string with computer selection

    let choiceAI = ["paper", "rock", "scissors"];
    return choiceAI[getRandomInt()];
}

function playRound(playerSelection, computerSelection) {          //plays a round of the game

    let resultRound;

    switch (playerSelection) {

        case "paper": 
            if (computerSelection === "paper") {
                resultRound = "tie";

            } else if (computerSelection === "rock") {
                resultRound = "won";

            } else {
                resultRound = "lost";

            }
        break;

        case "rock":
            if (computerSelection === "rock") {
                    resultRound = "tie";

                } else if (computerSelection === "scissors") {
                    resultRound = "won";

                } else {
                    resultRound = "lost";

                }
        break;

        case "scissors":
            if (computerSelection === "scissors") {
                    resultRound = "tie";

                } else if (computerSelection === "paper") {
                    resultRound = "won";

                } else {
                    resultRound = "lost";

                }
        break;
    }
    return resultRound;

}

function game(playerSelection){                                                                                       

    let roundResult;                    
    
    const containerResults = document.querySelector('.containerResults');
    
    const resultsLastRound = document.querySelector('#resultsLastRound');

        if (resultsLastRound) {                                                     //removing previous round results
            containerResults.removeChild(resultsLastRound);
        } 

    choiceAI = computerPlay();
    roundResult = playRound(playerSelection, choiceAI);

    const roundDisplay = document.createElement('h1');
    roundDisplay.style.marginBottom = '24px';
    roundDisplay.setAttribute('id', 'resultsLastRound');


        if (roundResult === "won") {

            score[0]++;
            roundDisplay.textContent = capitalize(playerSelection) + ` vs ` + capitalize(choiceAI) + `! You won this round!`;
            containerResults.appendChild(roundDisplay);

        } else if (roundResult === "lost") {

            score[1]++;
            roundDisplay.textContent = capitalize(playerSelection) + ` vs ` + capitalize(choiceAI) + `! You lost this round!`;
            containerResults.appendChild(roundDisplay);

        } else {

            roundDisplay.textContent = capitalize(playerSelection) + ` vs ` + capitalize(choiceAI) + `! It\'s a tie on this round!`;
            containerResults.appendChild(roundDisplay);
        }

    const scorePlayer = document.querySelector('#scorePlayer');
    scorePlayer.textContent = `${score[0]}`;

    const scoreAI = document.querySelector('#scoreAI');
    scoreAI.textContent = `${score[1]}`;

    const resultsOld = document.querySelector('#resultsOld');

        if (resultsOld) {  
            containerResults.removeChild(resultsOld);
        } 

        if (score[0] == 5 || score[1] == 5) {

            const results = document.createElement('h1');
            results.style.marginBottom = '100px';
            results.setAttribute('id', 'resultsOld');
            
            if (score[0] > score [1]) {

                results.textContent = `Congratulations! You won the game!`;
                containerResults.appendChild(results);

            } else if (score[0] < score [1]){
                            
                results.textContent = `The AI got you this time! You lost the game! Rematch?`;
                containerResults.appendChild(results);
            }

            score = [0, 0];                                            //resets the score            
        }
}

const buttons = document.querySelectorAll('button'); 

buttons.forEach((button) => {button.addEventListener('click', getInnerText); });

function getInnerText(e) {
     
   game(e.target.alt);
}

