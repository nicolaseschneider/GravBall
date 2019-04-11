export const onGround = function(grav){
    switch(grav.direct){
        case 0:
            if (this.y + grav.y >= 525) {
                return true;
            } else {
                return false;
            }

        case 1:
            if (this.x + grav.x >= 525) {
                return true;
            } else {
                return false;
            }            
        
        case 2:
            if (this.y + grav.y <= 55){
                return true;
            } else {
                return false;
            }
        
        case 3:
            if (this.x + grav.x <= 55) {
                return true;
            } else {
                return false;
            }
        
    }
};