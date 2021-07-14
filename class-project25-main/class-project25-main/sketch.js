
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper

var engine, world;

//function preload(){}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper = new Paper(100, 600, 50);
	   ground = new Ground(400, 680, 800, 20);

    firstSide = new Dustbin(600 , 570, 20, 80); 
    //secondSide = new Dustbin(610, 660, 100, 20);
	  //thirdSide = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 Engine.update(engine);

  paper.display();
  ground.display();
  firstSide.display();
  //secondSide.display();
  //thirdSide.display();

  drawSprites();
 
}
 function keyPressed(){
	 if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:100,y:-145});	 
	 }
 }


