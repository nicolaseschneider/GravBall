import Player from './player'
import {gravFlipLeft, gravFlipRight, gravFlipUp} from '../GameLogic/grav_flip'
import { rotate } from '../GameLogic/canvas_rotation';
import { onGround } from '../GameLogic/on_ground';
export default class Game{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(ctx);

        //gravity variables
        this.gravx = 0.0;
        this.gravy = 1.0;
        this.gravDirection = 0
        //gravity control abilities
        this.canFlip = true;
        this.rotateStep = 0;


        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.addListeners();

    }
    tileIndex(canvas){
        let index = [];
        
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
        
        } else if (this.canFlip){

            if (e.key == "q" || e.key == "Q") {
                this.canFlip = false;
                gravFlipLeft.call(this);
                rotate.call(this, 270);
            } else if (e.key == "E" || e.key == "e") {
                this.canFlip = false;
                gravFlipRight.call(this);
                rotate.call(this, 90);
            } else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w" || e.key == "W"){
                this.canFlip = false;
                gravFlipUp.call(this)
                rotate.call(this, 180);
            }
        }

    }
    
    addListeners() {
        document.addEventListener("keydown", this.keyDownHandler)
        document.addEventListener("keyup", this.keyUpHandler)
    }
    draw(){
        const grav = {x: this.gravx, y: this.gravy, direct: this.gravDirection}
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(50, 50, 500, 500)
        this.player.draw(grav)
        

    }

}