var aircraft, aircraftImage;
var bg, bgImage;
var gameState = "play";

function preload() {
  
  aircraftImage = loadImage("Images/AircraftImage.png")
  bgImage = loadImage("Images/BackgroundImage.jpeg")
  darkCloudImage = loadImage("Images/DarkCloud.png")
}

function setup() {
  createCanvas(1000,1200);


  bg=createSprite(0,0,1000,2500);
  bg.addImage(bgImage);
  bg.scale = 10.0

  aircraft=createSprite(250,500,50,50);
  aircraft.addImage(aircraftImage);
  aircraft.scale = 0.8

  cloudsGroup = new Group();



  
  
}




function draw() {
  background("white");  

  if(bg.y > 800) {
    bg.y = bg.height/2;
  }

  if(gameState === "play") {

  
  bg.velocityY = 4;

  edges = createEdgeSprites();

  aircraft.bounceOff(edges[0]);
  aircraft.bounceOff(edges[2]);

  
  if(keyDown(RIGHT_ARROW)) {
    aircraft.x = aircraft.x+7;
  }

  if(keyDown(LEFT_ARROW)) {
    aircraft.x = aircraft.x-7;
  }

  spawnClouds();

  if(aircraft.isTouching(cloudsGroup)) {
    gameState = "end";
  }
}

if(gameState === "end") {
  aircraft.velocityX = 0;
  aircraft.velocityY = 0;
  cloudsGroup.setVelocityEach(0);
  cloudsGroup.setLifetimeEach(-1)
}
  drawSprites();
}

function spawnClouds() {
  if (frameCount % 125 === 0) {
    var cloud = createSprite(250,-5,40,10);
    cloud.x = Math.round(random(180,320));
    cloud.addImage(darkCloudImage);
    cloud.scale = 0.3;
    cloud.velocityY = 2;
    
    cloud.lifetime = 600;
    
    cloudsGroup.add(cloud);
  }
  
}