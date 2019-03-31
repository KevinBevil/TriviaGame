var questions = [
   {
      question: "Who directed the 1971 version?",
      answers: {
         a: "Robert Altman",
         b: "Mel Stuart",
         c: "Sidney Lumet"
      },
      correctAnswer: "b"
   },
   {
      question: "Which of the following books was not written by Roald Dahl?",
      answers: {
         a: "James and the Giant Peach",
         b: "Matilda",
         c: "The Jungle Book"
      },
      correctAnswer: "c"
   },
   {
      question: "In the 1971 movie, what gets stuck in the stones in the walkway when Wonka is first introduced?",
      answers: {
         a: "Wonka's Cane",
         b: "Veruca's Snozzberry",
         c: "Granpa Joe's robe"
      },
      correctAnswer: "a"
   },
   {
      question: "Which musical artist covered the songs Pure Imagination, The Candy Man, I've got a Golden Ticket, and I Want It Now on his 2001 album, Songs I Heard?",
      answers: {
         a: "Eminem",
         b: "Harry Connick, Jr",
         c: "James Blunt"
      },
      correctAnswer: "b"
   },
   {
      question: "What was the last name of Charlie, the main character?",
      answers: {
         a: "Bucket",
         b: "Bouquet",
         c: "Connick, Jr"
      },
      correctAnswer: "a"
   },
   {
      question: "An animated version was released in 2017 featuring what cartoon duo?",
      answers: {
         a: "Space Ghost and Dino Boy",
         b: "Scooby Doo and Scrappy Doo",
         c: "Tom and Jerry"
      },
      correctAnswer: "c"
   }
];
var quizDiv = $(".quiz");
var totalTime = 45;
var intervalId;
// a string created so the loop can iterate through the letters of the questions
var letterString = "abc";
var answerLength = 3;
var questionArrLength = questions.length;

function generateQuiz() {

   for (var i = 0; i < questionArrLength; i++) {
      var aQuestion = questions[i].question;
      var questionDiv = $("<h6>");
      quizDiv.append(questionDiv);
      questionDiv.append(aQuestion);

      for (var j = 0; j < answerLength; j++) {
         // console.log(questions[i].answers[(letterString.charAt(j))]);
         var mainFormDiv = $("<form>");
         quizDiv.append(mainFormDiv);

         var formGroup = $("<div>");
         formGroup.addClass("form-group");
         formGroup.addClass("form-check");

         var inputDiv = $("<input>");
         inputDiv.addClass("box");
         inputDiv.attr("data-id", questions[i].answers[(letterString.charAt(j))]);
         inputDiv.attr("type", "checkbox");
         inputDiv.addClass("form-check-input");
         inputDiv.attr("id", "exampleCheck1");

         var label = $("<label>");
         label.addClass("form-check-label");
         label.attr("for", "exampleCheck1");

         mainFormDiv.append(formGroup);
         formGroup.append(inputDiv);
         formGroup.append(label);

         label.text(questions[i].answers[(letterString.charAt(j))]);
      }
   }
}
generateQuiz();




// This listener makes sure only one answer is chosen for each question
// This had to be done in leiu of using bootstrap's radio buttons
$(document).on("click", ".box", function () {
   var name = $(this).attr("data-id");
   // Director question ------------------------------------------------
   if (name === "Robert Altman") {
      $("[data-id='Mel Stuart']").prop('checked', false);
      $("[data-id='Sidney Lumet']").prop('checked', false);
   }
   if (name === "Mel Stuart") {
      $("[data-id='Sidney Lumet']").prop('checked', false);
      $("[data-id='Robert Altman']").prop('checked', false);
   }
   if (name === "Sidney Lumet") {
      $("[data-id='Robert Altman']").prop('checked', false);
      $("[data-id='Mel Stuart']").prop('checked', false);
   }
   // Book question ------------------------------------------------
   if (name === "James and the Giant Peach") {
      $("[data-id='Matilda']").prop('checked', false);
      $("[data-id='The Jungle Book']").prop('checked', false);
   }
   if (name === "Matilda") {
      $("[data-id='The Jungle Book']").prop('checked', false);
      $("[data-id='James and the Giant Peach']").prop('checked', false);
   }
   if (name === "The Jungle Book") {
      $("[data-id='James and the Giant Peach']").prop('checked', false);
      $("[data-id='Matilda']").prop('checked', false);
   }
   // Walkway question ------------------------------------------------
   if (name === "James and the Giant Peach") {
      $("[data-id='Matilda']").prop('checked', false);
      $("[data-id='The Jungle Book']").prop('checked', false);
   }
   if (name === "Matilda") {
      $("[data-id='The Jungle Book']").prop('checked', false);
      $("[data-id='James and the Giant Peach']").prop('checked', false);
   }
   if (name === "The Jungle Book") {
      $("[data-id='James and the Giant Peach']").prop('checked', false);
      $("[data-id='Matilda']").prop('checked', false);
   }
   // Album question ------------------------------------------------
   if (name === "Eminem") {
      $("[data-id='Harry Connick, Jr']").prop('checked', false);
      $("[data-id='James Blunt']").prop('checked', false);
   }
   if (name === "James Blunt") {
      $("[data-id='Eminem']").prop('checked', false);
      $("[data-id='Harry Connick, Jr']").prop('checked', false);
   }
   if (name === "Harry Connick, Jr") {
      $("[data-id='James Blunt']").prop('checked', false);
      $("[data-id='Eminem']").prop('checked', false);
   }
   // Last name question ------------------------------------------------
   if (name === "Bucket") {
      $("[data-id='Bouquet']").prop('checked', false);
      $("[data-id='Connick, Jr']").prop('checked', false);
   }
   if (name === "Connick, Jr") {
      $("[data-id='Bucket']").prop('checked', false);
      $("[data-id='Bouquet']").prop('checked', false);
   }
   if (name === "Bouquet") {
      $("[data-id='Connick, Jr']").prop('checked', false);
      $("[data-id='Bucket']").prop('checked', false);
   }
   // Cartoon duo question ------------------------------------------------
   if (name === "Space Ghost and Dino Boy") {
      $("[data-id='Scooby Doo and Scrappy Doo']").prop('checked', false);
      $("[data-id='Tom and Jerry']").prop('checked', false);
   }
   if (name === "Tom and Jerry") {
      $("[data-id='Space Ghost and Dino Boy']").prop('checked', false);
      $("[data-id='Scooby Doo and Scrappy Doo']").prop('checked', false);
   }
   if (name === "Scooby Doo and Scrappy Doo") {
      $("[data-id='Tom and Jerry']").prop('checked', false);
      $("[data-id='Space Ghost and Dino Boy']").prop('checked', false);
   }
});


window.onload = (runClock());

function runClock() {
   clearInterval(intervalId);
   intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
   if (totalTime <= 0){return}
   //  Decrease total time by one
   totalTime--;

   //  Show the number in the #show-number tag.
   $(".timer").html("Time Left: <strong>" + totalTime + "</strong>");


   //  Out of time...
   if (totalTime === 0) {



   }
}