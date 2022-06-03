// store the HTML tag in the variable
const heading = document.querySelector('#heading');
const middle = document.querySelector('#middle');



// create h1 element to display title
const gameTitle = document.createElement('h1')
gameTitle.className='title';
heading.appendChild(gameTitle);

// for annimation effect to the title
gameTitle.innerHTML= "<div class=\"words word-1\">\
<span>R</span>\
<span>O</span>\
<span>C</span>\
<span>K</span>\
</div>\
<div class=\"words word-2\">\
<span>P</span>\
<span>A</span>\
<span>P</span>\
<span>E</span>\
<span>R </span>\
</div>\
<div class=\"words word-3\">\
<span>A</span>\
<span>N</span>\
<span>D </span>\
</div>\
<div class=\"words word-4\">\
<span> S</span>\
<span>C</span>\
<span>I</span>\
<span>S</span>\
<span>S</span>\
<span>O</span>\
<span>R</span>\
<span>S</span>\
</div>";

//  create input element for getting data 
//  from the input for how many rounds the
//   user want to play the game
const roundsInpt = document.createElement('input');
roundsInpt.type='number';
roundsInpt.className='inputStyle1';
roundsInpt.setAttribute('min','1');
roundsInpt.setAttribute('max', '8');
roundsInpt.defaultValue='5';
middle.appendChild(roundsInpt); 

// label for user to indentify the input data
const sltdRnds = document.createElement('label');
sltdRnds.textContent='ROUNDS  ';
middle.appendChild(sltdRnds);

// create a start button
const startBtn = document.createElement('button')
startBtn.setAttribute('id', 'startBtn')
startBtn.className='button1';
startBtn.textContent="START";
middle.appendChild(startBtn);


// start button to get the input data from the usr
// and call the function to delete the element from 
// the page and add new element
var numRounds=0;
startBtn.addEventListener('click',function (){
    numRounds = Number(roundsInpt.value);

    rmvElmt(gameTitle);
    rmvElmt(roundsInpt);
    rmvElmt(sltdRnds);
    rmvElmt(startBtn);
    page2()
})

function rmvElmt(elmt){
    elmt.remove();
}


// page2 element cration
// title of the page
const titlePg2 = document.createElement('h1');
titlePg2.textContent='USER vs COMPUTER';
titlePg2.className='title';

const hdgPara = document.createElement('p')
hdgPara.className='title';

const rockBtn = document.createElement('button');
rockBtn.textContent='🪨';
rockBtn.className='optnBtn';

const paperBtn = document.createElement('button');
paperBtn.textContent='📃';
paperBtn.className='optnBtn';

const scissorsBtn = document.createElement('button')
scissorsBtn.textContent='✂️';
scissorsBtn.className='optnBtn';

// element to show the results
const rslt = document.createElement('div');
rslt.setAttribute('id', 'result');

const usrRslt = document.createElement('div');
usrRslt.className='rslt';

const rsltLabl = document.createElement('div');
rsltLabl.className='rsltLabl';

const comRslt = document.createElement('div');
comRslt.className='rslt';

const remainingRounds = document.createElement('div');
remainingRounds.className='title'


// function to append element 
function page2(){
    heading.appendChild(titlePg2);
    hdgPara.textContent=`PLAY ${numRounds} ROUNDS`
    heading.appendChild(hdgPara);
    heading.appendChild(remainingRounds);
    heading.appendChild(rslt);

    rslt.appendChild(usrRslt);
    rslt.appendChild(rsltLabl);
    rslt.appendChild(comRslt);

    middle.appendChild(rockBtn);
    middle.appendChild(paperBtn);
    middle.appendChild(scissorsBtn);
}

const compChoiceArray = ["rock","paper","scissors"];
const emojiObject = {rock:"🪨",paper:"📃",scissors:"✂️"};

// popup new window to show the final result
// and add a button to play again
const popupWin = document.createElement('div');
popupWin.className='popup';
middle.appendChild(popupWin);

const playAginBtn = document.createElement('button');
playAginBtn.textContent='PLAY AGAIN';
playAginBtn.setAttribute('id', 'playAginBtn');


let usrScore = 0;
let comScore = 0;

