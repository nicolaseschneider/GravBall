export const onGround = function(grav){

    if (this.x + grav.x >= 480 || this.y + grav.y >= 479) {
        return true;
    } else {
        return false;
    }
};