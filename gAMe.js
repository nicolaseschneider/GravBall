import Game from './GameObjects/game';
import { fadeIn, elementFadeIn } from './GameLogic/opacity'

document.addEventListener('DOMContentLoaded', (e) => {

    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    var buttonActive = false;
    var instructOne = document.getElementById("instruct1")
    var instructTwo = document.getElementById("instruct2")
    var instructThree = document.getElementById("instruct3")
    var instructFour = document.getElementById("instruct4")
    let game = new Game(canvas, ctx);
    let frame = 0;
    // faded
    const startGame = function() {
        playButton.removeEventListener('click', startGame);
        document.removeEventListener('keydown', spacePress);
        playButton.remove();
        game.menu = 0
    }

    const spacePress = function(e) {
        if (e.key === ' ' || e.key === 'Spacebar') {
            playButton.click();
        }
    };
    const playButton = document.createElement("BUTTON")
    playButton.innerText = "P L A Y"
    playButton.id = 'playButton'
    playButton.addEventListener("click", startGame )
    playButton.style
   
    const playGame = setInterval( () => {
        canvas.style.border=`3px solid ${fadeIn(255,0,0,frame)}`

        
        instructOne.style.color = `${fadeIn(255, 255, 255, frame - 80)}`
        instructTwo.style.color = `${fadeIn(255, 255, 255, frame - 110)}`
        instructThree.style.color = `${fadeIn(255, 255, 255, frame - 140)}`
        instructFour.style.color = `${fadeIn(255, 255, 255, frame - 170)}`
        
       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.draw()
        playButton.style.opacity = `${elementFadeIn(frame - 200)}`
        if (game.menu === 1){
            
            if (!buttonActive){
                buttonActive = true;
                document.body.appendChild(playButton)
                document.addEventListener('keydown', spacePress);
        
            }

    
         

        }



        if (game.started === false && game.menu === 0){
            game.started = true;
            setTimeout( ()=>{
                game.endTutorial();
            }, 5000)
        }
        ++frame;
    },15)

})


