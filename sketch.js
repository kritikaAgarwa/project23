var helicopterIMG, helicopter, package, packageIMG;
var packageBody, ground;
var userEngine, userWorld;
var side1,side2,side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	userEngine = Engine.create();
	userWorld = userEngine.world;

	package = createSprite(width / 2, 80, 10, 10);
	package.addImage(packageIMG)
	package.scale = 0.2;
	World.add(userWorld, package);
	console.log(package);

	
	helicopter = createSprite(width / 2, 200, 10, 10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale = 0.6;
	World.add(userWorld, helicopter);
	

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)

	side1=createSprite(425,650,200,20);
	side1.shapeColor="red";

	side2=createSprite(525,610,20,100);
	side2.shapeColor="red";

	side2=createSprite(325,610,20,100);
	side2.shapeColor="red";




	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0, isStatic: true });
	World.add(userWorld, packageBody);


	side1 = Bodies.rectangle(425,650,200,50, { isStatic: true });
	World.add(userWorld, side1);

	side2 = Bodies.rectangle(525,610,20,100, { isStatic: true });
	World.add(userWorld, side2);

	side3 = Bodies.rectangle(325,610,20,100, { isStatic: true });
	World.add(userWorld, side3);

	Engine.run(userEngine);

}


function draw() {

	background(0);
	Engine.update(userEngine);


	package.x = packageBody.position.x;
	package.y = packageBody.position.y;

	rectMode(CENTER);
	rect(packageBody.position.x, packageBody.position.y, 50, 65);

	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic(packageBody,false);
	}
}






