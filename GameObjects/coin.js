export default class Coin{

    constructor(ctx){

        this.ctx = ctx;
        this.x = Math.floor(Math.random() * 500) + 65;
        this.y = Math.floor(Math.random() * 500) + 65;
        this.width = 5;
        this.height = 5;
        this.radius = 25;


        this.xSpark = Math.floor(Math.random() * 17) + 1;
        this.xSpark *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        this.ySpark = Math.floor(Math.random() * 17 ) + 1;
        this.ySpark *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

        this.frameindex = 0;
 
        
    }

    buildSpark(){
        if (this.frameindex % 10    === 0){
            this.xSpark = Math.floor(Math.random() * 17) + 1;
            this.xSpark *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            this.ySpark = Math.floor(Math.random() * 17) + 1;
            this.ySpark *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        }

        this.drawStar(this.x + this.xSpark, this.y + this.ySpark, "white")


    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "gold"
        this.ctx.arc(this.x, this.y, 15, 3, 4 * Math.PI);
        this.ctx.fill();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "goldenrod";
        this.ctx.stroke();
        this.ctx.closePath();

        this.buildSpark();
        this.frameindex += 1;

    }



    drawStar(cx, cy, shade) {
        var rotation = Math.PI / 2 * 3  ;
        var x = cx;
        var y = cy;
        var step = Math.PI / 4;

        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy - 5)
        for (let i = 0; i < 4; i++) {
            x = cx + Math.cos(rotation) * 8;
            y = cy + Math.sin(rotation) * 8;
            this.ctx.lineTo(x, y)
            rotation += step;

            x = cx + Math.cos(rotation) * 3;
            y = cy + Math.sin(rotation) * 3;
            this.ctx.lineTo(x, y)
            rotation += step;
        }
        this.ctx.lineTo(cx, cy - 5);
        this.ctx.closePath();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.fillStyle = "goldenrod";
        this.ctx.fill();
    }
}