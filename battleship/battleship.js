// declaring variable
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess
var hits = 0;
var guesses = 0;

var isSunk = false;

// Game logic

while (isSunk == false){
    guess = prompt("Ready!. Aimi. Fire! (enter numbe)");
    if (guess < 0 || guess > 6){
        alert("lease enter a valid cell number");
    }else {
        guesses = guesses + 1;
        alert("hits")
        if(guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            if(hits == 3){
                inSunk = true;
                alert ("You sank my battleship!")
                
            }
        }
        else alert("Miss!");
    }
}

var stats = "You sank my battleship at: " + guesses + "guesses" + "and your accuracy is:" + (3/guesses);

alert(stats);
