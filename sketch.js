var bullet,wall,speed,weight,thickness

function setup() {
  createCanvas(1400,400);
  thickness=random(20,83)
 bullet = createSprite(50, 200, thickness, 20);
 bullet.shapeColor="white"
 wall = createSprite(1300, 200, 100, 200);
 wall.shapeColor="green"
speed=random(223,321);
weight=random(30,52);
bullet.velocityX=speed
}

function draw() {
  background(0);  
if(wall.x-bullet.x<bullet.width/2+wall.width/2){
  bullet.velocityX=0
var de= 0.5*weight*speed*speed/thickness*thickness*thickness
if(de>10){
  wall.shapeColor="red"
}
  if(de<10){
  
    wall.shapeColor="green"
  }
 }

  

  drawSprites();
}