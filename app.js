let currentQuiz=0;
let score=0;

function startQuiz(){
    if(currentQuiz>=quizQuestions.length){
        document.getElementById("quizArea").innerHTML=`<p>Quiz terminé ! Score : ${score} / ${quizQuestions.length}</p>`;
        updateProgress();
        return;
    }
    const q=quizQuestions[currentQuiz];
    let html=`<p>${q.question}</p>`;
    q.choices.forEach(choice=>{html+=`<button onclick="answerQuiz('${choice}')">${choice}</button> `});
    document.getElementById("quizArea").innerHTML=html;
}

function answerQuiz(selected){
    const q=quizQuestions[currentQuiz];
    if(selected===q.answer) score++;
    currentQuiz++;
    startQuiz();
    updateProgress();
}

let currentExercise=0;
function showExercise(){
    if(currentExercise>=exercises.length) currentExercise=0;
    const ex=exercises[currentExercise];
    document.getElementById("exerciseArea").innerHTML=`<h3>${ex.title}</h3><p>${ex.content}</p>`;
    currentExercise++;
}

function updateProgress(){
    const progressFill=document.getElementById("progressFill");
    let percent=Math.round((score/quizQuestions.length)*100);
    progressFill.style.width=percent+"%";
    document.getElementById("scoreText").innerText=`Score : ${score} / ${quizQuestions.length}`;
}
