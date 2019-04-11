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
        this.width = 20;
        this.height = 20;
        //
        //variables
        this.keyRight = 0;
        this.keyLeft = 0;
        this.hsp = 0;
        this.vsp = 0;
        this.x = 75;
        this.y = 75;
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
        
        //Draw player at updated position
        this.ctx.beginPath();
        this.ctx.fillStyle = "#66ff66";
        this.ctx.fillRect(this.x, this.y, 20, 20)
        this.ctx.closePath();


    }

}