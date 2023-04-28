




let userNameInput = document.getElementById("username");

let submitButton = document.getElementById("submitform");

let loginSection = document.getElementById("sign-in");

let welcomeText = document.getElementById("username-displayed-section");

let quizStartAppear = document.getElementById("quiz-start-appear");

let scoreAppear = document.getElementById("score");




// the content for the open and close modal, that i found on https://www.w3schools.com/ full link is - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal which i have modified to fit my project.

var aboutModal = document.getElementById("aboutModal");
var sourcesModal = document.getElementById("sourcesModal");
var contactModal = document.getElementById("contactModal");











submitButton.addEventListener('click', function() {
    if (!userNameInput.value) {
      alert("Please choose a username");
      return;
    }
    let username = userNameInput.value;
    localStorage.setItem('username', username); 
    welcomeText.classList.remove("hidden");
    document.getElementById("username-displayed").textContent = username;
    loginSection.classList.add("hidden");
    quizStartAppear.classList.remove("hidden");
  });

  
  /// connects the re-start button with the input username, and let's you play the quiz again, without signing in again. 
  
  function autoLogin() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      userNameInput.value = storedUsername;
      document.getElementById("username-displayed").textContent = storedUsername;
      loginSection.classList.add("hidden");
      quizStartAppear.classList.remove("hidden");
      welcomeText.classList.remove("hidden");
      
    }
  }

  autoLogin();

   

  let quizButton = document.getElementById("start"); 
  
  let questionBox = document.getElementById("questionbox"); 
  
  let answerButtons = document.getElementById("answerbuttons"); 
  
  let scoreBoard = document.getElementById("scoreboard"); 
  
  let correctAnswer = document.getElementById("correct");
  
  let incorrect = document.getElementById("incorrect");
  
  let score = { correct: 0,  incorrect: 0 };
  
  
  let quizInProgress = false;

  
  



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
      correctAnswer.style.color = "green";
      setTimeout(() => {
        correctAnswer.style.color = "";
      }, 3000);
    } else {
      score.incorrect++;
      incorrect.style.color = "red";
      setTimeout(() => {
        incorrect.style.color = "";
      }, 3000);
    }
    correctAnswer.textContent = score.correct;
    incorrect.textContent = score.incorrect;
  }
  
// this is part changed to load the finish.html and display the final score. 
 function displayFinalScore() {
    window.location.href = `finish.html?correct=${score.correct}&incorrect=${score.incorrect}`;
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
