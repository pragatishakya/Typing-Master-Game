let wordInput= document.getElementById("word-input")
let currentWord=document.getElementById("current-word")
let scoreDisplay= document.getElementById("score")
let timeDisplay= document.getElementById("time")
let message= document.getElementById("message")

let time=6
let score=0

const words=['hat',
'butterscotch',
'vanilla',
'strawberry',
'perfect',
'afghanistan',
'current',
'attendance',
'playful',
'cocktail',
'developer',
'javascript',
'nutrition',
'revolver',
'establishment',
'stubborn',
'investigate',
'symptoms',
'laughter',
'definition',
'space',
'master',
'magic'];

window.addEventListener("DOMContentLoaded", init)

function init(){
    showWord(words)  
    wordInput.addEventListener("input",startMatch)  
    setInterval(countdown,1000)
    setInterval(checkStatus,50)
}
function showWord(words){
    const randomIndex=Math.floor(Math.random()*words.length)
    currentWord.innerHTML=words[randomIndex]
    time=6
}
function startMatch(){
    if(matchWords()){
        showWord(words)
        wordInput.value= ''
        message.innerHTML="Correct!!"
        score++;
    }    
    else{
        message.innerHTML='Incorrect!!'
        score=-1
    }
    scoreDisplay.innerHTML=score
}
function matchWords(){
    if(currentWord.innerHTML=== wordInput.value){
        return true;
    }else{
        return false;
    }
}
function countdown(){
    if(time>0){
        time--
    }
    timeDisplay.innerHTML=time
}
function checkStatus(){
    if(time===0){
        message.innerHTML="GAME OVER"
    }
}