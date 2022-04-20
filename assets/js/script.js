var timer = document.querySelector(".timer")
var start = document.querySelector("#startButton")
var questionContainer = document.querySelector("#questionContainer")
var questionCardHead = document.querySelector(".questionClass")
var answerGroup = document.querySelector(".answer-buttons")
var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
var btn4 = document.querySelector("#btn4")
var target = btn1, btn2, btn3, btn4
var submit = document.querySelector(".submit")
var yesNo = document.body.querySelector('.yes-or-no')
var nameInput = document.querySelector(".name-input")
var scoresList = document.querySelector('.scoresList')
var replay = document.body.querySelector(".replay")
var list = document.createElement("div");
var scoreContainer = document.querySelector(".scoreContainer")
var welcome = document.querySelector('.Welcome')
var finalScore = document.querySelector(".score")
var box = document.querySelector('.counter')
var initials = JSON.parse(localStorage.getItem('.score')) || []
var scoreData = localStorage.getItem('.score')
var currentQIndex = 0;
var timeLeft = 60;
var score = timeLeft
var tryAgain =document.querySelector(".tryAgain")

 

start.addEventListener("click", startGame);

var timeInterval;
function time() {

    timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;


        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            let tryAgain = confirm("Outta time! Get outta California, you kook")
        if (tryAgain) {
            timer.textContent = "60"
            timeLeft = 60;
            currentQIndex = 0;
            startGame()
        }
        }

        if (currentQIndex > questionAndAnswer.length - 1) {
            clearInterval(timeInterval)
        }
    }, 1000);
}

function startGame() {
    time();
    questionContainer.classList.remove('hide');
    welcome.style.display = 'none';
    start.classList.add("hide");
    displayQuestionAnswer();
}


var questionAndAnswer = [
    {
        questions: 'What is the California state bird?',
        answers: ["Quail", "Eagle", "Penguin", "Raven",
        ],
        accuracy: 0
    },
    {
        questions: 'Dont forget to visit the World Famous San Diego ______',
        answers: ["WWII Museum", "Zoo", "Aquarium", "Space Needle"
        ],
        accuracy: 1
    },
    {
        questions: 'Is it always sunny in California?',
        answers: ["Never been", "I mean, sort of", "365 days of perfection", "wouldn't you like to know"
    ],
        accuracy: 3

    },
    {
        questions: 'Why did California originally become popular?',
        answers: ["The Gold Rush", "Palm trees", "Access to salmon", "Car production"
        ],
        accuracy: 0
    },
    {
        questions: 'What is the best state?',
        answers: ["California", "Florida", "CALIFORNIA IN CAPS", "Pick the third one"
        ],
        accuracy: 2
    },
]


function displayQuestionAnswer() {
    console.log(currentQIndex)

    if (currentQIndex > questionAndAnswer.length - 1) {

        return clearButton()
    }
    var question = questionAndAnswer[currentQIndex]
    questionCardHead.textContent = question.questions
    buttonArray = []
    answerGroup.innerHTML = ""


    for (i = 0; i < questionAndAnswer[currentQIndex].answers.length; i++) {
        var button = document.createElement("button")
        button.textContent = questionAndAnswer[currentQIndex].answers[i]
        button.setAttribute("data-index", i)

        buttonArray.push(button)
        console.log(buttonArray[i])
        answerGroup.appendChild(buttonArray[i])
    }
};

function clearButton() {
    answerGroup.innerHTML = ""
    scoreContainer.classList.remove('hide')
    questionContainer.classList.add('hide')
    welcome.style.display = "none"
    var finalScore = document.querySelector(".score")
    finalScore.textContent = timeLeft
    clearInterval(timeInterval)
};


answerGroup.addEventListener('click', function (event) {
    console.log(parseInt(event.target.getAttribute("data-index")) === questionAndAnswer[currentQIndex].accuracy)
    if (parseInt(event.target.getAttribute("data-index")) === questionAndAnswer[currentQIndex].accuracy) {
        currentQIndex++
        displayQuestionAnswer();
        console.log("Correct")
        yesNo.textContent = "Correct!"
    }
    else {
        timeLeft -= 15
        currentQIndex++
        displayQuestionAnswer();
        console.log("incorrect")
        yesNo.textContent = "Oh no! Are you a kook?"
    }
})

submit.addEventListener("click", function (scoreData) {
    var userScore = [
        {
            initials: nameInput.value,
            score: timeLeft
        },
    ]

    var data = JSON.parse(localStorage.getItem("score")) || [];

    localStorage.setItem('score', JSON.stringify([...data, ...userScore]))
    for (i = 0; i < userScore.length; i++) {
        var list = document.createElement("li");
        list.textContent = userScore[i].initials + ": " + userScore[i].score;
        list.setAttribute('score', i);
        scoresList.appendChild(list);
    }

})

// Reset the game and play again
replay.addEventListener("click", startGame)
function reset() {
    startGame();
    timeLeft = 60
    scoreContainer.classList.add('hide')
    currentQIndex = 0
}

