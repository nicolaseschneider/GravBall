import Player from './player';
import {gravFlipLeft, gravFlipRight} from '../GameLogic/grav_flip';
import { rotate } from '../GameLogic/canvas_rotation';
import { collisionBallCheck } from '../GameLogic/collision';
import Spawner from './spawner';
import Coin from './coin';
export default class Game{
    constructor(canvas, ctx){
        this.started = false;
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(ctx);
        this.score = 0;
        this.menu = 1;
        //
        //entities
        this.money = new Coin(ctx);
        this.entities = [this.money];
        //  
        //gravity variables
        this.gravx = 0.0;
        this.gravy = 1.0;
        this.gravDirection = 0
        //
        //gravity control abilities
        this.canFlip = true;
        this.rotateStep = 0;
  
        this.frameIDX = 0;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.addListeners();

    }

    Opacity(){
        return Math.min(this.frameIDX * 0.005, 1)
    }
    startGame(){
        this.money = new Coin(ctx);
        this.entities = [this.money];
        this.player = new Player(ctx);
    }

   
    keyDownHandler(e){
        if(e.key == "Right" || e.key == "ArrowRight" || e.key == "d" || e.key == "D"){
            this.player.keyRight = 1;
        } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a" || e.key == "A"){
            this.player.keyLeft = 1;
        } else if (e.key === ' ' || e.key === 'Spacebar' || e.key == "Up" || e.key == "ArrowUp" || e.key == "w" || e.key == "W") {
            this.player.keyJump = 1;
        }
        
    }


    keyUpHandler(e){
        if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d" || e.key == "D") {
            this.player.keyRight = 0;
        } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a" || e.key == "A") {
            this.player.keyLeft = 0;
        } else if (e.key == "Spacebar" || e.key == " " || e.key == "Up" || e.key == "ArrowUp" || e.key == "w" || e.key == "W"){
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
                gravFlipUp.call(this);
                rotate.call(this, 180);
            } else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s" || e.key == "S"){
                if (this.gravDirection === 0) {
                    this.player.vsp += 25
                } if (this.gravDirection === 2){
                    this.player.vsp -= 25
                } if (this.gravDirection === 3){
                    this.player.hsp -= 25
                } if (this.gravDirection === 1){
                    this.player.hsp += 25
                }
            }
        } 

    }
    endTutorial(){
        this.entities.unshift(new Spawner(this.ctx))
    }

    activateSpawner(spawner, i){
        spawner.active = true;

        setTimeout( ()=>{
            this.entities[i] = spawner.enemy
            setTimeout( ()=>{
                this.entities.unshift(new Spawner(this.ctx))
            }, 7000)
        }, 2000)

    }
    
    addListeners() {
        document.addEventListener("keydown", this.keyDownHandler)
        document.addEventListener("keyup", this.keyUpHandler)
    }
    
    
    draw(){
        switch(this.menu){
            case 0:
                const grav = {x: this.gravx, y: this.gravy, direct: this.gravDirection};
                this.ctx.fillStyle = "#efefef";
                this.ctx.fillRect(50, 50, 600, 600);
                
                document.getElementById("score-card").innerHTML = "Score: " + this.score
                
                this.entities.forEach( (thing, i) => {
                    if (thing instanceof Coin){
                        if(collisionBallCheck(this.player, thing)){
                            this.entities = this.entities.slice(0,i).concat(this.entities.slice(i+1));
                            this.entities.push(new Coin(this.ctx));
                            this.score += 1;
                            document.getElementById("score-card").innerHTML = "Score: " + this.score
                        }
                        
                    } else if(thing instanceof Spawner){
                        if(!thing.active && this.activateSpawner(thing, i)){}
                    } else {
                        if(collisionBallCheck(this.player, thing) && !this.lose){

                            this.lose = true;
                            this.menu = 2;
                            // document.location.reload(true)
                        }
                        
                    }
                    thing.draw(grav)
                    
                }); 
                this.player.draw(grav);
                break;
            case 1: 
                let color = this.frameIDX
                while (color > 360){
                    color -= 360;
                };
                this.ctx.beginPath();
                
                this.ctx.fillStyle = "black";
                this.ctx.fillRect(50, 50, 600, 600);
                this.ctx.font = "48px Orbitron";
                this.ctx.strokeStyle = `hsl(${color},45%,76%)`
                this.ctx.lineWidth = 3;
                this.ctx.textAlign = "center"
                this.ctx.strokeText("Grav Ball", this.canvas.width/2, this.canvas.width/2 )

                this.ctx.closePath();
                break;
            case 2:
 
                this.ctx.fillStyle = "#efefef";
           
                document.getElementById("form").style.display = 'flex';
                document.getElementById("score").value = this.score
                this.entities = [];
                break;

            
            
        }
        this.frameIDX += 1;
        
    }
}