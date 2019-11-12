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
            let choices = $("<div>")
            choices.append("<button>" + element + "</button>");
            $("#question").append(choices);
        });
    }
}
Q1 = new Question(1, "What does Mosi Oa tunya mean?", ["Smoke that thunders", "Victoria Falls", "Windy ravine", "Thunderstorms"], "Smoke that thunders");
Q2 = new Question(2, "Who was the first president of Zimbabwe?", ["Robert Mugabe", "Canaan Banana", "Morgan Tsvangirai", "Abel Muzorewa"], "Canaan Banana");
Q3 = new Question(3, "In what year did Zimbabwe attain independence from British Colonial Rule?", ["1957", "1980", "2017", "1960"], "1980");
Q4 = new Question(4, "What is the capital city of Zimbabwe?", ["Harare", "Bulawayo", "Gweru", "Mutare"], "Harare");

questionSet = [Q1, Q2, Q3, Q4]


let gameInterval;
let gametime = 2;
let timerRunning = false;
let questionNumber = 0;

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
        timerRunning = false;
        $("#reset").show()
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
}


$("#start").on("click", run);
$("#reset").on("click", reset);
// $("button").on("click", answer);

