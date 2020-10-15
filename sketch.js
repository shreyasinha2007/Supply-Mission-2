var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, basesprite, side1sprite, side2sprite;
var base, side1, side2;
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
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	basesprite= createSprite(400, 645, 200, 20);
	basesprite.shapeColor= color("red");

	base= Bodies.rectangle(width/2, 645, 200, 20 , {isStatic:true} );
	World.add(world, base);

	side1sprite= createSprite(290, 605, 20, 100);
	side1sprite.shapeColor= color("red");

	side1= Bodies.rectangle(290, 605, 20, 100 , {isStatic:true} );
	World.add(world, side1);

	side2sprite= createSprite(510, 605, 20, 100);
	side2sprite.shapeColor= color("red");

	side2= Bodies.rectangle(510, 605, 20, 100 , {isStatic:true} );
	World.add(world, side2);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	
  }
}



