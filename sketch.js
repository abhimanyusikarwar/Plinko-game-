var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var PLAY = 1;
var END = 0;
var gameState = PLAY;


var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(40)
 text("500",165,650);
 text("500",250,650);
 text("500",330,650);
 text("500",85,650);
 text("500",5,650);
 text("100",400,650);
 text("100",480,650);
 text("100",560,650);
 text("100",640,650);
 text("100",720,650);

  Engine.update(engine);
  if(gameState===PLAY){

  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 //if(frameCount%60===0){
 //particles.push(new Particle(random(width/2-10,width/2+10,),10,10));
 //score=score++
 //}
 
  for (var j = 0; j < particles.length; j++) {
  
   particles[j].display();
 }

  
  

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
  }
}
function mousePressed()
{
if(gameState!=="end"){
count++;
particle=new Particle(mouseX,10,10,10);
}
}