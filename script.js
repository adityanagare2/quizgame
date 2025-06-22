const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "PHP", "JavaScript", "All"],
    answer: "All"
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tabular Markup Language",
      "None"
    ],
    answer: "Hyper Text Markup Language"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.options.forEach(option => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(option);
    li.appendChild(button);
    answersEl.appendChild(li);
  });
}

function selectAnswer(option) {
  const correct = questions[currentQuestion].answer;
  if (option === correct) {
    score++;
  }
  nextBtn.style.display = "inline";
  const buttons = document.querySelectorAll("#answers button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "#90ee90";
    } else if (btn.textContent === option) {
      btn.style.backgroundColor = "#f08080";
    }
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.textContent = "";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
}

showQuestion();