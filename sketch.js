const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bird, birdImage;
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var ground2;
var ground3;
var ground4;
var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
backgroundImg = loadImage("h.png");
}

function setup(){
    var canvas = createCanvas(1100,560);
    engine = Engine.create();
    world = engine.world;

     
    ground = new Ground(600,418,1200,50);
    platform = new Ground(150, 340, 300, 150);


    ground2 = new Ground2(600,0,1200,10);
    ground3 = new Ground2(0,200,10,400)
    ground4 = new Ground2(1200,200,10,390)
 

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
  
        background(backgroundImg);
    
        noStroke();
        textSize(32)
        fill("white")
        textFont("impact");
        text("Score  " + score, width-300, 50)
        text("ANGRY BIRDS", 50, 480)
        textFont("bernard MT Condensed");
        textSize(23)
        text("Drag the Angry Bird and aim it at the Leonard Pigs, and destroy both of them. ", 50, 510)
        text("PRESS SPACE TO GET ONE MORE CHANCE ! ", 50, 540)   
        textFont("mistral regular");
        textSize(35)
        text("- VibhuG", 950, 540)

    if(score === 400 ){
        fill("black");
         textSize(50);
         textFont("bernard MT Condensed");
        text("You Won!",500,200)
    }

    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
    ground3.display();
    ground4.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed<1){
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x : 200, y:50})
       slingshot.attach(bird.body);
    }
}

