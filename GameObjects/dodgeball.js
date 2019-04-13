import movementPhysics from '../GameLogic/physics_movement';
export default class DodgeBall {
    constructor(ctx) {
        //
        //visual context
        this.ctx = ctx
        //
        //constants
        this.radius = 20;
        //
        //variables

        this.hsp = -4;
        this.vsp = -9;
        this.x = Math.floor(Math.random() * 200) + 300;
        this.y = Math.floor(Math.random() * 400) + 100
        this.keyJump = 0;

    }

    physics(){
        if (this.x + this.hsp <= 70 || this.x + this.hsp >= 630) {
            while (this.x + Math.sign(this.hsp) < 70 && this.x + Math.sign(this.hsp) > 630) {
                this.x += Math.sign(this.hsp)
            }
            if (this.x < 70) {
                this.x = 70
            } else if (this.x > 630) {
                this.x = 630
            }
            this.hsp = -this.hsp ;

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
    draw(){
        this.physics()
        this.ctx.beginPath();
        this.ctx.fillStyle = "#991f00"
        this.ctx.arc(this.x, this.y, 20, 0, 2* Math.PI);
        this.ctx.fill();
        this.ctx.strokeStyle = "#991f00";
        this.ctx.stroke();
        this.ctx.closePath();
    }
}