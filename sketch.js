var monkey , monkey_running, monkey_stopped
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime = 0
var score
function preload(){
  
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
var ground;

function setup() {
  createCanvas(400, 300);
  monkey = createSprite(80,215,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400,250,600,10);
  ground.velocityX = -7;
  ground.x = ground.width/2;
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("180");
  // console.log(ground.x);
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  if(monkey.isTouching(obstacleGroup)){
    ground.velocityX=0;
    monkey.velocityX=0;
    survivalTime=0;
    obstacleGroup.setVelocityEach(0,0);
    bananaGroup.setVelocityEach(0,0);
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  }
  if(ground.velocityX===-7){
    banana();
    obstacle();
    if(keyDown("space") && monkey.y>=canvas.height/2){
      monkey.velocityY=-16;
    }
    monkey.velocityY=
    monkey.velocityY+1;
    textSize(20);
    stroke("black");
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate());
    text("Survival Time: "+ survivalTime, 140,50);
  }
  if(ground.x<100){
    ground.x=ground.width/2;
  }

  //monkey should collide with ground
  monkey.collide(ground);
  drawSprites();
}
function banana(){
  if(frameCount % 80 == 0){
    var banana = createSprite(350,100,20,20);
    banana.addAnimation("moving", bananaImage);
    banana.scale=0.1;
    banana.velocityX = -6;
    banana.lifetime = 60;
    banana.y=Math.round(random(100,150));
    // console.log(banana.y);
    bananaGroup.add(banana);
  }
}
function obstacle(){
  if(frameCount % 80 == 0){
    var stones = createSprite(350,230,50,50);
    stones.addAnimation("moving", obstacleImage);
    stones.scale=0.1;
    stones.velocityX=-6;
    stones.lifetime=60;
    obstacleGroup.add(stones);
  }
}





