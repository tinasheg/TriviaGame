function Question(number, questionText, choices, answer) {
    this.number = number;
    this.questionText = questionText;
    this.choices = choices;
    this.answer = answer;
    this.displayQuestion = function () {

        // questionDiv = $("<form>");
        // questionDiv.text(this.questionText);

        $("#question").html(this.questionText);
        this.choices.forEach(element => {
            let choiceSelection = $("<div>");
            choiceSelection.attr("answer", element);
            choiceSelection.append("<button class='btn-choice'>" + element + "</button>");
            $("#question").append(choiceSelection);
        });
    }
}
Q1 = new Question(1, "What does Mosi Oa tunya mean?", ["Smoke that thunders", "Victoria Falls", "Windy ravine", "Thunderstorms"], "Smoke that thunders");
Q2 = new Question(2, "Who was the first president of Zimbabwe?", ["Robert Mugabe", "Canaan Banana", "Morgan Tsvangirai", "Abel Muzorewa"], "Canaan Banana");
Q3 = new Question(3, "In what year did Zimbabwe attain independence from British Colonial Rule?", ["1957", "1980", "2017", "1960"], "1980");
Q4 = new Question(4, "What is the capital city of Zimbabwe?", ["Harare", "Bulawayo", "Gweru", "Mutare"], "Harare");

questionSet = [Q1, Q2, Q3, Q4]


let gameInterval;
let gametime = 25;
let timerRunning = false;
let questionNumber = 0;
let correct = 0;
let wrong = 0;
let skipped = 0;
let userAnswer;
const resultDiv = $(".results");

function run() {
    $("#start").hide();
    $("#reset").hide()

    for (let i = 0; i < questionSet.length; i++) {
        
        
        if (!timerRunning) {
            gameInterval = setInterval(decrement, 1000);
            timerRunning = true;
            console.log(questionNumber);
        }

    }
    // questionSet[questionNumber].displayQuestion();
    
}

function decrement() {
    gametime--;
    $("#timer-display").text("Time remaining: " + gametime + " seconds");
    // showQuestion();
    showQuestion()
    
    if (gametime === 0) {
        // alert("Time Up!");
        // stop();
        gametime = 2;
        questionNumber++;
    }
    if (questionNumber === questionSet.length) {
        stop();
        $("#timer-display").empty();
        timerRunning = false;
        showresults();
        $("#reset").show();
        $("#question").empty();
    }
 
}

function stop() {
    clearInterval(gameInterval);
    timerRunning = false;
}

showQuestion = function () {
    questionSet[questionNumber].displayQuestion();
}

function reset() {
    // stop();
    questionNumber = 0;
    gametime = 2;
    run();
    $("#question").show();
    $(".results").empty();
}

function showresults() {
    
    
    resultDiv.append("<h2>Game Over!");
    resultDiv.append("<div>Total Correct: " + correct + "</div>");
    resultDiv.append("<div>Total Wrong: " + wrong+ "</div>");
    resultDiv.append("<div>Total Skipped: " + skipped+ "</div>");
}

function answer() {

    userAnswer = $(this).attr("answer");


    if (userAnswer === questionSet[questionNumber].answer) {
        stop();
        correct++;
        userAnswer = "";
        resultDiv.html("<h2>Correct!");
        
    } else {
        stop();
        wrong++;
        resultDiv.html("<h2>Wrong! The correct answer is: " + questionSet[questionNumber].answer);
    }
    stop();
    console.log(this.value);
}


$("#start").on("click", run);
$("#reset").on("click", reset);
$(".btn-choice").on("click", answer);


