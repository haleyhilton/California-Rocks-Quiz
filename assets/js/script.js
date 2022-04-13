//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#start").addEventListener("click", startGame);

const container = document.querySelector(".container");
const startContainer = document.querySelector(".startContainer");
//const questionContainer = document.getElementById("questionContainer");
const header = document.querySelector(".header")
const start = document.getElementById("start");
const startBtn = document.querySelector(".startBtn")
const quiz = document.getElementById("quiz");
//const answerBtn = document.getElementById("answerBtn")
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const results = document.getElementById("results");
const highScore = document.getElementById("highScore");
//const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
const highScoreContainer = document.querySelector(".highScoreContainer");
var wins = localStorage.getItem("wins");
var losses = localStorage.getItem("losses");
//save most recent highschool 
var questionContainer = document.querySelector(".questionContainer");
var answerBtnArray = document.querySelectorAll(".answerBtn")
var answerContainer = document.querySelector(".answerContainer");




//Start button should begin the game
function startGame() {
        console.log("it worked")

    questionContainer.classList.remove("hide");
    startContainer.classList.add("hide")
    timer();
    appendQuestionAnswer()
}


//countdown timer
var timeContainer = document.querySelector("#counter")

var timeLeft = 60;

function timer() {
    var timeInterval = setInterval(
        function () {
        timeLeft--;
        timeContainer.textContent = timeLeft;
        
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}


// delete questionContainer['hide'];
//   displayQuestionAnswer();
//}

var questionNum = 0


var questionAnswerList = [
    {
        question: 'What subject is hardest?',
        answers: [
            { text: "this one", correct: true },
            { text: "the other one", correct: false },
            { text: "the next one", correct: false },
            { text: "all of them", correct: false  },
        ]
    },
    {
        question: 'Question 2?',
        answers: [
            { text: "this one", correct: true },
            { text: "the other one", correct: false },
            { text: "the next one", correct: false },
            { text: "all of them", correct: false  },
        ]
    },
    {
        question: 'Question 3?',
        answers: [
            { text: "this one", correct: true },
            { text: "the other one", correct: false },
            { text: "the next one", correct: false },
            { text: "all of them", correct: false  },
        ]
    }
]

function appendQuestionAnswer() {
    var questionAnswer = questionAnswerList[questionNum];
    var question = questionAnswer.question
    var answers = questionAnswer.answers
    questionEl.textContent = question
//anonymous function (also can grab i)
    answers.forEach(function(answer, i) {
        answerBtnArray[i].textContent = answer.text
        answerBtnArray[i].dataset.correct = answer.correct
        answerBtnArray[i].addEventListener("click", function(event){
            var isCorrect = event.target.dataset.correct
            console.log(isCorrect)
            //if statement to check if they got it right or not
            questionNum++ //questionNum is equal to questionNum plus one
            //stop it if =<3
            appendQuestionAnswer()
        })
    }) 
}

//multiple choice questions
// keep track of user's answers
//on click show results
// if answer is correct
// add to number of correct answers
// display Correct!
// if answer is wrong
// subtract from number of correct answers
// 


//high score storage
//Start button should begin the game
//startBtn.addEventListener("click", startGame);
