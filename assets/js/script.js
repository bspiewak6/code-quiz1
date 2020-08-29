var timerClock = document.getElementById("timer");
var startBtn = document.getElementById("start");
var answerEl = document.getElementById("answer");
var questionEl = document.getElementById("question");
var currentQuestion = 0;
var scoreCounter = 0;

// create array for questions, choices and answers
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
    answer: "booleans"
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

function getQuestion() {
    var question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    answer.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
        var newItem = document.createElement("li");
        newItem.textContent = question.choices[i];
        answer.appendChild(newItem);
        newItem.addEventListener("click", processClick)
    }
};

function timer() {
    var timeLeft = 75;

    var interval = setInterval(function() {
        if (timeLeft > 0) {
            timerClock.textContent = "Time Left: " + timeLeft;
            timeLeft--; 
        } else {
            clearInterval(interval);
            // show highscores.html - run function 
        }
    }, 1000);     
};

function processClick() {
    // say if question is right or wrong
    var question = questions[currentQuestion]
    //console.log(this);
    if (question.answer === this.textContent) {
        scoreCounter++;
    } else {
        timerClock - 10;
    }    

    // deduct 10 seconds from timer and deduct 1 from score
};
    
    currentQuestion++
    if (currentQuestion === questions.length) {
        // show highscore.html
        // set quiz-wrapper to empty string, 
        // create new variable 
    } 
    getQuestion();  



getQuestion();

// event listener to start quiz when user clicks on start button

// when user clicks on start button, the timer starts
startBtn.addEventListener("click", timer);