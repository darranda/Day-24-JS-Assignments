// Define a hands array with the values 'rock', 'paper', and 'scissors'

let hands = ['rock', 'paper', 'scissors'];

//Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3

function getHand() {
return hand (parseInt(Math.random()*10)%3)
}

//Define two objects for two players. Each player has name and getHand() properties.

let onePlayer = {
    name: 'Sarah',
    getHand 
}
let twoPlayer = {
    name: 'Reese',
    getHand 
}
console.log(onePlayer.name)

//Define a function called playRound() that //Takes two player objects as arguments
function playRound (a,b)

//Gets hands from each
onePlayer.getHand();
twoPlayer.getHand();

//Determines the winner
//Logs the hands played and name of the winner.
//If its a tie, log the hands played and "it's a tie".
//Returns the winner object (null if no winner)
let winner = null
if (onePlayerHand = twoPlayerHand)  {
    console.log (`playersHand: ${Sarah} played ${onePlayerHand} and ${Reese} played ${twoPlayerHand}. Its a tie!`);
}
else if ((onePlayerHand == 'scissors'&& twoPlayerHand == 'paper') ||
    (onePlayerHand == 'rock' && twoPlayerHand == 'scissors') || 
    (onePlayerHand == 'paper' && twoPlayerHand == 'rock'))
{
    winner = onePlayer;
    console.log ()
} 
else {
    ((twoPlayerHand == 'rock' && onePlayerHand == 'scissors') ||
    (twoPlayerHand == 'scissors' && onePlayerHand == 'paper') ||
    (twoPlayerHand == 'paper' && onePlayerHand == 'rock')) 
}
{
    winner = twoPlayer;
    console.log ()

}
  playRound (onePlayer, twoPlayer)
  