class Enemy{
    constructor(x, y, width, height){
        //var options = {
        //    angle:180
        //}
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);
        this.image = loadImage("enemy.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}