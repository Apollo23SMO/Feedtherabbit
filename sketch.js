var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg= loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX;
  rabbit.y=World.mouseY;

  if (rabbit.isTouching(apple)){
  apple.destroy();
  }

  drawSprites();
}

appleSpawn();

function appleSpawn(){
    
  apple= createSprite(50,50,50,50);
   apple.addImage(appleImg)
  apple.scale=0.5

apple.y=Math.round(random(50,200))
apple.x=Math.round(random(50,200))
}