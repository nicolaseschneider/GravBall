//correct for upsidedown
import { onGround } from './on_ground.js';

export default function(grav){
    var moveacc = this.move * this.moveSpeed
    if (grav.direct === 2 || grav.direct === 1){
        moveacc = -moveacc;
    }

    //implement on ground collision
    if(onGround.bind(this, grav)()){

        this.hsp *= 0.865;
        this.vsp *= 0.865;
        this.hsp += -this.keyJump * this.jumpSpeed * grav.x;
        this.vsp += -this.keyJump * this.jumpSpeed * grav.y;
    } else {
        this.hsp += grav.x * this.gravityCoef;
        this.vsp += grav.y * this.gravityCoef;
        moveacc *= 0.2;
    }

    this.hsp += moveacc * (1.0 - Math.abs(grav.x));
    this.vsp += moveacc * (1.0 - Math.abs(grav.y));

    //collision detection
   
    
    if(this.x + this.hsp <= 0 || this.x + this.hsp >= 479){
        while (this.x + Math.sign(this.hsp) <= 0 && this.x + Math.sign(this.hsp) >= 479){
            this.x += Math.sign(this.hsp)
        }
        if (this.x < 0){
            this.x = 0
        } else if (this.x > 479){
            this.x = 479
        }
        this.hsp = -this.hsp/4.0;
  
    }

    if (this.y + this.vsp <= 0 || this.y + this.vsp >= 480) {
        while (this.y + Math.sign(this.vsp) <= 0 && this.y + Math.sign(this.vsp) >= 480) {
            this.y += Math.sign(this.vsp)
        }
        if (this.y < 0) {
            this.y = 0
        } else if (this.y > 480) {
            this.y = 480
        }
        this.vsp = -this.vsp / 4.0;

    }

    //move
    this.x += this.hsp;
    this.y += this.vsp;
} 

