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
,
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
var setIntervalId;


var counter=30




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

    var p = $("<p class='mt-2'>")
    var question = questions[index].question
    p.html(question)
    var radioDiv = $("<div>")
    for (let indexChoice = 0; indexChoice < questions[index].choices.length; indexChoice++) {
      var div = $("<div class='form-check form-check-inline'>")
      var input = $("<input class='form-check-input  ' type='radio' name='inlineRadioOption"+index+"'>")
      input.attr("id", "inlineRadio" + index)
     input.attr("data-correctAnswer",questions[index].answer ) 

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
    $(".form-check-input").on("click", function(){
        var dataCorrectAnswer=$(this).attr("data-correctAnswer")
        var userChoiceAnswer=$(this).val()
        if(userChoiceAnswer===dataCorrectAnswer){
           correctAnswerCount++
          
        }else{
          incorrectAnswerCount++
        }
    })
    
    $("#trivia").append(p,radioDiv)

 

  }
  setIntervalId=setInterval(countDown,1000)
}







function countDown(){

  $("#timer").html(counter)
  if(counter===0){
    clearInterval(setIntervalId)
    $("#scoreBoard").show()
    $("#start").hide()

  var p=$("<p>") 
 
  p.append("CORRECT ANSWER:" + correctAnswerCount + "<br>")
  p.append("INCORRECT ANSWER:" + incorrectAnswerCount + "<br>")

// total answers that have not been answered eqauls the amount of answered correct plus toal amount od answered incorrect = your answeer
  var totalUnanswered=questions.length - (correctAnswerCount + incorrectAnswerCount)

p.append("UNANSWERED QUESTIONS:"+ totalUnanswered + "<br>")

$("#scoreBoard").append(p)

  }
  counter--
}
$("#start").hide()


$("#startButton").on("click",function(){
      
  displayQuestions()
  $("#start").show()
  $("#startButton").hide()
  $("#scoreBoard").hide()

})