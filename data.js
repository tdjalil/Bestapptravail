const quizQuestions = [];
const exercises = [];

// Maths automatiques
for(let i=0;i<200;i++){
    let a=Math.floor(Math.random()*50)+1;
    let b=Math.floor(Math.random()*50)+1;
    let op=["+","-","×","÷"][Math.floor(Math.random()*4)];
    let answer;
    if(op=="+") answer=a+b;
    if(op=="-") answer=a-b;
    if(op=="×") answer=a*b;
    if(op=="÷") answer=parseInt(a/b);
    quizQuestions.push({question:`Maths: ${a} ${op} ${b} = ?`, choices:[answer,answer+1,answer-1].sort(()=>Math.random()-0.5), answer:answer.toString()});
    exercises.push({title:`Exercice Maths #${i+1}`, content:`Résoudre : ${a} ${op} ${b} = ?`});
}

// Histoire
const historyQ=[{question:"Qui a découvert l'Amérique ?", choices:["Colomb","Napoléon","Louis XIV"], answer:"Colomb"},
{question:"Année Révolution française ?", choices:["1789","1492","1815"], answer:"1789"}];
historyQ.forEach(q=>{quizQuestions.push(q); exercises.push({title:"Exercice Histoire", content:q.question});});

// Français
const frenchQ=[{question:"Synonyme de 'rapide' ?", choices:["vite","lent","gros"], answer:"vite"},
{question:"Conjugue 'manger' futur simple 3e pers", choices:["mangera","mange","mangait"], answer:"mangera"}];
frenchQ.forEach(q=>{quizQuestions.push(q); exercises.push({title:"Exercice Français", content:q.question});});

// Sciences
const scienceQ=[{question:"Formule chimique de l'eau ?", choices:["H2O","CO2","O2"], answer:"H2O"},
{question:"L'eau gèle à ? (°C)", choices:["0","100","50"], answer:"0"}];
scienceQ.forEach(q=>{quizQuestions.push(q); exercises.push({title:"Exercice Sciences", content:q.question});});
