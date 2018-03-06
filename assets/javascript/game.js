
$(document).ready(function(){

    var playerWins = 0;
    var playerLosses = 0;    
    var goalNumber = 30;
    var currentNumber = 0;
    var crystalRed = 1;
    var crystalBlue = 5;
    var crystalYellow = 10;
    var crystalGreen = 22;


    $("#player_wins").text(playerWins);
    $("#player_losses").text(playerLosses);
    $("#goal_number").text(goalNumber);
    $("#current_number").text(currentNumber);

    function newGame () {
        goalNumber = 50;
        currentNumber = 0;
        crystalRed = 7;
        crystalBlue = 3;
        crystalYellow = 35;
        crystalGreen = 1;

        $("#player_wins").text(playerWins);
        $("#player_losses").text(playerLosses);
        $("#goal_number").text(goalNumber);
        $("#current_number").text(currentNumber);
    }


    $(".crystal_button").click(function(){
        var crystalClicked = event.target.id; // grabs the ID of the element that triggered the event 

        $("#win_loss_alert").text("");
            
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
            $("#win_loss_alert").text("You Win!");
            playerWins++;
            newGame();
        } else if (currentNumber > goalNumber) {
            $("#win_loss_alert").text("You Loss");
            playerLosses++;
            newGame();
        }
    });
 });