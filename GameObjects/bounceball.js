import { onGround } from '../GameLogic/on_ground';
export default class BounceBall {
    constructor(ctx,x,y) {
        //
        //visual context
        this.ctx = ctx
        //
        //constants
        this.gravityCoef = 0.2;
        this.moveSpeed = 3;
        this.jumpSpeed = 10;
        this.hp = 1;
        this.width = 40;
        this.height = 40;
        this.radius = 20;
        //
        //variables
        let deltaX = Math.floor(Math.random() * 6) + 1;
        deltaX *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        let deltaY = Math.floor(Math.random() * 6) + 1;
        deltaY *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

        this.hsp = deltaX;
        this.vsp = deltaY;
        this.x = x;
        this.y = y;
        this.keyJump = 1;

    }

    physics(grav) {
        
            this.hsp += grav.x * this.gravityCoef;
            this.vsp += grav.y * this.gravityCoef;


        if (this.x + this.hsp <= 70 || this.x + this.hsp >= 630) {
            while (this.x + Math.sign(this.hsp) < 70 && this.x + Math.sign(this.hsp) > 630) {
                this.x += Math.sign(this.hsp)
            }
            if (this.x < 70) {
                this.x = 70
            } else if (this.x > 630) {
                this.x = 630
            }
            this.hsp = -this.hsp;

        }
        if (this.y + this.vsp <= 70 || this.y + this.vsp >= 630) {
            while (this.y + Math.sign(this.vsp) <= 0 && this.y + Math.sign(this.vsp) >= 630) {
                this.y += Math.sign(this.vsp)
            }
            if (this.y < 70) {
                this.y = 70
            } else if (this.y > 630) {
                this.y = 630
            }
            this.vsp = -this.vsp;

        }
        this.x += this.hsp;
        this.y += this.vsp;

    }
    draw(grav) {
        this.physics(grav)
        this.ctx.beginPath();
        this.ctx.fillStyle = "#0000ff";
        this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "rgba(0,0,0,1)";
        this.ctx.stroke();
        this.ctx.closePath();
    }
}