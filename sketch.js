const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

 var backgroundImg
 var kid , kidImg ;
 var snow1, snow2, snow3, snow4, snow5;

 function preload (){
  backgroundImg = loadImage("snow2.jpg")
  kidImg = loadImage("Kid.png")

 }

 function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

  kid = createSprite(200, 250, 30, 30)
  kid.scale = 0.1;

  snow1 = new Snow(100, 100, 10, 10);
  snow2 = new Snow(200, 50, 10, 10);
  snow3 = new Snow(300, 300, 10, 10);
  snow4 = new Snow(700, 300, 10, 10);
  snow5 = new Snow(700, 250, 10, 10);

}

function draw() {
  background(backgroundImg);  

  if(keyDown(RIGHT_ARROW)){
    kid.x = kid.x + 10
  }

  if(keyDown(LEFT_ARROW)){
    kid.x = kid.x - 10
  }

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();

  kid.display();

  drawSprites();
   
  kid.addImage(kidImg);

}