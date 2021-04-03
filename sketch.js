
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(1100, 475, 10000, 20)
	groundSprite.shapeColor = color("yellow")
	//Create the Bodies Here.

	ground = Bodies.rectangle(100, 430, 10000, 20, {isStatic:true})
	World.add(world, ground)

	side1 = new Dustbin(940, 409, 20, 100)
	side2 = new Dustbin(1130, 409, 20, 100)
	side3 = new Dustbin(1035, 454, 190, 20)

	ball = new Paper(90, 350, 2)

	Engine.run(engine);

	
 
}	


function draw() {
  rectMode(CENTER);
  background(0);

  side1.display()
  side2.display()
  side3.display()

  ball.display()
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{
			x:0.76,
			y:-0.76
		}
		)
	}
}