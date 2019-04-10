//initial variables

export default class Player {
    constructor(){
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
        //
        //abilities
        this.canQ = true;
        this.canE = true;
        this.canS = true;
        this.canJump = true;
    }

}
//
//abilities
//