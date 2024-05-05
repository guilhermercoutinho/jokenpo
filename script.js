const result = document.querySelector("#result");

let pointsHuman = 0
let pointsMachine = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const humanPlay = (humanChoice) => {
    playTheGame(humanChoice, machinePlay());
};

const machinePlay = (machineChoice) => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];

    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
};

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.src = "./assets/empate.png";
    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.PAPER)
    ) {
        pointsMachine ++
        document.querySelector('#machine-score span').innerHTML = pointsMachine
        result.src = "./assets/perdeu.png";
    } else {
        pointsHuman ++
        document.querySelector('#human-score span').innerHTML = pointsHuman
        result.src = "./assets/ganhou.png";
    }
};
