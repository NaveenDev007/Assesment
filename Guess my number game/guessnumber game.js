'use strict'
let numQ=Math.trunc(Math.random()*20)+1;

        
let score=20;
let Highscore=0;
const displayMessage=function(message){
document.querySelector('.message').textContent=message;
}     
document.querySelector('.check').addEventListener(
    'click',function(){
        const guess=Number(document.querySelector('.guess').value);   
        console.log(guess);
        if(guess===numQ){
displayMessage('🎇✨ correct Number');
document.querySelector('body').style.backgroundColor='green';
document.querySelector('.number').style.width='50rem';
document.querySelector('.number').textContent=numQ;
//highScore
if(score>Highscore){
Highscore=score
    document.querySelector('.highscore').textContent=score;
}
}
else if (guess!==numQ){
    displayMessage(guess<numQ?'too low':'too high')
    if(score>0){
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        displayMessage('🥵 We lost the game');
    }
}
    }
)

document.querySelector('.again').addEventListener(
    'click', function(){
//1 channge
numQ=Math.trunc(Math.random()*20)+1;
score=20;
document.querySelector('.guess').value='';
document.querySelector('.number').textContent='?';
 //2 change     
      displayMessage('start guessing');
      document.querySelector('.score').textContent=score;
//3 change 
document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.number').style.width='15rem';
    }
)