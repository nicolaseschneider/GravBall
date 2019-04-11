import movementPhysics from '../GameLogic/physics_movement';


export default class Player {
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
        //
        //variables
        this.keyRight = 0;
        this.keyLeft = 0;
        this.hsp = 0;
        this.vsp = 0;
        this.x = 30;
        this.y = 30;
        this.keyJump = 0;
        //
        //abilities
        this.canJump = true;
        //
        //
    }

    draw(grav){
        //calculate movement

        this.move = (this.keyRight - this.keyLeft);
        movementPhysics.bind(this,grav)();
        
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, 20, 20)
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.closePath();


    }

}