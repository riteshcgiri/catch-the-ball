const score = document.querySelector('.score-board');
const optionScreen = document.querySelector('.option-screen');

const play = document.querySelector('.play');
const pause = document.querySelector('.pause-btn');
const ball = document.querySelector('.ball');

const inputs = document.querySelectorAll('input[type="radio"]');
const labels = document.querySelectorAll('.diff');

const range = document.querySelector('.range');
const rangeValue = document.querySelector('.range-value');
const crrValue = document.querySelector('#crrValue');
let diff, interval ;

// random number genarator
function randi(mn, mx) {
   return Math.ceil(Math.random() * mx - mn );
}

// giving each difficulty it's number
labels.forEach((lbl)=>{
    lbl.addEventListener('click',()=>{
        // console.log(lbl.textContent)
        switch(lbl.textContent){
            case 'Kid?' :
                diff = 2000;
                break;
            case 'Adult?' :
                diff = 1500;
                break;
            case 'Men?' :
                diff = 1000;
                break;
            case 'Legend?' :
                diff = 500; 
                break;
            case 'Impossible!' :
                diff = 250;
                break;                       
        }
        // console.log(diff)
    })
});

// currently playing
function playing(diff){

    // genarate random number according to
   interval = setInterval(() => {
        // console.log(randNum);
        ball.style.top = randi(1, 100) + '%';
        ball.style.left = randi(1, 100) + '%';
    }, diff);
    
    let cScore = 0;
    ball.addEventListener('click',()=>{
        cScore += 10; 
        score.textContent = `Score : ${cScore}`;        
    });

}
// function to hide start page
function hideOpts() {
    optionScreen.style.display = "none";
}

// checking is mouse clicking on slider or not
range.addEventListener('click', (dets)=>{
    slider(dets);
});

// function to set ball size
function slider(dets) {
    let rg = range.getBoundingClientRect();
    let boundX =  Math.floor(rg.x);
    let startPoint = Math.floor(dets.clientX) - boundX + 1;
    let perWidth = (startPoint / range.offsetWidth) * 100 ;
    crrValue.textContent = `${Math.ceil(perWidth)}`;
    rangeValue.style.width = `${Math.ceil(perWidth)}%`;
    // agar user ball ka size 6 se kam select karta hai to ball default size lagi otherwise user ki input size legi
    if(Math.ceil(perWidth) > 6){
        ball.style.width = `${Math.ceil(perWidth)}px`;
        ball.style.height = `${Math.ceil(perWidth)}px`;
    }
    else{
        ball.style.width = `${Math.ceil(25)}px`;
        ball.style.height = `${Math.ceil(25)}px`;

    }
}

// function to set slider size
function preSlider(dets) {
    let rg = range.getBoundingClientRect();
    let boundX =  Math.floor(rg.x);
    let startPoint = Math.floor(dets.clientX) - boundX + 1;
    let perWidth = (startPoint / range.offsetWidth) * 100 ;
    range.style.setProperty('--itsWidth', `${Math.ceil(perWidth)}%`)
}
// button to start game
play.addEventListener('click', ()=>{
    hideOpts();
    // checking is any difficulty is selected or not
    inputs.forEach((inpt) =>{
        if (inpt.checked) {
            // custom speed
            playing(diff)
        }
        // default speed
        playing(2000)
    });
});

//  checking is mouse moving on slider or not
range.addEventListener('mousemove',(dets)=>{
    preSlider(dets)
 }) 
 range.addEventListener('mouseleave',(dets)=>{
    range.style.setProperty('--itsWidth', `0`)
 }) 

//  game pause btn function still have to made
pause.addEventListener('click',()=>{
    clearInterval(interval);
    // interval = null;
    console.log(interval)
});


// bug found at ball size slider






// other ball size formula -->

//     const ballSize = document.querySelector('#ballSize');
//     ballSize.addEventListener('click', ()=>{
//     ball.style.width = `${ballSize.value}px`;
//     ball.style.height = `${ballSize.value}px`;
    
// });