//wait for DOM to finish loading before loading the game//
//get button elements add event listeners to them//
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    
    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You Clicked Submit!');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You Clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame() {
    let num1 = math.floor(math.random() * 25) + 1;
    let num2 = math.floor(math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}