//rock button
rockBtn.onclick=()=>{
    
    if  (numRounds>0){
        remainingRounds.textContent=`${numRounds-1} PLAY LEFT!!!!`;
        numRounds--;
        usrRslt.classList.add('border1')
        

        let usrPick = "rock";
        let compPick = compChoiceArray[Math.floor(Math.random()*3)]
        let emojiPick = emojiObject[compPick];

        let checkRe = check(usrPick, compPick)

        if (checkRe==="tie"){
            usrRslt.className="border1";
            comRslt.className='border1';
            rsltLabl.textContent= `it's ${checkRe}...` ;
            rsltLabl.setAttribute("style", "color: antiquewhite");
        }else if (checkRe==="win"){
            usrRslt.className="borderwin";
            comRslt.className='borderlosse';
            rsltLabl.textContent= `YOU ${checkRe}!!! 🏆` ;
            rsltLabl.setAttribute("style", "color: darkgreen");
            usrScore++;
        }else if (checkRe==="loose"){
            usrRslt.className="borderlosse";
            comRslt.className='borderwin';
            rsltLabl.textContent= `YOU ${checkRe} 😔` ;
            rsltLabl.setAttribute("style", "color: red");
            comScore++;
        }

        usrRslt.innerHTML=`<p class= \'title\'>USER</p>\
        <h1 class="emoji">🪨</h1>\
        <h3>Score = ${usrScore}</h3>`

        comRslt.classList.add('border1');
        comRslt.innerHTML=`<p class=\'title\'>COMPUTER</p>\
        <h1 class=\"emoji\">${emojiPick}</h1>\
        <h3>Score = ${comScore}</h3>`
    }
    else
    {
        
        popupWin.classList.add('open-popup');
        if (usrScore>comScore){
        popupWin.innerHTML=`<h1 style="font-size:60px;margin-top: -40px;margin-bottom: 10px;"'>🏆</h1>\
        <h1>Congratulation!!! </h1>`;
        }
        else if(usrScore<comScore){
            popupWin.innerHTML=`<h1 sstyle="font-size:60px;margin-top: -40px;margin-bottom: 10px;"'>😭</h1>\
        <h1>Computer win!!! </h1>`;
        }
        else
        {
        popupWin.innerHTML=`<h1 style="font-size:60px;margin-top: -40px;margin-bottom: 10px;"'>🤝</h1>\
        <h1>It's a tie.... </h1>`;
        }
        popupWin.appendChild(playAginBtn);
    }
};

// paper button
paperBtn.onclick=()=>{
    
    if  (numRounds>0){
        remainingRounds.textContent=`${numRounds-1} PLAY LEFT!!!!`;
        numRounds--;
        usrRslt.classList.add('border1')
        

        let usrPick = "paper";
        let compPick = compChoiceArray[Math.floor(Math.random()*3)]
        let emojiPick = emojiObject[compPick];

        let checkRe = check(usrPick, compPick)

        if (checkRe==="tie"){
            usrRslt.className="border1";
            comRslt.className='border1';
            rsltLabl.textContent= `it's ${checkRe}...` ;
            rsltLabl.setAttribute("style", "color: antiquewhite");
        }else if (checkRe==="win"){
            usrRslt.className="borderwin";
            comRslt.className='borderlosse';
            rsltLabl.textContent= `YOU ${checkRe}!!! 🏆` ;
            rsltLabl.setAttribute("style", "color: darkgreen");
            usrScore++;
        }else if (checkRe==="loose"){
            usrRslt.className="borderlosse";
            comRslt.className='borderwin';
            rsltLabl.textContent= `YOU ${checkRe} 😔` ;
            rsltLabl.setAttribute("style", "color: red");
            comScore++;
        }

        usrRslt.innerHTML=`<p class= \'title\'>USER</p>\
        <h1 class="emoji">📃</h1>\
        <h3>Score = ${usrScore}</h3>`

        comRslt.classList.add('border1');
        comRslt.innerHTML=`<p class=\'title\'>COMPUTER</p>\
        <h1 class=\"emoji\">${emojiPick}</h1>\
        <h3>Score = ${comScore}</h3>`
    }
    else
    {
        
        popupWin.classList.add('open-popup');
        if (usrScore>comScore){
        popupWin.innerHTML=`<h1 style="font-size:60px;margin-top: -40px;margin-bottom: 10px;"'>🏆</h1>\
        <h1>Congratulation!!! </h1>`;
        }
        else if(usrScore<comScore){
            popupWin.innerHTML=`<h1 sstyle="font-size:60px;margin-top: -40px;margin-bottom: 10px;"'>😭</h1>\
        <h1>Computer win!!! </h1>`;
        }
        else
        {
        popupWin.innerHTML=`<h1 style="font-size:60px;margin-top: -40px;margin-bottom: 10px;"'>🤝</h1>\
        <h1>It's a tie.... </h1>`;
        }
        popupWin.appendChild(playAginBtn);
    }
};

