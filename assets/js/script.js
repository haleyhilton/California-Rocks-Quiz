//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#start").addEventListener("click", startGame);

const container = document.querySelector(".container");
const startContainer = document.querySelector(".startContainer");
const header = document.querySelector(".header")
const start = document.getElementById("start");
const startBtn = document.querySelector(".startBtn")
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const results = document.getElementById("results");
const highScore = document.getElementById("highScore");
const counter = document.getElementById("counter");
const highScoreContainer = document.querySelector(".highScoreContainer");
var highScoreList = document.getElementById("highScoreList")
var tryAgain =document.querySelector(".tryAgain")
var clearScore =document.querySelector(".clearScore")
var wins = localStorage.getItem("wins");
var losses = localStorage.getItem("losses");
//save most recent highsccore
var questionContainer = document.querySelector(".questionContainer");
var answerBtnArray = document.querySelectorAll(".answerBtn")
var answerContainer = document.querySelector(".answerContainer");
var finalScore = document.querySelector(".finalScore")
var finalTime = document.querySelector(".finalTimeScore")







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

var timeLeft = 20;

function timer() {
    var timeInterval = setInterval(
        function () {
        timeLeft--;
        timeContainer.textContent = timeLeft;
        
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            let tryAgain = confirm("Outta time! Get outta California, you kook")
            //trying again resets the question index to zero to start question at the beginning
           if (tryAgain) {
               counter.textContent = "20";
               questionNum = 0;
               timeLeft = 20;
               startGame();
            }
        }

    }, 1000);
}


// delete questionContainer['hide'];
//   displayQuestionAnswer();
//}

var questionNum = 0


var questionAnswerList = [
    {
        question: 'The California state bird is the _____:',
        answers: [
            { text: "seagull", correct: false },
            { text: "really big seagull", correct: false },
            { text: "quail", correct: true },
            { text: "pelican", correct: false  },
        ]
    },
    {
        question: 'California is home to the World Famous _____',
        answers: [
            { text: "sticky waffles", correct: false },
            { text: "Zoo", correct: true },
            { text: "dry land penguins", correct: false },
            { text: "Diamond National Park", correct: false  },
        ]
    },
    {
        question: 'What is the current population of California?',
        answers: [
            { text: "39.5 million", correct: true },
            { text: "10 million", correct: false },
            { text: "300 million", correct: false },
            { text: "20.5 million", correct: false  },
        ]
    }
]

function appendQuestionAnswer() {
    var questionAnswer = questionAnswerList[questionNum];
    console.log(questionNum)
    var question = questionAnswer.question
    //console.log(question)
    var answers = questionAnswer.answers
    questionEl.textContent = question
//anonymous function (also can grab i)
    answers.forEach(function(answer, i) {
        answerBtnArray[i].textContent = answer.text
        answerBtnArray[i].dataset.correct = answer.correct
        answerBtnArray[i].addEventListener("click", function(event){
            var isCorrect = event.target.dataset.correct
            console.log(isCorrect)
            if (answer.correct === true) {
                console.log("TRUE!")
            }else{
                console.log("FALSE!")
            }
            
            //if statement to check if they got it right or not
            questionNum++ //questionNum is equal to questionNum plus one
            //stop it if =<3
            if(questionNum < questionAnswerList.length) {
                appendQuestionAnswer()      
            } else {
                //what to do once you go through that length
            }
       
        })
        console.log("Inside for each")
    }) 
}


//startBtn.addEventListener("click", startGame);
