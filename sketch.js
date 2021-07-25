// declaring
var boy;
var gorund;
var invisibleleft;
var invisibleright;
function preload(){
  //pre-load images
  boy_run = loadAnimation("Runner-1.png","Runner-2.png");
  gorundp = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  gorund = createSprite(200,200,10,10);
  gorund.addImage("ground",gorundp);
  gorund.velocityY=4;
  boy = createSprite(200,340,10,10);
  boy.addAnimation("running",boy_run);
  boy.scale=0.1;
  invisibleleft = createSprite(62,340,20,400);
  invisibleleft.visible=false;
  invisibleright = createSprite(350,340,20,400);
  invisibleright.visible=false;
}

function draw() {
  background(0);
  if(gorund.y>400){
  gorund.y=height/2;
  }
  boy.x=World.mouseX;
  boy.collide(invisibleleft);
  boy.collide(invisibleright);
drawSprites();
}
