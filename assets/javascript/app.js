var userGuess = [] ;
var correctGuess = 0;
var wrongGuess = 0;
var unanswered = 0;

var myQuestions = [
   {
     question: "What doesn't the fox say?",
     answers: ["Hatee Ho", "dingeringeding", "Joff-tchoff", "woof"],
     correctAnswer: 3,
  },
  {  question: 'What did the "D" in "D-Day" stand for?',
     answers: ["doom", "day", "Dwight", "Dunkirk"],
     correctAnswer: 1,
  },
  {  question: "Which color does not belong in the rainbow?",
     answers: ["Orange", "Green", "Purple", "Indigo"],
     correctAnswer: 2,
  },
  {  question: "Who wrote a series of novels about orcs, hobbits, goblins and elves?",
     answers: ["Oscar Wilde", "J.R.R. Tolkien", "R.L. Stein", "J.K. Rowling"],
     correctAnswer: 1,
  },
  {  question: "What is the bluebird a symbol of?",
     answers: ["Hatred", "Happiness", "Sadness", "Love"],
     correctAnswer: 1,
  },
  {  question: "What is rum distilled from?",
     answers: ["Sugar Cane", "Ginger", "Cocaine", "Flour"],
     correctAnswer: 0,
  },
  {
     question: "How many symphonies ddi Beethoven compose?",
     answers: ["seven", "thirty two", "nine", "all of them"],
     correctAnswer: 2,
  },
  {
     question: "What is the Chinese game played with small tiles called?",
     answers: ["Tiles", "Rummy Cube", "Gin", "Mah-Jong"],
     correctAnswer: 3,
  },
];

console.log(myQuestions);
function gameStart(){
   for (var i = 0; i < myQuestions.length; i++) {
      console.log(myQuestions[i]);
      var questionDiv = $("<div>");
      questionDiv.attr("class", "questions");
      questionDiv.html(myQuestions[i].question);
      $(".quiz").append(questionDiv);

         for(var j = 0; j < 4 ; j++){
            var answersDiv = $("<div>");//creating a div not doing anything yet
            var radioBtn = $('<input type="radio"/>');
            answersDiv.attr("class", "answers");
            radioBtn.attr("name", "btn" + i);
            answersDiv.html(myQuestions[i].answers[j]);
            radioBtn.appendTo(".quiz");
            answersDiv.appendTo(".quiz");
         }
      }
   }

$("#start-button").on("click", function() {
 $("#start-button").hide();
  gameStart();
  var counter = 30;
  var intervalID = setInterval(function(){

   $("#timer").html("Time Remaining: " + counter);
   counter--;
   console.log(timer);
   if(counter === -1){
       clearInterval(intervalID);
       $(".quiz") .hide();
   }

}, 1 * 1000,)
});

$("#submitBtn").on("click", function() {
  $(".quiz") .hide();
  gameResults();
});
function gameResults() {
// userGuess.on("click", function(radioBtn)
// if (userGuess == correctAnswer) {
//    correctGuess++;
}
// console.log(userGuess);
//I need to get the userGuesses to recognize the click listener on the radio btns
//I then need to have the correct answers known to which button.
//I do have my correctAnswers listed inside my questions array.
//I need to get the game to hide the questions again after the time runs out
//and then get the results to display.
//I also need a submit button in case the game gets finidhed early.
//With the amount of code above, I feel like I've done nothong for the ampunt of time I hvae spent on this HAHAHA
//
