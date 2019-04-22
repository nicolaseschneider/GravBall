import Game from './GameObjects/game';
import { fadeIn, elementFadeIn, wavyGradient, rotateGradient } from './GameLogic/opacity'
// import { save } from './highscores';

document.addEventListener('DOMContentLoaded', (e) => {
  
   
    const firebaseConfig = {
        apiKey: "AIzaSyDMyAUaLi0HoaZsTsfFUJ7v0KjPSM5iERc",
        authDomain: "heli-escape.firebaseapp.com",
        databaseURL: "https://heli-escape.firebaseio.com",
        projectId: "heli-escape",
        storageBucket: "heli-escape.appspot.com",
        messagingSenderId: "83868845549"
    };
    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();
    const ref = database.ref('scores');

    const data = {
        name: "$$ EASY MONEY $$",
        score: 420420420
    }
    ref.push(data)
//     var config = {
//         apiKey: "AIzaSyD5da5VdY_xRMVKEMYthAGVmRiekALaEv4",
//     authDomain: "grav-ball-f2b73.firebaseapp.com",
//     databaseURL: "https://grav-ball-f2b73.firebaseio.com",
//     projectId: "grav-ball-f2b73",
//     storageBucket: "grav-ball-f2b73.appspot.com",
//     messagingSenderId: "373906891112"
//     };
//     firebase.initializeApp(config);
//     const database = firebase.database();
//     const ref = database.ref('scores')

//     const saveScore = function(){
//         const newScore = {}
//         newScore.name = document.getElementById("name").value;
//         newScore.score = document.getElementById("score").value;
//         if (newScore.name){
//             ref.push(newScore);
//         }
//         document.getElementById('scoreList').style.display = "none"

//     }
//     function errData (err) {
//         console.log('Error!');
//         console.log(err);
//     };
//     ref.once('value', gotData, errData)

    
//    function gotData (data){
//         let scores = data.val();
//         let scoreList = Object.values(scores);

//         console.log(scoreList)
//         scoreList.sort( (score1, score2) => {
//             return score2.score - score1.score

//         })

//         let highScoreListLeng = Math.min(scoreList.length, 10)
//         const ul = document.getElementById("scoreList");
//         let highScores = scoreList.slice(0,highScoreListLeng)

//         for(let scoreIDX = 0; scoreIDX < highScores.length; scoreIDX++){
//             if (highScores[scoreIDX].name && highScores[scoreIDX].score && !document.getElementById('9')){
            
//                 var name = highScores[scoreIDX].name;
//                 var score = highScores[scoreIDX].score;
//                 let li = document.createElement('li');
//                 li.innerHTML = name + " :" + score;
//                 li.id = scoreIDX
//                 ul.appendChild(li);
//             }
//         }


//     };

    
    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    var buttonActive = false;
    var instructOne = document.getElementById("instruct1");
    var instructTwo = document.getElementById("instruct2");
    var instructThree = document.getElementById("instruct3");
    var instructFour = document.getElementById("instruct4");
    var footer = document.getElementById("footer");
    var icon = document.getElementById("icon");
    var icon2 = document.getElementById("icon2");
    var icon3 = document.getElementById("icon3");
    let game = new Game(canvas, ctx);
    let frame = 0;

    document.getElementById('submit').onclick = () =>{
        saveScore();
    }
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
   
    const playGame = setInterval( () => {
        let border = frame % 360;
        //fadeIn
        canvas.style.opacity = elementFadeIn(frame);
        footer.style.opacity = elementFadeIn(frame);
        instructOne.style.color = `${fadeIn(255, 255, 255, frame - 80)}`
        instructTwo.style.color = `${fadeIn(255, 255, 255, frame - 110)}`
        instructThree.style.color = `${fadeIn(255, 255, 255, frame - 140)}`
        instructFour.style.color = `${fadeIn(255, 255, 255, frame - 170)}`
        //color
        canvas.style.border=`3px solid hsl(${border},45%,76%)`;
        footer.style.color = `hsl(${ border }, 45%, 76%)`;
        icon.style.color = `hsl(${border}, 45%, 76%)`;
        icon2.style.color = `hsl(${border}, 45%, 76%)`;
        icon3.style.color = `hsl(${border}, 45%, 76%)`;

        if (document.getElementById("0")){
            document.getElementById("0").style.background = rotateGradient("linear-gradient(273deg,rgba(210,186,86,1) 12%,rgba(227,203,105,1) 43%,rgba(246,191,93,1) 88%)", border);
            document.getElementById("1").style.background = rotateGradient("linear-gradient(148deg, rgba(187,234,235,1) 3%, rgba(222,215,215,1) 44%, rgba(171,175,175,1) 100%)", border);
            document.getElementById("2").style.background = rotateGradient("linear-gradient(259deg, rgba(254,163,44,1) 3%, rgba(246,112,34,1) 63%, rgba(224,157,47,1) 98%)", border);
        }
        
       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.draw()

        if (game.menu === 1){
            
            if (!buttonActive){
                buttonActive = true;
                document.body.appendChild(playButton)
                document.addEventListener('keydown', spacePress);
        
            }

        } else if (game.started === false && game.menu === 0){
            game.started = true;
            
            
            let music = document.createElement("audio");
            music.src ='Previous-Poaceae.m4a';
            music.setAttribute("preload", "auto");
            music.id = "music"
            music.setAttribute("controls", "none");
            music.setAttribute("autoplay", "true");
            music.loop = true;
            music.style.display = "none";
            document.body.appendChild(music);

            setTimeout( ()=>{
                game.endTutorial();
            }, 5000)

        } else {
            canvas.style.background = wavyGradient(frame)
        }


        ++frame;
    },15)

})


