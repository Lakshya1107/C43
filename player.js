class Player{
    constructor(x, y, width, height){
        var options = {
            isStatic : true
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.image = loadImage("spaceship.png");
        this.image.scale = 0.15;
        World.add(world, this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}