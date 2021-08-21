var background1 , background1img;

function preload(){
  background1img=loadImage("Images/background.jpg")
}

function setup(){
  createCanvas(1200,600);

  background1=createSprite(1200,400,1200,300);
  background1.addImage(background1img);
  background1.velocityX=-1.5;
}

function draw(){
  background("white");
  drawSprites();
}