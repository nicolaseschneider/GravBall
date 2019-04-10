import Player from './GameObjects/player'


document.addEventListener('DOMContentLoaded', (e) => {
    console.log('yo')
    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    let player = new Player(ctx);
    console.log('working')
    player.draw();
})
