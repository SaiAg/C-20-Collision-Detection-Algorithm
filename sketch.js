var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200,200,50,50);
  movingRect= createSprite(500,300,80,30);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="blue";
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(fixedRect.x-movingRect.x);
  console.log(movingRect.x-fixedRect.x);
  console.log(fixedRect.y-movingRect.y);
  console.log(movingRect.y-fixedRect.y);
  if (fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.shapeColor="red";
    }
else{
  movingRect.shapeColor="green";
}


  

  drawSprites();
}