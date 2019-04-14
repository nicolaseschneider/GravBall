import DodgeBall from './dodgeball';
import BounceBall from './bounceball';


export default class Spawner{

    constructor(ctx) {

        //
        //visual context
        this.ctx = ctx

        this.x = Math.floor(Math.random() * 400) + 200;
        this.y = Math.floor(Math.random() * 400) + 200;
        this.active = false;


        //
        //enemyType
        const enemyTypes = [new DodgeBall(ctx,this.x,this.y), new BounceBall(ctx,this.x,this.y)]
        this.enemy = enemyTypes[Math.floor(Math.random() * 2)]
        this.frameIDX = 0;

    }




    draw(){

        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = `rgba(50,50,50,${this.frameIDX * 0.005 })`;
        this.ctx.stroke();
        this.ctx.closePath();

        this.frameIDX++;

    }

}