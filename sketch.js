
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball,ballImage;
var dust1,dust2,dust3;


function preload()
{
	ballImage.loadImage(paper.png);	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground (400,380,800,30)
dust1=new Dustbin(700,360,80,10)
dust2=new Dustbin(745,335,10,60)
dust3=new Dustbin(655,335,10,60)


	Engine.run(engine);
  ball=new Paper(100,360,10);
  ball.addImage(ballImage);
}


function draw() {
  
  background(0);
  ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  ball.display();
}
function keyPressed(){

	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
	}
	
}


