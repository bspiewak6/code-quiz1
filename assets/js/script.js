// all global variables
var timerClock = document.getElementById("timer");
var startBtn = document.getElementById("start");
var answerList = document.getElementById("answer");
var result = document.getElementById("result");
var welcome = document.getElementById("welcome-container");
var quiz = document.getElementById("quiz-container");
var saveBtn = document.getElementById("save")

var currentQuestion = 0;
var scoreCounter = 75;
var timeLeft = 75;
var highScore = 0
var interval



// array for questions, choices and answers
var questions = [
    {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<script>", "<scripting>"],
    answer: "<script>"
    },
 
    {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["the <header> section", "both <header> and <body> section", "<body> section", "<footer> section"],
    answer: "<body> section"   
    },
    
    {
    question: "Commonly used data types DO NOT Include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
    },   
    
    {
    question: "The condition in an if/else statement is enclosed with ______",
    choices: ["quotes", "parenthesis", "curly brackets", "square brackets"],
    answer: "parenthesis"
    },

    {
    question: "Arrays in JavaScript can be used to store ______" ,
    choices: ["number and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
    },
];
//  Hide form until after quiz is completed
document.getElementById("form").setAttribute("class", "hide")


//  Function to start the quiz and get the array of questions to run
function getQuestion() {
    if(questions[currentQuestion]){
    var question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    answer.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
        var newItem = document.createElement("li");
        newItem.textContent = question.choices[i];
        answer.appendChild(newItem);
        newItem.addEventListener("click", processClick)
    }
}
};

function timer() {
     interval = setInterval(function() {
        if (timeLeft > 0) {
            timerClock.textContent = "Time Left: " + timeLeft;
            timeLeft--; 
        } else {
            clearInterval(interval);
        }
    }, 1000);     
};

function processClick() {
    // say if question is right or wrong
    result.innerHTML = "";
    var question = questions[currentQuestion];
    if (questions[currentQuestion] && currentQuestion < 4) {
        correctAlert = document.createElement("p");
    } else if (currentQuestion === 4) {
        correctAlert = document.createElement("p");
        clearInterval(interval);
    }

    if (question.answer === this.textContent) {
        correctAlert.textContent = "CORRECT";
        
    } else {
        correctAlert.textContent = "INCORRECT";
        timeLeft = timeLeft - 10;
    }

    result.appendChild(correctAlert);
    currentQuestion++;

    if (currentQuestion === questions.length) {
        endGame();
    } else {
        getQuestion();
    }
    
    getQuestion();  
};


// added a form in HTML 
// add the attribute hide in the css (display: none);

// add an onclick event to the save button from the form (add event listener "click")

// create a function that ends the game
function endGame() {
// stop the timer
clearInterval(interval);

// clear the questions area // hide the quiz-container div
document.getElementById("quiz-container").setAttribute("class", "hide")
document.getElementById("result").setAttribute("class", "hide")

// unhide the form div
document.getElementById("form").setAttribute("class", "block")

// when user clicks on save button, the initials and score are saved in localStorage
startBtn.addEventListener("click", timer);
}


// event listener to start quiz when user clicks on start button
startBtn.addEventListener("click", getQuestion);
// when user clicks on start button, the timer starts
startBtn.addEventListener("click", timer);



