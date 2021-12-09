//  Make the start button work
// Iteration 1: Declaring a variable and assigning a value to it
const $startButton = document.getElementById("start");

// Iteration 2: Declaring an onclick function and assigning a value to a location.href property
 $startButton.onclick = () => {
     location.href = "./game.html";
 };