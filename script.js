const questions = [
  {
    question: "Which language runs in a web browser?",
    answers: {
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript"
    },
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    answers: {
      a: "Computer Style Sheets",
      b: "Cascading Style Sheets",
      c: "Creative Style System",
      d: "Colorful Style Sheets"
    },
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    answers: {
      a: "Hyper Trainer Marking Language",
      b: "Hyper Text Marketing Language",
      c: "Hyper Text Markup Language",
      d: "Hyper Text Making Line"
    },
    correct: "c"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: {
      a: "<script>",
      b: "<style>",
      c: "<css>",
      d: "<link>"
    },
    correct: "b"
  },
  {
    question: "Which property is used to change the background color in CSS?",
    answers: {
      a: "bgcolor",
      b: "color",
      c: "background-color",
      d: "background"
    },
    correct: "c"
  },
  {
    question: "Inside which HTML element do we put the JavaScript code?",
    answers: {
      a: "<js>",
      b: "<javascript>",
      c: "<script>",
      d: "<code>"
    },
    correct: "c"
  },
  {
    question: "What is the correct syntax for referring to an external JavaScript file?",
    answers: {
      a: "<script href='app.js'>",
      b: "<script name='app.js'>",
      c: "<script src='app.js'>",
      d: "<js src='app.js'>"
    },
    correct: "c"
  },
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    answers: {
      a: "getElementById()",
      b: "querySelectorAll()",
      c: "getElementByClass()",
      d: "getElementsByTagName()"
    },
    correct: "a"
  },
  {
    question: "How do you add a comment in a CSS file?",
    answers: {
      a: "// This is a comment",
      b: "<!-- This is a comment -->",
      c: "# This is a comment",
      d: "/* This is a comment */"
    },
    correct: "d"
  },
  {
    question: "Which CSS property controls the text size?",
    answers: {
      a: "font-style",
      b: "text-size",
      c: "font-size",
      d: "text-style"
    },
    correct: "c"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: {
      a: "onmouseover",
      b: "onchange",
      c: "onclick",
      d: "onmouseclick"
    },
    correct: "c"
  },
  {
    question: "How do you write 'Hello World' in an alert box using JavaScript?",
    answers: {
      a: "alertBox('Hello World');",
      b: "msgBox('Hello World');",
      c: "msg('Hello World');",
      d: "alert('Hello World');"
    },
    correct: "d"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answers: {
      a: "Django",
      b: "Laravel",
      c: "React",
      d: "Flask"
    },
    correct: "c"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const quiz = document.getElementById("quiz"); // Make sure this exists in your HTML

function loadQuestion() {
  feedbackEl.textContent = "";
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answerBtns.forEach(btn => {
    const option = btn.getAttribute("data-id");
    btn.textContent = q.answers[option];
    btn.disabled = false;
  });
}

function handleAnswer(e) {
  const selected = e.target.getAttribute("data-id");
  const correct = questions[currentQuestion].correct;

  if (selected === correct) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    score++;
  } else {
    feedbackEl.textContent = `Wrong! Correct answer is: ${questions[currentQuestion].answers[correct]}`;
    feedbackEl.style.color = "red";
  }

  answerBtns.forEach(btn => btn.disabled = true);
}

answerBtns.forEach(btn => {
  btn.addEventListener("click", handleAnswer);
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  quiz.innerHTML = `
    <h2>You scored ${score} out of ${questions.length}.</h2>
    <p>Thanks for participating!</p>
  `;
}

loadQuestion();
