let arr = ["o-4", "o-2", "o-3", "o-1", "o-3"];
let correct = 0,
    wrong = 0,
    total = 0,
    answered = 0,
    totalQuestions = 5;

for (let i = 0; i < totalQuestions; i++) {
    // var $(".questions .question-" + (i + 1)) = $(".questions .question-" + (i + 1));

    $(".question-" + (i + 1)).attr("flag", 0);
    $(".question-" + (i + 1)).find(".option").on("click", function () {
        console.log(this);
        if ($(".question-" + (i + 1)).attr("flag") == 0) {
            $(".question-" + (i + 1)).attr("flag", 1);
            checkAnswer(this, i);
        } else {
            alert("you can select only one option");
        }
    });
    $(".question-" + (i + 1)).find(".answerToggle").on("click", function () {
        if ($((".question-") + (i + 1)).attr("flag") == 1) {
            displaySolution(i + 1);
        } else {
            alert("you have to answer the question first");
        }
    });
    // $(".questions .question-" + (i + 1)).attr("flag", 0);


}

function checkAnswer(option, qNo) {
    $(".question-" + (qNo + 1)).find(".option").each(function () {
        $(this).css("backgroundColor", "");
    });


    if (option.id == arr[qNo]) {
        $(".question-" + (qNo + 1) + " #" + option.id + " .option-button").css("backgroundColor", "green");
    } else {
        $(".question-" + (qNo + 1) + " #" + option.id + " .option-button").css("backgroundColor", "red");

    }
    $(".questions .question-" + (qNo + 1)).attr("flag", 1);
    console.log($(".questions .question-1").attr("flag"));
}

function displaySolution(qNo) {
    var item = $(".questions .question-" + (qNo) + " .answer");
    item.fadeToggle();
}