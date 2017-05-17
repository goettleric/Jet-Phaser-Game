var helpMenu = document.getElementById("help");

helpMenu.addEventListener("click", function() {
    var helpPopup = document.getElementById("directions");
    helpPopup.style.display = "block";
    helpPopup.addEventListener("mouseover", function() {
        document.getElementById("directions").style.display = "none";
    });
});

var scoreMenu = document.getElementById("highScores");

scoreMenu.addEventListener("click", function() {
    var scoresPopup = document.getElementById("score");
    scoresPopup.style.display = "block";
    scoresPopup.addEventListener("mouseover", function() {
        document.getElementById("score").style.display = "none";
    });
});