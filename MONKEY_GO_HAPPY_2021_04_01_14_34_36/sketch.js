
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
ground=createSprite(300,300,600,10)
  ground.x=ground.width/2
  monkey=createSprite(100,270,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  bananaGroup=new Group()
  obstacleGroup=new Group()
}


function draw() {
background("lightblue")
  ground.velocityX = -4
  if (ground.x < 380){
      ground.x = ground.width/2;
    }
  
  score = score + Math.round(frameCount/120);
  text("Survival Time="+score,300,50)
  if(frameCount%300===0){
    hurdles();
  }
  if(frameCount%80===0){
    bananas();
  }
  if(keyDown("space")&& monkey.y >= 165) {
        monkey.velocityY = -13;    
    }
  monkey.collide(ground)    
   monkey.velocityY = monkey.velocityY + 0.8   
    console.log(monkey.y)
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach()
    
  }
 drawSprites ();
}

function hurdles(){
  obstacle=createSprite(370,278,10,10)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-4
  obstacle.scale=0.1
  obstacle.lifetime=80
  obstacleGroup.add(obstacle)
}

function bananas(){
  banana=createSprite(380,200,10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
 banana.lifetime=90
  banana.velocityX=-4
  bananaGroup.add(banana)
}


