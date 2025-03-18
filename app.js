let userScore = 0;
let compScore = 0;
let user = document.querySelector('#user-score');
let comp = document.querySelector('#comp-score');

const choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const choiceId = choice.getAttribute('id');
        playGame(choiceId);
    });
});

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

let msg = document.querySelector('#msg');
let showWinner = (userWin, choiceId, compChoice) => {
    if(userWin){
        msg.innerText = `You won! Your ${choiceId} beats computer's ${compChoice}`;
        user.innerText = ++userScore;
    }
    else{
        msg.innerText = `You lost! Computer's ${compChoice} beats your ${choiceId}`;
        comp.innerText = ++compScore;
    }
}
let userWin = true;
let playGame = (choiceId) => {
    const compChoice = genCompChoice();

    if(choiceId === compChoice) msg.innerText = `Game is drawn! Both chose ${choiceId}`;
    else{
        if(choiceId === 'rock'){
            userWin = compChoice === 'paper' ? false : true; 
        }
        else if(choiceId === 'paper'){
            userWin = compChoice === 'scissors' ? false : true;
        }
        else{
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, choiceId, compChoice);
    }
}