//selecting element
const cScoreEl0=document.getElementById('current--0');
const cScoreEl1=document.getElementById('current--1');
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0=document.querySelector('#score--0');
const score1=document.getElementById('score--1');

const dice=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');



const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    cScore=0;
        activePlayer = activePlayer===0?1:0;//important
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

const init=function(){
    playing=true;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');

    scores=[0,0];
    cScore=0;
    activePlayer=0;
    score0.textContent=0;
    score1.textContent=0;
}
//Starting Coindition
let scores=[0, 0];
let activePlayer=0;
let cScore=0;
let playing=true;
score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden');

//rolling dice
btnRoll.addEventListener('click',function(){
    if(playing){
    const diceEl=Math.trunc(Math.random()*6)+1;
    //display dice
    dice.classList.remove('hidden');
    dice.src=`https://github.com/jonasschmedtmann/complete-javascript-course/blob/master/07-Pig-Game/final/dice-${diceEl}.png?raw=true`;
    
//is it 1 or not
if(diceEl!==1){
cScore += diceEl;//important
document.getElementById(`current--${activePlayer}`).textContent = cScore;//important
}else
{

//1.Add current score to Active player's score
scores[activePlayer]+=cScore;
document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

//2.check if score is >=100
    //finish the game
if(scores[activePlayer]>=50){
    playing=false;
    dice.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }

//3.switch the player
switchPlayer();
}
}
});

//reset the game
btnNew.addEventListener('click', function(){
init();
})



    






    

