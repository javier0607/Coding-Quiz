const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add("hide")
    currentQuestionIndex = 0
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {   
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    }else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")

    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "Who is the main character of Attack on Titan?",
        answer: [
            { text: "Mikasa Ackerman", correct: false},
            { text: "Armin Arlet", correct: false},
            { text: "Erin Yeager", correct: true},
            { text: "Levi Ackerman", correct: false},
        ]
    },
    {
        question: "Which is not one of the names of the walls in Attack on Titan?",
        answer: [
            { text: "Maria", correct: false},
            { text: "Rose", correct: false},
            { text: "Mary", correct: true},
            { text: "Sina", correct: false},
        ]
    },
    {
        question: "Which is Erin's Titan power?",
        answer: [
            { text: "Founder Titan", correct: true},
            { text: "Armor Titan", correct: false},
            { text: "Beast Titan", correct: false},
            { text: "Jaw Titan", correct: false},
        ]
    },
    {
        question: "Where does a Titan need to be cut in order to die?",
        answer: [
            { text: "Heart", correct: false},
            { text: "Nape", correct: true},
            { text: "Feet", correct: false},
            { text: "Torso", correct: false},
        ]
    },
    {
        question: "Which is not one of the three branches?",
        answer: [
            { text: "Survey Corps", correct: false},
            { text: "Garrison", correct: false},
            { text: "Military Police", correct: false},
            { text: "Royal Guards", correct: true},
        ]
    }
    
]