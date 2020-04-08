const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,box;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 box = new Box(random(10,80),300,50,50);
  box2 = new Box(random(100,240),100,50,100)  
ground =new Ground(200,height,400,20)
}

function draw(){

    background(0);
    
    Engine.update(engine);
    


      box.disrect();
      box2.disrect();

    


    for(var i = 0;i<50;i++)
    //Engine.update(engine);
    
    ground.disrect();
}

