
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var options={isStatic:true}
    ground=Bodies.rectangle(400,680,800,20,options);
    World.add(world,ground);
	//Create the Bodies Here.
    paper1=new Paper (100,100,20);
    dustbin=new Dustbin(600,650,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,800,20);
  paper1.display();
  dustbin.display();
  
  drawSprites();
 
}

function keypressed(){
     if (keyCode===UP-ARROW){

        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});








     }


     

}

