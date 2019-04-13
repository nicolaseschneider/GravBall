import DodgeBall from './dodgeball';
import BounceBall from './bounceball';


export default class Spawner{

    constructor(ctx) {

        //
        //visual context
        this.ctx = ctx

        this.x = Math.floor(Math.random() * 400) + 100;
        this.y = Math.floor(Math.random() * 400) + 100;
        this.active = false;


        //
        //enemyType
        const enemyTypes = [new DodgeBall(ctx,this.x,this.y), new BounceBall(ctx,this.x,this.y)]
        this.enemy = enemyTypes[Math.floor(Math.random() * 2)]

    }

    


    draw(){

        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = "rgba(0,0,0,1)";
        this.ctx.stroke();
        this.ctx.closePath();

    }

}