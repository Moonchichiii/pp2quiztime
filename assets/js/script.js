let userNameInput = document.getElementById("username");

let submitButton = document.getElementById("submitform");

let loginSection = document.getElementById("sign-in");

let welcomeText = document.getElementById("username-displayed-section");

let quizStartAppear = document.getElementById("quiz-start-appear");

let scoreAppear = document.getElementById("score");


submitButton.addEventListener('click', function() {
      if (!userNameInput.value) {
    alert("Please choose a username");
    return;
  }
  let username = userNameInput.value;
      welcomeText.classList.remove("hidden");
      document.getElementById("username-displayed").textContent = username;
      loginSection.classList.add("hidden");
      quizStartAppear.classList.remove("hidden");
      

  });


  

  let quizButton = document.getElementById("start"); 
  
  let questionBox = document.getElementById("questionbox"); 
  
  let answerButtons = document.getElementById("answerbuttons"); 
  
  let scoreBoard = document.getElementById("scoreboard"); 
  
  let correctAnswer = document.getElementById("correct");
  
  let incorrect = document.getElementById("incorrect");
  
  let score = { correct: 0,  incorrect: 0 };
  
  let finalScore = document.getElementById("finalscore");
  
  let finalCorrect = document.getElementById("finalcorrect");
  
  let finalIncorrect = document.getElementById("finalincorrect");

  let quizInProgress = false;

  let finAlly = document.getElementById("finally");
  



  quizButton.addEventListener('click', startQuiz);
  


  function startQuiz() {
  scoreAppear.classList.remove("hidden");
  quizInProgress = true;
  quizButton.classList.add("hidden");
  scoreBoard.classList.remove("hidden");
  answerButtons.classList.remove("hidden");
  questionBox.classList.remove("hidden");
  quizStartAppear.classList.add("hidden");
  displayQuestion(0);

      score = { correct: 0,  incorrect: 0 };
  }
  
  function displayQuestion(index) {
    if (!quizInProgress) {
        return;
    }  
  questionBox.textContent = questions[index].question;
  
  answerButtons.innerHTML = "";

  questions[index].answers.forEach(answer => {
          
  let button = document.createElement("button");

  button.classList.add("answer-buttons");

  button.textContent = answer.text;

  button.addEventListener("click", () => {

  handleAnswerClick(answer.correct);

    
   if (index + 1 < questions.length) {
     displayQuestion(index + 1);
  } else {
   displayFinalScore();   
   }
});
  answerButtons.appendChild(button);
});
}
  
function handleAnswerClick(isCorrect) {
     if (isCorrect) {
       score.correct++;
     } else {
       score.incorrect++;
     }
     correctAnswer.textContent = score.correct;
     incorrect.textContent = score.incorrect;
  }
  

  function displayFinalScore() {
   
    let finishingPage = `
    <style>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Roboto+Slab&display=swap');
body {
 font-family: 'Mukta', sans-serif;
 font-size:35px;
 background-color:#fba92c;
    
 background-image: url('assets/images/pexels-ann-h-6266316.jpg');
 opacity:60;
    
 background-size: center center;
    
 background-attachment: fixed;
 background-position: rigth;
    
 display: flex;
 justify-content: center;
}
            
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
    
  align-items: stretch;
    
  width: 100%;
  max-width: 1200px;
}
            
.finally {
  margin-top:5%;
  margin-rigth: 5px;
  flex: 1;
    
 text-align: center;
 color: #16123f;
 background-color: rgba(255, 255, 255,0.2);
}
.feedback {
  margin-top:5%;
  
  flex: 1;
  text-align: center;
    
  background-color: rgba(255, 255, 255,0.2);
    
}
  textarea {
  width: 55%;
  height: 200px;
  padding: 2px;
  font-size: 20px;
  color:white;
  border: 1px solid black;
  border-radius: 5px; 
  background-color: #b999be;
  resize: vertical;
}
input[type="submit"]{
  border:none;
  border-radius:50%;
  padding:35px;
  color:black;
  background-color:rgba(255, 110, 39,0.7);
  
}
input[type="submit"]:hover {
  color:white;
}
  
  @media screen and (max-width: 767px) {
    .container {
      flex-direction: row;
    }
  }
</style>
<div class="wrapper">
  <div class="finally">
    <div id="finalscore" aria-label="Finalscore">
      <h1>Quiz Completed</h1>
      <p>Correct answers: <span id="finalcorrect">${score.correct}</span></p>
      <p>Incorrect answers: <span id="finalincorrect">${score.incorrect}</span></p>
    </div>
  </div>
  <div class="feedback">
  <p>Please be sure to send some feedback</p>
  <p>on this little quiz project</p>
  <form method="post" action="/feedback">
    <textarea name="feedback"></textarea><br>
    <input type="submit" name="submit">
  </form>
</div>
    `;
   
    document.body.innerHTML = finishingPage;
  }
  
let questions = [
  {
    question: 'In which city is the famous Edvard Eriksen statue, The Little Mermaid?',
    answers: [
      { text: 'Copenhagen', correct: true },
      { text: 'Oslo', correct: false },
      { text: 'Stockholm', correct: false }
    ]
  },
  {
    question: 'Which of these cities has the largest population?',
    answers: [
      { text: 'Shanghai', correct: true },
      { text: 'New Delhi', correct: false },
      { text: 'Mexico City', correct: false }
    ]
  },
  {
    question: 'The highest waterfall in Europe is in which country?',
    answers: [
      { text: 'Norway', correct: true },
      { text: 'Iceland', correct: false },
      { text: 'Finland', correct: false }
    ]
  },
  
  {
    question: 'From which Star Wars film has this quote: “Always remember, your focus determines your reality.',
    answers: [
      { text: 'The Force Awakens', correct: false },
      { text: 'The Empire Strikes Back', correct: false },
      { text: 'The Phantom Menace', correct: true }
    ]
  },
  {
    question: 'Where is bunny chow from?',
    answers: [
      { text: 'Usa', correct: false },
      { text: 'South Africa', correct: true },
      { text: 'Australia', correct: false }
    ]
  },
  {
    question: 'Where is tom yum from?',
    answers: [
      { text: 'Thailand', correct: true },
      { text: 'Japan', correct: false },
      { text: 'Sri Lanka', correct: false }
    ]
  },
  {
    question: 'What colour is Neptune?',
    answers: [
      { text: 'Blue', correct: true },
      { text: 'Red', correct: false },
      { text: 'Green', correct: false }
    ]
  },
  {
    question: 'Which company launched the perfume Eau Sauvage in 1966?',
    answers: [
      { text: 'Christian Dior', correct: true },
      { text: 'Hermès', correct: false },
      { text: 'Saint Laurent', correct: false }
    ]
  },
  {
    question: 'From which port city in England did the Titanic leave in 1912?',
    answers: [
      { text: 'Liverpool', correct: false },
      { text: 'Southampton', correct: true },
      { text: 'Dover', correct: false }
    ]
  },
  {
    question: 'Which Hollywood director made his directorial debut with Duel in 1971?',
    answers: [
      { text: 'Steven Spielberg', correct: true },
      { text: 'George Lucas', correct: false },
      { text: 'Martin Scorcese', correct: false }
    ]
  },

];