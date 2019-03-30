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
         a: "Wonka's cane",
         b: "Veruca's snozzberry",
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
var letterString = "abc";
var answerLength = 3;

function displayQuiz() {

   for (var i = 0; i < questions.length; i++) {
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
         inputDiv.attr("type", "checkbox");
         inputDiv.addClass("form-check-input");
         inputDiv.attr("id", "exampleCheck1");

         var label = $("<label>");
         label.addClass("form-check-label");
         label.attr("for", "exampleCheck1");

         mainFormDiv.append(formGroup);
         formGroup.append(inputDiv);
         formGroup.append(label);
         // var answerDiv = $("<p>");



         // label.append(answerDiv);
         label.text(questions[i].answers[(letterString.charAt(j))]);
      }
   }
}
displayQuiz();