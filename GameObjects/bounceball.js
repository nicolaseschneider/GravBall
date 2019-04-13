import { onGround } from '../GameLogic/on_ground';
export default class BounceBall {
    constructor(ctx) {
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

        this.hsp = 1;
        this.vsp = 0;
        this.x = Math.floor(Math.random() * 300) + 200;
        this.y = Math.floor(Math.random() * 300) + 200;
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
        this.ctx.fillStyle = "#33ccff";
        this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.strokeStyle = "#33ccff";
        this.ctx.stroke();
        this.ctx.closePath();
    }
}