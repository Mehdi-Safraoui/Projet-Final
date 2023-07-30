
let questions = [
    {
        question:"Qu'est-ce que la pleine conscience ?",
        answers:[
            { text: "Être conscient de ses pensées négatives",correct:false},
            { text: "Se concentrer sur le passé et les regrets",correct:false},
            { text: "Être conscient du moment présent et de ses sensations",correct:true},
            { text: " Ignorer complètement ses émotions",correct:false},

        ]
    },
    {
        question:"Quel est l'un des avantages du coaching en bien-être ?",
        answers:[
            { text: "Fournir un diagnostic médical pour les troubles mentaux",correct:false},
            { text: "Offrir des médicaments pour traiter la dépression",correct:false},
            { text: " Aider à améliorer l'estime de soi et la confiance en soi",correct:true},
            { text: "Fournir des solutions rapides pour résoudre tous les problèmes",correct:false},

        ]
    },
    {
        question:"Pourquoi est-il important de gérer le stress ?",
        answers:[
            { text: " Le stress n'a pas d'impact sur notre santé mentale",correct:false},
            { text: " Le stress peut contribuer à des problèmes de santé mentale tels que l'anxiété et la dépression",correct:true},
            { text: " Le stress n'affecte que notre bien-être physique",correct:false},
            { text: "Le stress n'a pas d'effets durables sur notre vie quotidienne",correct:false},

        ]
    },
    {
        question:"Quels sont les signes de bien-être mental ?",
        answers:[
            { text: " Se sentir épuisé tout le temps",correct:false},
            { text: " Éviter les interactions sociales",correct:false},
            { text: " Avoir des relations interpersonnelles positives",correct:true},
            { text: " Se sentir constamment démotivé",correct:false},

        ]
    },
    {
        question:"Quelle est l'importance de la communication émotionnelle ?",
        answers:[
            { text: "Éviter toute expression d'émotions",correct:false},
            { text: "Communiquer de manière honnête et ouverte",correct:true},
            { text: "Cacher ses émotions à tout moment",correct:false},
            { text: "Éviter de parler de ses sentiments avec les autres",correct:false},

        ]
    }
];

let questionElement = document.getElementById("question") 
let answerButtons = document.getElementById("answer-buttons")
let nextButton = document.getElementById("next-btn")

let CurrentQuestionIndex = 0
let score = 0

function startQuiz(){
    CurrentQuestionIndex = 0
    score = 0
    nextButton.innerHTML="Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let CurrentQuestion= questions[CurrentQuestionIndex]
    let questionNo = CurrentQuestionIndex + 1 
    questionElement.innerHTML = questionNo + "." + CurrentQuestion.question

    CurrentQuestion.answers.forEach(answer => {
        const button= document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
    })
}

function resetState(){
    nextButton.style.display="none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    let selectedBtn = e.target
    let isCorrect = selectedBtn.dataset.correct === "true"

    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled= true
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play again"
    nextButton.style.display="block"
}

function handleNextbutton(){
    CurrentQuestionIndex++
    if(CurrentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener("click",()=>{
    if(CurrentQuestionIndex < questions.length){
        handleNextbutton()
    }else{
        startQuiz()
    }
})
startQuiz();
