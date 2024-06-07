//"Tic Tac Toe Game"

// Select all the necessary DOM elements
let boxses = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");

let msg_Containor = document.querySelector(".msg_cantainor");
let msg = document.querySelector("#msg");
let newGamebtn = document.querySelector("#new_game_btn");

let turnO = true; // Track whose turn it is

// Winning patterns for Tic Tac Toe
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [0,4,8]
];

// Add click event listeners to each box
boxses.forEach((box) => {

    box.addEventListener("click", () => {

        // console.log("box was clicked")
        if(turnO === true){
            box.innerText = "O";
            box.classList.add("O");
            turnO = false;
        }else{
            box.innerText = "X";
            box.classList.remove("O");
            turnO = true;
        }
        box.disabled = true; // Disable the clicked box

        checkwinners ();
    });
});

// Disable all boxes
const disabledBox = () => {
    for (let box of boxses){
        box.disabled = true;
    }
}

// Reset the game
const resetGame = () => {
    turnO = true;
    enabledBox();
    msg_Containor.classList.add("hide");
}

// Enable all boxes and reset text
const enabledBox = () => {
    for (let box of boxses){
        box.disabled = false;
        box.innerText = "";
    }
}

// Check for winners
const checkwinners = () => {
    for(let patterns of winpatterns){
            let pos1val = boxses[patterns[0]].innerText;
            let pos2val = boxses[patterns[1]].innerText; 
            let pos3val = boxses[patterns[2]].innerText

            if(pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val === pos2val && pos2val === pos3val){
                    // console.log("winner", pos1val)
                    showWinner (pos1val);
                    return true;
            }
           
        }
    }
};

// Show the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`
    msg_Containor.classList.remove("hide");
    disabledBox();
}

// Add event listeners to the reset buttons
newGamebtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);