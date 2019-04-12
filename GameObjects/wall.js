export default class Wall {

    constructor(ctx,x,y){
        //
        //visual context
        this.ctx = ctx
        //
        //constants
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
    }

    draw(){

        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(255,0,255,0.6)";
        this.ctx.fillRect(this.x, this.y, 20, 20)
        this.ctx.closePath();

    }
}