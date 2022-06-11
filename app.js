// cache DOM

// Обнуление параметров
let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score')
const compureScore_span = document.getElementById('computer-score')
// const Scoreboard_div = document.querySelector('user-score')
const result_div = document.querySelector('.result > p')
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const actionMessage_div = document.getElementById('action-message');



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `Вы выйграли !`
    // classList - это метод, который добовляет или удаляет class (классы) элементов.
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 250)
}


function lose(userChoice, computerChoice) {
    computerScore++;
    compureScore_span.innerHTML = computerScore;
    result_div.innerHTML = `Вы проиграли! `
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 250)
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = `${userChoice}  равен  ${computerChoice} Ничья ! `
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `Ничья ! `
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 250)
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    // console.log('User choice => ' + userChoice);
    // console.log('Computer choice => ' + computerChoice);
    switch(userChoice + computerChoice) {

        case 'rockpaper':
            case 'paperscissors':
                case 'scissorsrock':
       win(userChoice, computerChoice);
        break;

        case 'paperrock':
            case 'scissorspaper':
                case 'rockscissors':
        lose(userChoice, computerChoice);
        break;

        case 'paperpaper':
            case 'scissorsscissors':
                case 'rockrock':
        draw(userChoice, computerChoice);
        break;
    }
}

function main() {

    rock_div.addEventListener('click', () => {
        game('rock');
     });
     
     paper_div.addEventListener('click', () => {
         game('paper');
     });
     
     scissors_div.addEventListener('click', () => {
         game('scissors');

     });
}

main();
