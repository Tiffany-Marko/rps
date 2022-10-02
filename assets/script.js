alert("Hello!");
//main greeting to start
//var options = ["R", "P", "S"];
// var play = confirm("Do you want to play Rock Paper Scissors?")

// console.log(play);// test


// function rps()  {
//     var playerChoice = prompt("Choose R, P, or S.");
//     console.log(playerChoice); //make sure to add var (playerChoice)
//     var randomInt = Math.floor(Math.random()*3)
//     var computerChoice = options[randomInt] //makes computer choice
//     console.log(computerChoice);
// }
// //include parenthesis even without a parameter
// if (play==true) {
//     rps() 
// }
// //now we need to compare the two

// function compare(playerChoice, computerChoice) {
//     if (playerChoice==)

// }

//start game
//prompt for user choice
//generate random computer choice
//call compare
//ask to play again
var wins = 0;
var losses = 0;
var ties = 0;
var options = ['r', 'p', 's'];
function startGame() {
    var userChoice = prompt("choose r, p, or s");
    var randomInt = Math.floor(Math.random() * options.length);//computer choosing int .length is an array property
    //array name.length Math.floor converts the decimal (rounds down).
    var computerChoice = options[randomInt];//this is pulling an array name to index (options/bracket/index)
    alert("your choice was "+ userChoice + ", computer choice was " + computerChoice);
    determineWinner(userChoice, computerChoice);
}
function determineWinner(userChoice, computerChoice){//parameters) 
    if (userChoice == computerChoice) {
        ties = ties +1;
        alert("game ended in tie");
    } else{
        if (userChoice == "r"){
            if (computerChoice == "p") {
                losses = losses +1; 
                alert("computer wins");
            } else if(computerChoice == "s"){
                wins = wins +1;    
                alert("you win");
            }
        } else if(userChoice == "p") {
            if (computerChoice == "s") {
                losses = losses +1; 
                alert("computer wins");
            } else if(computerChoice == "r"){
                wins = wins +1;    
                alert("you win");
            }
        } else if(userChoice =="s") {
            if (computerChoice == "r") {
                losses = losses +1; 
                alert("computer wins");
            } else if(computerChoice == "p"){
                wins = wins +1;    
                alert("you win");
            }
        }
    }
    playAgain();
}

function playAgain(){
    var replayChoice = confirm("do you want to play again?");
    if (replayChoice == true) {
        startGame();     
    }
}
startGame();