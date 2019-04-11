import Player from './player';
import Wall from './wall';
import {gravFlipLeft, gravFlipRight, gravFlipUp} from '../GameLogic/grav_flip';
import { rotate } from '../GameLogic/canvas_rotation';

export default class Game{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(ctx);
        //
        //canvas square cells
        this.cellArea = 20;
        this.cellsX = 540 / this.cellArea;
        this.cellsY = 540 / this.cellArea;

        this.grid = this.buildGrid();
        console.log(this.grid)
        this.populateGrid();

        //
        //gravity variables
        this.gravx = 0.0;
        this.gravy = 1.0;
        this.gravDirection = 0
        //
        //gravity control abilities
        this.canFlip = true;
        this.rotateStep = 0;


        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.addListeners();

    }
    buildGrid(){
        let grid = new Array(this.cellsX);
        for (let i = 0; i < grid.length; i++){
            grid[i] = new Array(this.cellsY);
        }
        return grid
    }

    placePlayerOnGrid(){
        //round to the nearest 20
        let xCoord = Math.ceil((Math.round(this.player.x)) / 20) * 20
        let yCoord = Math.ceil((Math.round(this.player.y)) / 20) * 20
        //convert from rounded number to array index
        let x = (xCoord / 20) - 1
        let y = (yCoord / 20) - 1
        //place on game grid, have player track its own position
        this.player.xcoord = x;
        this.player.ycoord = y;
        this.grid[y][x] = (this.player);
    }


    populateGrid(){
        let row;

        for( let i = 0; i < this.grid.length; i++){
            row = this.grid[i] 
            for( let j = 0; j < this.grid.length; j++){

                switch((i * j) % 26){
                    case 0:
                        this.grid[i][j] =  new Wall(this.ctx, (20 * (j + 1)) + 10, (20 * (i + 1)) + 10);
                        break;
                    case 26:
                        this.grid[i][j] = new Wall(this.ctx, (20 * (j + 1)) + 30, (20 * (i + 1)) + 40); 
                        break;  

                }
            }
        }
    }
    keyDownHandler(e){
        if(e.key == "Right" || e.key == "ArrowRight" || e.key == "d" || e.key == "D"){
            this.player.keyRight = 1;
        } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a" || e.key == "A"){
            this.player.keyLeft = 1;
        } else if (e.key == "Spacebar" || e.key == " "){
            this.player.keyJump = 1;
        } else if (e.key == "p" || e.key == "P") {
            console.log(this.player.ycoord);
            console.log(this.player.xcoord);
            console.log(this.grid);
        }
        
    }

    drawGrid(){
        let row;
        for (let i = 0; i < this.grid.length; i++) {
            row = this.grid[i]
            for (let j = 0; j < row.length; j++) {
                if (this.grid[i][j] instanceof Wall){
                    this.grid[i][j].draw();
                }
            }
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
                gravFlipUp.call(this);
                rotate.call(this, 180);
            }
        } 

    }
    
    addListeners() {
        document.addEventListener("keydown", this.keyDownHandler)
        document.addEventListener("keyup", this.keyUpHandler)
    }
    draw(){
        const grav = {x: this.gravx, y: this.gravy, direct: this.gravDirection};
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(50, 50, 500, 500);
        this.drawGrid();
        this.player.draw(grav);
        this.placePlayerOnGrid();

        

    }

}