function Question(number, questionText, choices, answer) {
    this.number = number;
    this.questionText = questionText;
    this.choices = choices;
    this.answer = answer;
    this.displayQuestion = function () {

        questionDiv = $("<form>");
        questionDiv.text(this.questionText);

        $("#question").append(questionDiv);
        this.choices.forEach(element => {
            $("#question").append("<button>" + element + "</button>");
        });
    }
}
Q1 = new Question(1, "What does Mosi Oa tunya mean?", ["Smoke that thunders", "Victoria Falls", "Windy ravine", "Thunderstorms"], "Smoke that thunders");
Q2 = new Question(2, "Who was the first president of Zimbabwe?", ["Robert Mugabe", "Canaan Banana", "Morgan Tsvangirai", "Abel Muzorewa"], "Canaan Banana");
Q3 = new Question(3, "In what year did Zimbabwe attain independence from British Colonial Rule?", ["1957", "1980", "2017", "1960"], "1980");
Q4 = new Question(4, "What is the capital city of Zimbabwe?", ["Harare", "Bulawayo", "Gweru", "Mutare"], "Harare");

questionSet = [Q1, Q2, Q3, Q4]

// 
let gameInterval;
let gametime = 6;
let timerRunning = false;
let questionNumber = 0;

function run() {
    if (!timerRunning) {
        intervalId = setInterval(decrement, 1000);
        timerRunning = true;
    }
}

function decrement() {
    
    gametime--;
    $("#timer-display").text("Time remaining: " + gametime + " seconds");
    if (gametime === 0) {
        alert("Time Up!");
        stop();
        questionNumber++;
        gametime = 5;
    }
}

function stop() {
    clearInterval(gameInterval);
    timerRunning = false;
}






// function game() {
//     // $("#timer-display").html("<h2>Time remaining: " + gametime + "<h/h2>");
//     $(".start-display").empty();
//     questionSet[questionNumber].displayQuestion();
//     startTimer();
// }


// function startTimer() {
//     showTime();
//     clearInterval(gameInterval);
//     gameInterval = setInterval(game, 1000);
// }

// function stop() {
//     clearInterval(gameInterval);
//     gameInterval = undefined;
// }

// function results() {

//     let correct = 0;
//     let wrong = 0;
//     let unAnswered = 0;



//     for (let i = 0; i < questionSet.length; i++) {



//     };
// }

// function showTime() {
//     gametime--;
//     $("#timer-display").text("Time remaining: " + gametime + " seconds");

//     if (gametime === 0) {
//         stop();
//         displayAnswer();
//     }
// }

// function answer() {
//     stop();
//     let answer = $(this).val();
//     console.log(answer)
// }

$("#start").on("click", run);
// $("button").on("click", answer);