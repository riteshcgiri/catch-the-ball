const ground = document.querySelector('.ground');
const yourPlayer = document.querySelector('.left-player');
let cTop = 50;
let cBot = 609;
let cPos = 5;
document.addEventListener('keydown', (keyIs)=>{
    if(keyIs.code === 'ArrowUp'){
        if (cPos > 5) cPos -= 1.5;
    }
    else if(keyIs.code === 'ArrowDown'){
        if (cPos < 87) cPos += 1.5;  
    }
    yourPlayer.style.top = cPos + '%';
    
});
