
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rightWall, leftWall, bottomWall;
var paperObject;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,650,1000,20);
	//dustbin = new Dustbin(800,565,100,150);
	rightWall = new Dustbin(880,565,20,150)
	leftWall = new Dustbin(700,565,20,150);
	bottomWall = new Dustbin(800,630,200,20);
	paperObject = new Paper(100,640,70);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);
  paperObject.display();
  rightWall.display();
  leftWall.display();
  bottomWall.display();
  ground.display();
  //dustbin.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:900,y:-900});
	 }
   }