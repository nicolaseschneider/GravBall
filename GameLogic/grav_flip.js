
export const gravFlipLeft = function (){

    switch(this.gravDirection){

        case 0:
            this.gravDirection = 3;
            this.gravx = -1.0;
            this.gravy = 0.0;
            
            return;
        case 1:
            this.gravDirection = 0;
            this.gravx = 0.0;
            this.gravy = 1.0;
            
            return;
        case 2:
            this.gravDirection = 1;
            this.gravx = 1.0;
            this.gravy = 0.0;
            
            return;
        case 3:
            this.gravDirection = 2;
            this.gravx = 0.0;
            this.gravy = -1.0;
            
            return;
    }
}

export const gravFlipRight = function () {

    switch(this.gravDirection){
        case 0:
            this.gravDirection = 1;
            this.gravx = 1.0;
            this.gravy = 0.0;
            return;
        case 1:
            this.gravDirection = 2;
            this.gravx = 0.0;
            this.gravy = -1.0;
            return;
        case 2:
            this.gravDirection = 3;
            this.gravx = -1.0;
            this.gravy = 0.0;
            return;
        case 3:
            this.gravDirection = 0;
            this.gravx = 0.0;
            this.gravy = 1.0;
            return;
    }
    // this.canQ = false;
}

