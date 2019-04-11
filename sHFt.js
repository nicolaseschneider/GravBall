import Game from './GameObjects/game';


document.addEventListener('DOMContentLoaded', (e) => {
    console.log('yo')
    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    let game = new Game(canvas, ctx);
    window.gravityDirect = 0

    setInterval( () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.draw()

    },15)

})
