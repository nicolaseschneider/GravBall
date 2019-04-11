export const onGround = function(grav){
    switch(grav.direct){
        case 0:
            if (this.y + this.height + grav.y >= 550) {
                return true;
            } else {
                return false;
            }

        case 1:
            if (this.x + this.width + grav.x >= 550) {
                return true;
            } else {
                return false;
            }            
        
        case 2:
            if (this.y + grav.y <= 50){
                return true;
            } else {
                return false;
            }
        
        case 3:
            if (this.x + grav.x <= 50) {
                return true;
            } else {
                return false;
            }
        
    }
};