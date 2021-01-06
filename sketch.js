const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var player, backgroundImg;
var engine, world;
var bullet;

function preload(){
    backgroundImg = loadImage("bg.png");
}    

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(700, 1200);
    player = new Player(350, 1100, 150, 180);
    bullet = new Bullet(350, 100, 20, 20);
    
    //enemy = new Enemy(350, 200, 75, 85);
    Engine.run(engine);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    player.display();
    if(keyDown("LEFT_ARROW")){
        player.x=player.x-10;
    }
    else if(keyDown("RIGHT_ARROW")){
        player.x=player.x+10;
    }
    if(keyWentDown("UP_ARROW")){
        bullet = new Bullet(350, 100, 15, 15);
        bullet.display();
    }
    //enemy.display();
    drawSprites();
}

/*function keyWentDown(){
    if(keyCode === 39){
        player.x=player.x+10;
    }
    else if(keyCode === 37){
        player.x=player.x-10;
    }
}*/

/*function keyPressed(){
    if(keyCode === 38){
        bullet = new Bullet(350, 100, 20, 20);
    //    bullet.velocityY = -10;
    }
}*/