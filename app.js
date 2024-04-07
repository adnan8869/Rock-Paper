let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices =document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click" ,()=>{
      const userChoice =choice.getAttribute("id");
    //   console.log("Choice was clicked " , userChoice); 
      playGame(userChoice);
    })
})

const drawGame = ()=>{
    msg.innerText = "Game is draw. Play it Again!";
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

   
    if(userChoice === compChoice){
        // Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors , paper
           userWin =  compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock , scissors
            userWin =  compChoice === "scissors" ? false : true;
        }else{
            // rock , paper
            userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randTdx = Math.floor(Math.random()*3); //math.random() genarates number btw 0 to 1.
    return options[randTdx];

}