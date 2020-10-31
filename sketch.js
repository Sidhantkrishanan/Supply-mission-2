var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bSide1,bSide2,bSide3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	bSide1Sprite=createSprite(380,650,200,20)
	bSide1Sprite.shapeColor=color("red")

	bSide2Sprite=createSprite(270,610,20,100)
	bSide2Sprite.shapeColor=color("red")

	bSide3Sprite=createSprite(490,610,20,100)
	bSide3Sprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	bSide1 = Bodies.rectangle(380,650,20,200,{isStatic:true})
     World.add(world, bSide1)

	 bSide2 = Bodies.rectangle(270,610,20,200,{isStatic:true})
	 World.add(world, bSide2)

	 bSide3 = Bodies.rectangle(490,610,20,200,{isStatic:true})
	 World.add(world, bSide3)
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	packageBody=Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:false});
	World.add(world, packageBody);
  }
}



