
var currentQuestion = 0;
var time = questions.length * 15;
var timer;

var startButton = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");

// Function for Kicking off the quiz

function startQuiz() {
    var homeScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    getCurrentQuestion();
}

function getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleElement = document.querySelector("#question-title");
    titleElement.textContent = currentQuestion.title;

    questionChoices.textContent = "";
}