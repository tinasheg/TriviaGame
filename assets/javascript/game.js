function Question(number, questionText, choices, answer) {
    this.number = number;
    this.questionText = questionText;
    this.choices = choices;
    this.answer = answer;
    this.displayQuestion = function () {
        // $("#question-container").show();
        // $("#answer-container").hide();

        // startTimer();

        $("#question").text(this.questionText);

        for (let i = 0; i < this.choices.length; i++) {
            $("#choice-" + i).text(this.choices[i]);
        }
    }
}
let Q1 = new Question(1, "What does Mosi Oa tunya mean?", ["Smoke", "Falls", "Wind", "Rain"], "Smoke");

$(document).ready(function () {
    Q1.displayQuestion()
    console.log(Q1)
})
