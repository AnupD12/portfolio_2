let picks = ["rock", "paper", "scissors", "lizard", "spock"];
let winningPicks = ["rockscissors", "rocklizard", "paperrock", "paperspock", "scissorspaper", "scissorslizard", "lizardspock", "lizardpaper", "spockrock", "spockscissors"];
let drawPicks = ["rockrock", "scissorsscissors", "paperpaper", "lizardlizard", "spockspock"];
let emojiPicks = ["👊", "✋", "✌", "🦎", "🖖"];
const userPicks = document.querySelectorAll('button.btn');
let userChoice;
let combinedChoices;
let randomComputerChoice;
let currentUserScore = 0;
let currentComputerScore = 0;


userPicks.forEach(userPick => userPick.addEventListener('click', (e) => {
    userChoice = e.target.id;
    computerChoice();
    compareChoice();
    runGame();
    userEmojiDisplay();
    computerEmojiDisplay();
}));

function computerChoice () {
    randomComputerChoice = Math.floor(Math.random() * picks.length);
}

function compareChoice () {
    combinedChoices = userChoice + picks[randomComputerChoice];
}

function runGame(){
    if(winningPicks.includes(combinedChoices)){
        document.getElementById('lastScoreResult').textContent = "You Win 🏆";
        document.body.style.backgroundColor = "#90EE90";
        userScore();
    } else if(drawPicks.includes(combinedChoices)){
        document.getElementById('lastScoreResult').textContent = "It's a Draw";
        document.body.style.backgroundColor = "#FFFA54";
    } else if (winningPicks.includes(combinedChoices) === false) {
        document.getElementById('lastScoreResult').textContent = "You Lose 😢";
        document.body.style.backgroundColor = "#ffcccb";
        computerScore();
    }
}

function userScore() {
    currentUserScore = currentUserScore + 1;
    userScoreDisplay();
}

function computerScore() {
    currentComputerScore = currentComputerScore + 1;
    computerScoreDisplay();
}

function userScoreDisplay() {
    document.getElementById('userScore').textContent = currentUserScore;
}

function computerScoreDisplay() {
    document.getElementById('computerScore').textContent = currentComputerScore;
}

function userEmojiDisplay(){
    if(userChoice === "rock"){
        document.getElementById('userEmoji').textContent = emojiPicks[0];
    } else if(userChoice === "paper") {
        document.getElementById('userEmoji').textContent = emojiPicks[1];
    } else if(userChoice === "scissors") {
        document.getElementById('userEmoji').textContent = emojiPicks[2];
    } else if(userChoice === "lizard") {
        document.getElementById('userEmoji').textContent = emojiPicks[3];
    } else if (userChoice === "spock") {
        document.getElementById('userEmoji').textContent = emojiPicks[4];
    }
}

function computerEmojiDisplay(){
    if(picks[randomComputerChoice] === "rock"){
        document.getElementById('computerEmoji').textContent = emojiPicks[0];
    } else if(picks[randomComputerChoice] === "paper") {
        document.getElementById('computerEmoji').textContent = emojiPicks[1];
    } else if(picks[randomComputerChoice] === "scissors") {
        document.getElementById('computerEmoji').textContent = emojiPicks[2];
    } else if(picks[randomComputerChoice] === "lizard") {
        document.getElementById('computerEmoji').textContent = emojiPicks[3];
    } else if (picks[randomComputerChoice] === "spock") {
        document.getElementById('computerEmoji').textContent = emojiPicks[4];
    }
}

function refreshPage() {
    window.location.reload();
}

