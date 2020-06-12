const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var polygon1, slingShot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  stand1 = new Ground(600,height,1200,20);

  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);

  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);

  box9 = new Box(390, 55, 30, 40);

  polygon1 = new Polygon(50, 200, 20);

  slingShot = new SlingShot(polygon1, {x: 100, y: 200});
}

function draw() {
  background("black");
  Engine.update(engine);

  stand1.display();

  box1.display();
  box2.display();
  box3.display(); 
  box4.display();
  box5.display();
  box6.display(); 
  box7.display();
  box8.display();
  box9.display();

  polygon1.display();
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}