// sissors button
scissorsBtn.onclick=()=>{
    
    if  (numRounds>0){
        remainingRounds.textContent=`${numRounds-1} PLAY LEFT!!!!`;
        numRounds--;
        usrRslt.classList.add('border1')
        

        let usrPick = "scissors";
        let compPick = compChoiceArray[Math.floor(Math.random()*3)]
        let emojiPick = emojiObject[compPick];

        let checkRe = check(usrPick, compPick)

        if (checkRe==="tie"){
            usrRslt.className="border1";
            comRslt.className='border1';
            rsltLabl.textContent= `it's ${checkRe}...` ;
            rsltLabl.setAttribute("style", "color: antiquewhite");
        }else if (checkRe==="win"){
            usrRslt.className="borderwin";
            comRslt.className='borderlosse';
            rsltLabl.textContent= `YOU ${checkRe}!!! 🏆` ;
            rsltLabl.setAttribute("style", "color: darkgreen");
            usrScore++;
        }else if (checkRe==="loose"){
            usrRslt.className="borderlosse";
            comRslt.className='borderwin';
            rsltLabl.textContent= `YOU ${checkRe} 😔` ;
            rsltLabl.setAttribute("style", "color: red");
            comScore++;
        }

        usrRslt.innerHTML=`<p class= \'title\'>USER</p>\
        <h1 class="emoji">📃</h1>\
        <h3>Score = ${usrScore}</h3>`

        comRslt.classList.add('border1');
        comRslt.innerHTML=`<p class=\'title\'>COMPUTER</p>\
        <h1 class=\"emoji\">${emojiPick}</h1>\
        <h3>Score = ${comScore}</h3>`
    }
    else
    {
        
        popupWin.classList.add('open-popup');
        if (usrScore>comScore){
        popupWin.innerHTML=`<h1 style="font-size:60px;margin-top: -40px;margin-bottom: 10px;"'>🏆</h1>\
        <h1>Congratulation!!! </h1>`;
        }
        else if(usrScore<comScore){
            popupWin.innerHTML=`<h1 sstyle="font-size:60px;margin-top: -40px;margin-bottom: 10px;"'>😭</h1>\
        <h1>Computer win!!! </h1>`;
        }
        else
        {
        popupWin.innerHTML=`<h1 style="font-size:60px;margin-top: -40px;margin-bottom: 10px;"'>🤝</h1>\
        <h1>It's a tie.... </h1>`;
        }
        popupWin.appendChild(playAginBtn);
    }
};




// to play again the same game 
playAginBtn.onclick=()=>{
    numRounds = Number(roundsInpt.value);
    remainingRounds.textContent=`${numRounds} PLAY LEFT!!!!`;
    usrScore=0;
    comScore=0;
    popupWin.classList.remove('open-popup');
};

// this function is to check the user option
// and computer option and return the result
function check(usr,com){
    if (usr===com){
        return "tie"
        //return  "It's a tie..."
    }
    else if (com===compChoiceArray[0] && usr===compChoiceArray[1]){
        return "win"
        //return `You win! ${usr} beats ${com}`
    }
    
    else if (com===compChoiceArray[1] && usr===compChoiceArray[2]){
        return "win"
        //return `You win! ${usr} beats ${com}`
    }
    else if (com===compChoiceArray[2] && usr===compChoiceArray[0]){
        return "win"
        //return `You win! ${usr} beats ${com}`
    }
    else if (com===compChoiceArray[1] && usr===compChoiceArray[0]){
        return "loose"
        //return `You Loose! ${com} beats ${usr}`
    }
    else if (com===compChoiceArray[2] && usr===compChoiceArray[1]){
        return "loose"
        //return `You Loose! ${com} beats ${usr}`
    }
    else if (com===compChoiceArray[0] && usr===compChoiceArray[2]){
        return "loose"
        //return `You Loose! ${com} beats ${usr}`
    }  
}




