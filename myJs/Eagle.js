class Eagle {
    constructor(x, y, srcUrl) {
        this.frameId = 0;
        this.frameCount = 28;
        this.loaded = false;
        this.speed = 2;
        this.x = x;
        this.y = y;
        this.width = 250;
        this.height = 222;

        this.img = new Image();
        this.img.src = srcUrl;
        this.img.onload = () => {
            this.loaded = true;
        };

    }

    update() {
        this.frameId++;
        this.frameId = this.frameId % this.frameCount;
    }

    draw() {
        cvs.width = cvs.width;
        ctx.beginPath()
        ctx.drawImage(
            this.img,
            this.frameId * this.width,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            100,
            100);
        ctx.closePath();
        ctx.fill();
    }


    run() {
        if (this.loaded === false) return;
        this.draw()
        this.update();
        this.x += this.speed;
        if (this.x >= 700) {
            this.x = 0;
        }
        gun.drawGun();
    }

    move(evt) {

        switch (evt.keyCode) {
            case 83 :
                this.y += this.speed;
                break;
            case 87:
                this.y -= this.speed;

                break;
            case 65:
                this.x -= this.speed;
                break;
            case 68 :
                this.x += this.speed;
                break;

        }
    }

}

let eagle = [];

function spawnEagle() {
    setInterval(() => {
        let x = Math.random() * 600;
        let y = Math.random() * 200;
        let url = "picture/eagle.png"
        eagle.push(new Eagle(x, y, url))

    }, 2000)
}

spawnEagle();







