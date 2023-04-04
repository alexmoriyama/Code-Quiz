var timerDiv = document.querySelector("#time")
var timer;
var timerClock
var score = 0
var questionGrabIndex=0
var quizQuestions = [
    {
        question:"Who played for the Lakers?",
        choices: ["Larry Bird","Magic Johnson","Bill Russell","John Stockton"],
        answer: "Magic Johnson",
    },
    {
        question:"Who played for the Lakers?",
        choices: ["Larry Bird","Magic Johnson","Bill Russell","John Stockton"],
        answer: "Magic Johnson",
    }
    // This is the format for the questions repeat for all.
]
var startQuiz = document.querySelector("#start-game")
startQuiz.addEventListener("click",beginQuiz)
function beginQuiz(){
    timerClock = 60
    timerStart()
    startQuiz.style.display="none"

    showQuestions()
}


// Make function for timer
function timerStart(){
    timer = setInterval(function(){
    timerClock--
    timerDiv.textContent = timerClock
    if(timerClock===0){
        clearInterval(timer)
        // invoke lose game function
    }
    },1000)
}

function showQuestions(){
    var questionGrab = quizQuestions[questionGrabIndex]
    var questionTitle = document.querySelector(".question-container")
    var optionsContainer = document.querySelector(".option-container")
    var optionButton = document.querySelector(".option")
    questionTitle.textContent = questionGrab.question

    // Append choices
    // var choices = document.querySelector(".option")
    // for (var i = 0;i<quizQuestions[i].choices.length;i++){
    //     choices.textContent=quizQuestions[i].choices
    //     optionsContainer.append(choices)
    // }
    questionGrab.choices.forEach(function(choiceButton,i){
       var choiceIndex = document.createElement("button")
       choiceIndex.setAttribute('class', "option") 
       choiceIndex.setAttribute("value", choiceButton)
       choiceIndex.textContent = i + 1 + ". " + choiceButton

    //    choiceIndex.onclick = checkAnswer;

       optionsContainer.appendChild(choiceIndex)
    })
}

function checkAnswer(event){
    if(event.target.id===quizQuestions[questionGrabIndex].answer){
        window.alert("Correct!")
    }else{
        time-=10
        showQuestions()
    }
}

// Get the checkAnswer function working properly by displaying the next question, use local storage to enable the initials and score
