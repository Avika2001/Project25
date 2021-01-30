
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	
var world;
var paper,pImage;

function preload() {
	pImage = loadImage ("sprites/paper.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper=new Paper(200,660,50,50);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}


function keyPressed() {
if(keyCode === UP_ARROW){
	Matter.Body.setStatic(paper,false)
	paper.body.position.x = 1200
	paper.body.position.y = 650
}

}
