var guess = 0;

var player_name = localStorage.getItem("player_name");
// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses

// function for number guessed by user    
function playAgain()
{
    window.location ="gamepage.html";
}
function submit()
{
    var x = document.getElementById("guessField").value;
    // made for correct Guess
    if (x == y)
    {
        guess++;

        if (guess == 1)
        {
            alert("Congratulations "+player_name+" you guessed it right first try!!");
            guess=0;
        }
        else{
        alert("Congratulations "+player_name+" you guessed it right in "+guess+" guesses!!");
        guess=0;
    }
    }
        else if (x > y)
    {
        guess++;
        alert("Whoops! Your number is too big.");
    }
    else
    {
        guess++;
        alert("Whoops! Your number is too small.")
    }
}   
// function for number guessed by user    
