// Define a hands array with the values 'rock', 'paper', and 'scissors'

let hands = ['rock', 'paper', 'scissors'];

//Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3

function getHand() {
return (parseInt(Math.random()*10)%3)
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


/*Define a function called playRound() that Takes two player objects as arguments
 Gets hands from each
 Determines the winner
Logs the hands played and name of the winner.
If its a tie, log the hands played and "it's a tie".
Returns the winner object (null if no winner) */

function playRound (a,b) {
    let sarahHand = onePlayer.getHand();
    let reeseHand = twoPlayer.getHand();

    if (sarahHand == reeseHand)  {
       // console.log (onePlayer.name, 'hand played', sarahHand, 'while', twoPlayer.name, 'hand played', reeseHand,'.', 'Its a tie!');
    }
    else if
        ((sarahHand == 'scissors'&& reeseHand == 'paper') ||
        (sarahHand == 'rock' && reeseHand == 'scissors') || 
        (sarahHand == 'paper' && reeseHand == 'rock'))
    {
        winner = onePlayer;
        //console.log (onePlayer.name,'hand played', sarahHand,'.', twoPlayer.name, 'hand played', reeseHand,'.', 'Sarah is the winner!');
    } 
    else
    
        ((reeseHand == 'rock' && sarahHand == 'scissors') ||
        (reeseHand == 'scissors' && sarahHand == 'paper') ||
        (reeseHand == 'paper' && sarahHand == 'rock')); 
   { 
        winner = twoPlayer;
        //console.log (twoPlayer.name, 'hand played', reeseHand,'.', onePlayer.name, 'hand played', sarahHand, '.', 'Reese is the winner!');
    }
}

    let winner = null
    
    playRound (onePlayer, twoPlayer)

    