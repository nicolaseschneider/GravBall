
export const rotate= function (deg){
    let rotationInterval
    let that = this;
    switch(deg){
    
        case 90:
            rotationInterval = setInterval( function(){
                rotate90.call(that, 1, rotationInterval)
            }, 15)
            break;
        case 180:
            rotationInterval = setInterval(function () {
                rotate180.call(that, 1, rotationInterval)
            }, 15)
            break;

        case 270:
            rotationInterval = setInterval( function(){
                rotate90.call(that, -1, rotationInterval)
                }, 15)
            break;
    }
}

const rotate90 = function (coef, interval) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.translate(this.width / 2, this.width / 2);
    this.ctx.rotate(coef * 10 * Math.PI / 180);
    this.ctx.translate(-this.width / 2, -this.width / 2);
    this.draw();
    if (this.rotateStep >= 8) {
        this.rotateStep = 0;
        clearInterval(interval);
        this.canFlip = true;
        return;
    } else {
        this.rotateStep += 1;
    }
}
