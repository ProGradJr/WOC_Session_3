// Declaring variables

const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

// Iteration 3: Generating a random integer using inbuilt Math objects  
 var guessNumber = Math.round(Math.random() * 100);

var message;
var lives = 10;

//Make the submit button to function

$submitButton.onclick = () => {
    // Iteration 4: Printing the value of guessNumber in browser console
         console.log(guessNumber);

    // Iteration 5: Declaring a variable and storing the user input value in it
        let userInput = document.getElementById("number-input").value;

    // Iteration 6: Decrementing the value of lives by 1
       lives--;

    // Iteration 7:Using the Condtional statements and comparison operators perform actions based on the input value 
         if (userInput == guessNumber) {
           location.href = "./win.html";
         } else if (lives == 0) {
           location.href = "./lose.html";
         } else if (userInput > guessNumber) {
           message = `Oops 😶! Your guess is too high. You have ${lives} lives remaining.`;
        } else if (userInput < guessNumber) {
          message = `Oops 😶! Your guess is too low. You have ${lives} lives remaining.`;
        }

    // Iteration 8: Manipulating the css properties of the element using JS
         $message.style.display = "inherit";

    // Iteration 9:Manipulating the HTML document using JS
        $message.innerHTML = message;
        $lives.innerHTML = lives;
};