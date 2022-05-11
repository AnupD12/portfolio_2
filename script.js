let picks = ["rock", "paper", "scissors", "lizard", "spock"];
let winningPicks = ["rockscissors", "rockspock", "paperrock", "paperspock", "scissorspaper", "scissorslizard", "lizardspock", "lizardpaper", "spockrock", "spockscissors"];
let drawPicks = ["rockrock", "scissorsscissors", "paperpaper", "lizardlizard", "spockspock"];
let emojiPicks = ["👊", "✋", "✌", "🦎", "🖖"];
const userPicks = document.querySelectorAll('button');
let userChoice;
let combinedChoices;
let randomComputerChoice;
let currentUserScore = 0;
let currentComputerScore = 0;

userPicks.forEach(userPick => userPick.addEventListener('click', (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    computerChoice();
    compareChoice();
    runGame();
    userEmojiDisplay();
    computerEmojiDisplay();
    console.log(currentUserScore, currentComputerScore);
}));

function computerChoice () {
    randomComputerChoice = Math.floor(Math.random() * picks.length);
    console.log(picks[randomComputerChoice]);
}

function compareChoice () {
    combinedChoices = userChoice + picks[randomComputerChoice];
    console.log(combinedChoices);
}

function runGame(){
    if(winningPicks.includes(combinedChoices)){
        console.log('You Win');
        document.getElementById('lastScoreResult').textContent = "You Win 🏆";
        document.body.style.backgroundColor = "#90EE90";
        userScore();
    } else if(drawPicks.includes(combinedChoices)){
        console.log('You Draw');
        document.getElementById('lastScoreResult').textContent = "It's a Draw";
        document.body.style.backgroundColor = "#FFFA54";
    } else{
        console.log('You Lose');
        document.getElementById('lastScoreResult').textContent = "You Lose 😢";
        document.body.style.backgroundColor = "#ffcccb";
        computerScore();
    }
}

function userScore() {
    currentUserScore = currentUserScore + 1;
    userScoreDisplay();
    // console.log(currentUserScore)
}

function computerScore() {
    currentComputerScore = currentComputerScore + 1;
    computerScoreDisplay();
    // console.log(currentComputerScore)
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

