let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

const generateCompChoice = () => {
    const options = ["Rock" , "Paper" , "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Draw.. Play Again.."
    msg.style.backgroundColor = "#111344";
}
const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        user.innerText = userScore;
        msg.innerText = `YOU WON..! ${userChoice} beats ${computerChoice} `
        msg.style.backgroundColor = "#52154e";
    }else {
        computerScore++;
        comp.innerText = computerScore;
        msg.innerText = `YOU LOST..! ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "#f9cff2";
    }
}

const playgame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const computerChoice = generateCompChoice();
    console.log("computer choice = ", computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = computerChoice === "Paper" ? false : true;
        } else if(userChoice === "Paper"){
            userWin = computerChoice === "Scissors" ? false : true;
        }else{
            userWin = computerChoice === "Rock" ? false : true;
        }
        showWinner(userWin , userChoice , computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice =  choice.getAttribute("id");
        playgame(userChoice);
    });
});

