const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground()
    box1=new Box(700,320,70,70)
    box2=new Box(920,320,70,70)
    log1= new Log(810,260,20,300,PI/2)
    pig1= new Pig(810,350)

    box3=new Box(700,240,70,70)
    box4=new Box(920,240,70,70)
    pig2=new Pig(810,220)
    log2=new Log(810,180,20,300,PI/2)

    box5=new Box(810,170,70,70)
    log3=new Log(760,120,20,150,PI/7)
    log4=new Log(870,120,20,150,-PI/7)

    bird=new Bird(300,100)
    
    


   

    
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground.display()
    box1.display()
    box2.display()
    log1.display()
    pig1.display()
    box3.display()
    box4.display()
    log2.display()
    pig2.display()
    box5.display()
    log3.display()
    log4.display()
    bird.display()



    
}