import movementPhysics from '../GameLogic/physics_movement';


export default class Player {
    constructor(ctx){
        //
        //visual context
        this.ctx = ctx
        //
        //constants
        this.gravityCoef = 0.8;
        this.moveSpeed = 1.75;
        this.jumpSpeed = 20.5;
        this.hp = 1;
        this.width = 20;
        this.height = 20;
        this.radius = 10;
        //
        //variables
        this.keyRight = 0;
        this.keyLeft = 0;
        this.keyDown = 0;
        this.hsp = 0;
        this.vsp = 0;
        this.x = 75;
        this.y = 75;
        this.keyJump = 0;
  
    }

    draw(grav){
        //calculate movement

        this.move = (this.keyRight - this.keyLeft);
        movementPhysics.call(this,grav);
        
        //Draw player at updated position
        this.ctx.beginPath();

        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, 20, 20)
        


        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x+10, this.y+10, 10, 10)

        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, 10, 10)
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x+10, this.y, 10, 10)
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(this.x, this.y+10, 10, 10)


      
        this.ctx.closePath();


    }

}