var location1 =3;
var location2 =4;
var location3 =5;


var guess;


var hits = 0;
var guesses =0;

var isSunk = false;


while(!isSunk)
{
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");

  if(guess <0 || guess > 6)
  {
    alert("Please enter a valid number")
  }
  else
  {
    guesses = guesses + 1;
    if(guess==location1 || guess==location2 || guess==location3 )
    {
      hits=hits+1;
      alert("HIT!")
    }

    if(hits==3)
    {
      alert("You sank the battleship!");
      var stats= "You took " + guesses + " guesses to sink the battleship, " +"which means your shooting accuracy was " + (300/guesses)+ "% ";
      alert(stats);
      isSunk=True;
    }
  }
}
