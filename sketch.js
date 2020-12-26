const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var box1, pig1;
var backgroundImg, platform;
var constrainedLog ;
var bird;

function preload() {

    backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    constrainedLog = new Log(230,180,80,PI/2);
    

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(100, 100);

    var options = {

        bodyA : bird.body , 
        bodyB : constrainedLog.body,
        stiffness : 0.05,
        length : 7
    
        }
        var chain = Constraint.create(options);
    World.add(world,chain);
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    
    strokeWeight(3);
    line(bird.body.position.x ,bird.body.position.y , constrainedLog.body.position.x , constrainedLog.body.position.y)

    box1.display();
    box2.display();
    box3.display();
    box4.display();

    pig1.display();
    pig3.display();

    log1.display();
    ground.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    constrainedLog.display();
}
