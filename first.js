/*
this function takes var currTime and countingDown variables, setting a 1 second interval between repeating this code, it checks the currTime, compares it, in this case it should fire else 5 times
then fire else if 5 more times with the new message for the admiral, until currTime hits 0 then fires the if statement for blast off, stops the interval counting, stops function

*/

function countdownTimer(){
    
    var currTime = 10;
    var countingDown = setInterval(function(){

        if(currTime <= 0){
            clearInterval(countingDown);
            document.getElementById("countdownTimer").innerHTML = "Blast Off!!";        // countdownTimer is in first.html, its the display section for this coding
      } else if (currTime <=5) {
            document.getElementById("countdownTimer").innerHTML = "Warning!! Less than halfway to launch. Time left: " + currTime + " seconds remaining";
      }
        else{
            document.getElementById("countdownTimer").innerHTML = currTime;
            }
        currTime -= 1;
    }, 1000);
}