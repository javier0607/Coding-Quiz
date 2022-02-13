
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timer;

var startButton = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");

// Function for Kicking off the quiz

function startQuiz() {
    var homeScreen = document.querySelector("#start-screen");
    homeScreen.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    getCurrentQuestion();
}

function getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleElement = document.querySelector("#questions");
    titleElement.textContent = currentQuestion.title;

    questionChoices.textContent = "";

    for (var i = 0; i < currentQuestion.choice.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", currentQuestion.choice[i]);

        choiceButton.textContent = i + 1 + "." + currentQuestion.choice[i];

        questionChoices.appendChild(choiceButton);
    }
}


startButton.addEventListener("click", startQuiz);