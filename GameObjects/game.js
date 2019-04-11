import Player from './player'

export default class Game{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player(ctx);
        this.gravx = 0.0;
        this.gravy = 1.0;
        this.gravDirection = 0
        //gravity control abilities
        this.canQ = true;
        this.canE = true;
        this.canS = true;

        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.addListeners();

    }
    keyDownHandler(e){
        if(e.key == "Right" || e.key == "ArrowRight" || e.key == "d" || e.key == "D"){
            this.player.keyRight = 1;
        } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a" || e.key == "A"){
            this.player.keyLeft = 1;
        } else if (e.key == "Spacebar" || e.key == " "){

            this.player.keyJump = 1;
        }
        
    }
    keyUpHandler(e){
        if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d" || e.key == "D") {
            this.player.keyRight = 0;
        } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a" || e.key == "A") {
            this.player.keyLeft = 0;
        } else if (e.key == "Spacebar" || e.key == " "){

            this.player.keyJump = 0;
        }

    }
    
    addListeners() {
        document.addEventListener("keydown", this.keyDownHandler)
        document.addEventListener("keyup", this.keyUpHandler)
    }
    draw(){
        const grav = {x: this.gravx, y: this.gravy, direct: this.gravDirection}
        this.player.draw(grav)

    }

}