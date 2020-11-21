 var paper1;
 var dustbin1; 
 var ground1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
binImg = loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
    world = engine.world;
	

	//Create the Bodies Here.
paper1 = new Paper(200, 450, 70);
ground1 =new Ground(width/2,670,width,20);
bin = createSprite(1077,590,20,20);
bin.addImage(binImg);
bin.scale = 0.45;

binPart1 = new Dustbin(1017,595,10,120);
binPart2 = new Dustbin(1077,655,130,10);
binPart3 = new Dustbin(1139,595,10,120);

var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  })

  Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);
  
  paper1.display();
  binPart3.display();
  binPart2.display();
  binPart1.display();
  ground1.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:70, y:-70})
	}
}

