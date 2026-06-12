const questions = [
{
question:"What is the capital of India?",
answers:["Mumbai","New Delhi","Chennai","Kolkata"],
correct:1
},
{
question:"Which language is used for styling web pages?",
answers:["HTML","CSS","Python","Java"],
correct:1
},
{
question:"Which planet is known as the Red Planet?",
answers:["Earth","Mars","Jupiter","Venus"],
correct:1
},
{
question:"What does CPU stand for?",
answers:[
"Central Processing Unit",
"Computer Processing Unit",
"Central Program Unit",
"Control Processing Unit"
],
correct:0
},
{
question:"Which keyword is used to create a function in JavaScript?",
answers:["function","func","define","method"],
correct:0
},
{
question:"How many continents are there on Earth?",
answers:["5","6","7","8"],
correct:2
},
{
question:"Which HTML tag is used for the largest heading?",
answers:["h1","h2","h6","p"],
correct:0
},
{
question:"Which data type stores True or False values?",
answers:["String","Integer","Boolean","Float"],
correct:2
},
{
question:"Who is known as the Father of Computers?",
answers:[
"Bill Gates",
"Charles Babbage",
"Steve Jobs",
"Alan Turing"
],
correct:1
},
{
question:"What does CSS stand for?",
answers:[
"Creative Style Sheets",
"Colorful Style Sheets",
"Computer Style Sheets",
"Cascading Style Sheets"
],
correct:3
}
];

const loginPage = document.getElementById("login-page");
const quizPage = document.getElementById("quiz-page");
const startBtn = document.getElementById("start-btn");

const usernameInput = document.getElementById("username");
const welcome = document.getElementById("welcome");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", () => {

    let name = usernameInput.value.trim();

    if(name === ""){
        alert("Please enter your name");
        return;
    }

    loginPage.style.display = "none";
    quizPage.style.display = "block";

   welcome.textContent = `Congratulations, ${username.value}! 🏆`;

    showQuestion();
});

function showQuestion(){

    nextBtn.style.display = "none";
    answerButtons.innerHTML = "";

    let q = questions[currentQuestion];

    questionElement.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}: ${q.question}`;

    q.answers.forEach((answer,index)=>{

        let button = document.createElement("button");

        button.textContent = answer;
        button.classList.add("answer-btn");

        button.addEventListener("click",()=>selectAnswer(index));

        answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedIndex){

    let q = questions[currentQuestion];

    Array.from(answerButtons.children).forEach((button,index)=>{

        if(index === q.correct){
            button.classList.add("correct");
        }

        if(index === selectedIndex && index !== q.correct){
            button.classList.add("wrong");
        }

        button.disabled = true;
    });

    if(selectedIndex === q.correct){
        score++;
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    }
    else{
        showResult();
    }
});

function showResult(){

    let percentage =
    ((score / questions.length) * 100).toFixed(2);

    let result =
    percentage >= 50 ? "PASS 🎉" : "FAIL ❌";

    questionElement.innerHTML = `
        Quiz Completed!<br><br>
        Score: ${score}/${questions.length}<br>
        Percentage: ${percentage}%<br>
        Result: ${result}
    `;

    answerButtons.innerHTML = "";

    nextBtn.textContent = "Play Again";
    nextBtn.style.display = "block";

    nextBtn.onclick = () => {
        location.reload();
    };
}