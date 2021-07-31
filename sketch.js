var garden, rabbit;
var gardenImg, rabbitImg;
var apple, appleImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(300, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1, 3)); 
  if (frameCount % 40 == 0) {
        appleSpawn(); 
      }


  rabbit.x = World.mouseX;

  drawSprites();
}

function appleSpawn() {

  apple = createSprite(50, 50, 50, 50);
  apple.addImage(appleImg)
  apple.scale = 0.09

  apple.lifetime = 25;

  apple.y = Math.round(random(50, 150))
  apple.x = Math.round(random(50, 350))
}