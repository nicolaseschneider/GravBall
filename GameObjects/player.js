//initial variables

module.exports = class Player {
    constructor(ctx){
        //
        //visual context
        this.ctx = ctx
        //
        //constants
        this.gravityCoef = 0.3;
        this.moveSpeed = 2;
        this.jumpSpeed = 8;
        this.hp = 1;
        this.acceleration = 1;
        //
        //variables
        this.keyRight = 0;
        this.keyLeft = 0;
        this.hsp = 0;
        this.vsp = 0;
        this.x = 30;
        this.y = 30;
        //
        //abilities
        this.canQ = true;
        this.canE = true;
        this.canS = true;
        this.canJump = true;
        //
        //
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.rect(30, 30, 20, 20)
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.closePath();


    }

}