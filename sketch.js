const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand1, ground1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18;
var polygon1, slingShot, message1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  stand1 = new Ground(390,height - 100,200,20);
  stand2 = new Ground(650,height - 200,200,20);
  ground1 = new Ground(400,height,800,20);

  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);

  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);

  box9 = new Box(390, 185, 30, 40);

  box10 = new Box(590, 135, 30, 40);
  box11 = new Box(620, 135, 30, 40);
  box12 = new Box(650, 135, 30, 40);
  box13 = new Box(680, 135, 30, 40);
  box14 = new Box(710, 135, 30, 40);

  box15 = new Box(620, 85, 30, 40);
  box16 = new Box(650, 85, 30, 40);
  box17 = new Box(680, 85, 30, 40);

  box18 = new Box(650, 55, 30, 40);

  polygon1 = new Polygon(100, 280, 40);

  slingShot = new SlingShot(polygon1.body, {x: 150, y: 150});

  message1 = new Message1(400, 15, 580, 25);
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);

  stand1.display();
  stand2.display()
  ground1.display();

  box1.display();
  box2.display();
  box3.display(); 
  box4.display();
  box5.display();
  box6.display(); 
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  polygon1.display();
  slingShot.display();
  message1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
      slingShot.attach(polygon1.body);
  }
}