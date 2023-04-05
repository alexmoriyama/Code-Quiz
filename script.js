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
        question:"Who has the most rings?",
        choices: ["Charles Barkley","Steve Nash","Dirk Nowitzki","Kobe Bryant"],
        answer: "Kobe Bryant",
    },    
    {
        question:"Who leads the NBA in most points scored?",
        choices: ["Kareem Abdul-Jabar","Kobe Bryant","Lebron James","Shaq"],
        answer: "Lebron James",
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
        window.alert("Game Over!")
    }
    },1000)
}

function showQuestions(){

    var questionGrab = quizQuestions[questionGrabIndex]
    var questionTitle = document.querySelector(".question-container")
    var optionsContainer = document.querySelector(".option-container")
    var optionButton = document.querySelector(".option")
    questionTitle.textContent = questionGrab.question
    optionsContainer.innerHTML = ""
    questionGrab.choices.forEach(function(choiceButton,i){
       var choiceIndex = document.createElement("button")
       choiceIndex.setAttribute('class', "option") 
       choiceIndex.setAttribute("value", choiceButton)
       choiceIndex.textContent = i + 1 + ". " + choiceButton
       choiceIndex.addEventListener('click', checkAnswer)
       optionsContainer.appendChild(choiceIndex)
    })
}

function checkAnswer(event){
    if(event.target.id===quizQuestions[questionGrabIndex].answer){
        window.alert("Correct!")
    }else{
        timerClock-=10
    }
    questionGrabIndex++
    showQuestions()
}

// use local storage to enable the initials and score, end the game at the end
