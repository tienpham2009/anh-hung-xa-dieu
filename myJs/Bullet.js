class Bullet {
    constructor(x,y,r,speed) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = speed;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI * 2,false);
        ctx.fillStyle = "#000000"
        ctx.fill();
        ctx.closePath();
    }

    update(){
        this.draw();
        this.x -= this.speed.x * 10;
        this.y -= this.speed.y * 10;
    }
}





