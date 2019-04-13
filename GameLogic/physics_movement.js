//correct for upsidedown
import { onGround } from './on_ground.js';
import { callbackify } from 'util';

export default function(grav){
    var moveacc = this.move * this.moveSpeed
    if (grav.direct === 2 || grav.direct === 1){
        moveacc = -moveacc;
    }

    //implement on ground collision
    if(onGround.bind(this, grav)()){

        this.hsp *= 0.84;
        this.vsp *= 0.84;
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
   
    
    if(this.x + this.hsp <= 50 || this.x + this.hsp >= 630){
        while (this.x + Math.sign(this.hsp) < 50 && this.x + Math.sign(this.hsp) > 630){
            this.x += Math.sign(this.hsp)
        }
        if (this.x < 50){
            this.x = 50
        } else if (this.x > 630){
            this.x = 630
        }
        this.hsp = -this.hsp/4.0;
  
    }

    if (this.y + this.vsp <= 50 || this.y + this.vsp >= 630) {
        while (this.y + Math.sign(this.vsp) <= 0 && this.y + Math.sign(this.vsp) >= 630) {
            this.y += Math.sign(this.vsp)
        }
        if (this.y < 50) {
            this.y = 50
        } else if (this.y > 630) {
            this.y = 630
        }
        this.vsp = -this.vsp / 4.0;

    }

    //move
    this.x += this.hsp;
    this.y += this.vsp;
} 



