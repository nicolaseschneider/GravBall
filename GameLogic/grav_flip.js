export const gravFlipLeft = function (){
    if (!this.canE){
        return;
    }
    if (this.gravDirection === 0){
        this.gravDirection = 3;
        this.gravx = -1.0;
        this.gravy = 0.0;
        //rotate the camera here
        
    } else if (this.gravDirection === 1){
        this.gravDirection = 0;
        this.gravx = 0.0;
        this.gravy = 1.0;
        //rotate
    }


    return newGrav
}