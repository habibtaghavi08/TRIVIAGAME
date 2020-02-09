var questions = [
  {
    question: "What is the most common material in Persian Rug?",
    choices: ["wool", "cotton", "silk", "wool & cotton"],
    answer: "wool & cotton"
  },
  {
    question: "What is the foundtion of a Persian Rug callded?",
    choices: ["warp", "weft", "warp & weft", "wool"],
    answer: "warp & weft"

  }
]
//index below is for the array of questions being asked
var correctAnswerCount = 0
var incorrectAnswerCount = 0
var unAnsweredCount = 0
var indexQuestion = 0
var setIntervalId = 0




{/* <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div> */}

//create function to display questions
function displayQuestions() {
  for (let index = 0; index < questions.length; index++) {

    var p = $("<p>")
    var question = questions[index].question
    p.html(question)

    var radioDiv = $("<div>")
    for (let indexChoice = 0; indexChoice < questions[index].choices.length; indexChoice++) {
      var div = $("<div class='form-check form-check-inline'>")
      var input = $("<input class='form-check-input' type='radio' name='inlineRadioOptions'>")
      input.attr("id", "inlineRadio" + index)

      //this grabs the choices from the array and makes radio button for it
      var choice = questions[index].choices[indexChoice]
      input.attr("value", choice)
      var answer = questions[index].answer
      // this so each possible choices will the correct answer
      input.attr("data-answer", answer)
      var label = $("<label class='form-check-label' for='inlineRadio2'>")
      label.html(choice)

      div.append(input, label)

      radioDiv.append(div)
    }
    
    $("#trivia").append(p,radioDiv)

  }
}


displayQuestions()