import Player from './GameObjects/player'
var gravityDirect = 0;
var gravX = 0.0;
var gravY = 1.0;
var score = 0;


document.addEventListener('DOMContentLoaded', (e) => {
    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    let player = Player.new(ctx);
    console.log('working')
    player.draw();
})
