var fixedRect,movingRect;



function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(1000, 400, 50, 80);
  fixedRect.shapeColor="blue"
  fixedRect.velocityX=-5;
  movingRect=createSprite(200,400,50,80)
  movingRect.shapeColor="pink"
  movingRect.velocityX=5;
}

function draw() {
  background("white");  
 // movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;
  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
   &&fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2
   &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
   &&fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2) {
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
    movingRect.velocityX*-1;
    fixedRect.velocityX*-1;
   }
  drawSprites();
}