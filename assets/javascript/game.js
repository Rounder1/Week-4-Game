
$(document).ready(function(){

    var playerWins = 0;
    var playerLosses = 0;    
    var goalNumber = Math.floor(Math.random() * (120 - 18 +1)) + 18;
    var currentNumber = 0;
    var crystalRed = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var crystalBlue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var crystalYellow = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var crystalGreen = Math.floor(Math.random() * (12 - 1 + 1)) + 1;


    $("#player_wins").text("Wins: " + playerWins);
    $("#player_losses").text("Losses: " + playerLosses);
    $("#goal_number").text("Goal Number: " + goalNumber);
    $("#current_number").text("Current Score: " + currentNumber);

    function newGame () {
        goalNumber = Math.floor(Math.random() * (120 - 18 +1)) + 18;
        currentNumber = 0;
        crystalRed = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystalBlue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystalYellow = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystalGreen = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

        $("#player_wins").text("Wins: " + playerWins);
        $("#player_losses").text("Losses: " + playerLosses);
        $("#goal_number").text("Goal Number: " + goalNumber);
        $("#current_number").text("Current Score: " + currentNumber);
    }


    $(".crystal_button").click(function(){
        var crystalClicked = event.target.id; // grabs the ID of the element that triggered the event 

        $(".win_loss_alert").text("");
            
        if (crystalClicked === "red_crystal") {
            currentNumber += crystalRed;
        } else if (crystalClicked === "blue_crystal") {
            currentNumber += crystalBlue;
        } else if (crystalClicked === "yellow_crystal") {
            currentNumber += crystalYellow;
        } else if (crystalClicked === "green_crystal") {
            currentNumber += crystalGreen;
        }

        $("#current_number").text(currentNumber);

        if (currentNumber === goalNumber) {
            $(".win_loss_alert").text("You Win!");
            playerWins++;
            newGame();
        } else if (currentNumber > goalNumber) {
            $(".win_loss_alert").text("You Loss");
            playerLosses++;
            newGame();
        }
    });
 });