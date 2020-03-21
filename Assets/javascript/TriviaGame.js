var questions = [{
    question: "#1 What is the most common material in Persian Rug?",
    choices: ["wool", "cotton", "silk", "wool & cotton"],
    answer: "wool & cotton"
  },
  {
    question: "#2 What is the foundtion of a Persian Rug callded?",
    choices: ["warp", "weft", "warp & weft", "wool"],
    answer: "warp & weft"
  },

  {
    question: "#3 Do all Persian Rugs increase in value over time?",
    choices: ["yes", "no", "yes, depends on the rug & condtion", "All of the above"],
    answer: "yes, depends on the rug & condtion"
  },
  {
    question: "#4 Are all Persain Rugs made with Vegatable Dye?",
    choices: ["yes", "no", "depends on origin of the Rug", "All of the above"],
    answer: "depends on origin of the Rug"
  },
  {
    question: "#5 How are Persian Rugs Named?",
    choices: ["by the weaver", "by the Master", "city it was woven in", "by the Master Weaver"],
    answer: "city it was woven in"
  },
  {
    question: "#6 What factors determine the pricing of a Persain Rug?",
    choices: ["condtion, age & origin", "age & colors", "colors & condtion", "All of the above"],
    answer: "All of the above"
  }
]



//index below is for the array of questions being asked
var correctAnswerCount = 0
var incorrectAnswerCount = 0
var unAnsweredCount = 0
var indexQuestion = 0
var setIntervalId;

var counter = 30


//create function to display questions
function displayQuestions() {
  for (let index = 0; index < questions.length; index++) {

    var p = $("<p class='mt-2'>")
    var question = questions[index].question
    p.html(question)
    var radioDiv = $("<div>")
    for (let indexChoice = 0; indexChoice < questions[index].choices.length; indexChoice++) {
      var div = $("<div class='form-check form-check-inline'>")
      var input = $("<input class='form-check-input' type='radio' name='inlineRadioOption" + index + "'>")
      input.attr("id", "inlineRadio" + index)
      input.attr("data-correctAnswer", questions[index].answer)

      //this grabs the choices from the array and makes radio button for it
      var choice = questions[index].choices[indexChoice]
      input.attr("value", choice)
      var answer = questions[index].answer
      // this so each possible choices will the correct answer
      // input.attr("data-answer", answer)
      var label = $("<label class='form-check-label' for='inlineRadio2'>")
      label.html(choice)

      div.append(input, label)

      radioDiv.append(div)
    }


    $("#trivia").append(p, radioDiv)



  }


  $(".form-check-input").on("click", function () {

    var dataCorrectAnswer = $(this).attr("data-correctAnswer")
    var userChoiceAnswer = $(this).attr("value")

    console.log(dataCorrectAnswer, userChoiceAnswer)
    if (userChoiceAnswer === dataCorrectAnswer) {
      correctAnswerCount++

    } else {
      incorrectAnswerCount++
    }

    console.log(correctAnswerCount, incorrectAnswerCount)
  })
  setIntervalId = setInterval(countDown, 1000)
}

function countDown() {

  $("#timer").html(counter)
  if (counter === 0) {
    clearInterval(setIntervalId)
    $("#scoreBoard").show()
    $("#start").hide()

    var p = $("<p>")

    p.append("CORRECT ANSWER:" + correctAnswerCount + "<br>")
    p.append("INCORRECT ANSWER:" + incorrectAnswerCount + "<br>")

    // total answers that have not been answered eqauls the amount of answered correct plus 
    // toal amount od answered incorrect = the answeer
    var totalUnanswered = questions.length - (correctAnswerCount + incorrectAnswerCount);

    p.append("UNANSWERED QUESTIONS:" + totalUnanswered + "<br>")

    $("#scoreBoard").append(p)

  }
  counter--
}
$("#start").hide()


$("#startButton").on("click", function () {

  displayQuestions()

  $("#start").show()
  $("#startButton").hide()
  $("#scoreBoard").hide()

})