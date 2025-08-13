const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},

]


const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <div class="question">${currentQuestion + 1}. ${q.question}</div>
    <label class="option">
      <input type="radio" name="answer" value="a"> ${q.a}
    </label>
    <label class="option">
      <input type="radio" name="answer" value="b"> ${q.b}
    </label>
    <label class="option">
      <input type="radio" name="answer" value="c"> ${q.c}
    </label>
    <label class="option">
      <input type="radio" name="answer" value="d"> ${q.d}
    </label>
  `;
}

function getSelectedAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  return selected ? selected.value : null;
}

nextButton.addEventListener("click", () => {
  const answer = getSelectedAnswer();
  if (!answer) {
    alert("Please select an answer!");
    return;
  }
  if (answer === quizData[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length - 1) {
    loadQuestion();
  } else {
    loadQuestion();
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  }
});

submitButton.addEventListener("click", () => {
  const answer = getSelectedAnswer();
  if (answer && answer === quizData[currentQuestion].correct) {
    score++;
  }
  quizContainer.innerHTML = "";
  submitButton.style.display = "none";
  resultContainer.textContent = `You scored ${score} out of ${quizData.length}`;
});

loadQuestion();
