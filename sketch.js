
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,invisibleground,bananagroup;
var score;
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
  
monkey=createSprite(50,325,20,20)
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.15;
  
ground=createSprite(20,380,800,20);
ground.velocityX=-2;
ground.x=ground.width/2;
console.log(ground.x);
  
invisibleground=createSprite(20,383,400,20);
invisibleground.visible=false;

 bananagroup=createGroup();
 
}


function draw() {
background("white");
  
if (keyDown("space")&& monkey.y<=350){
monkey.velocityY=-12;
}

monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(invisibleground);
  
   if (ground.x < 300){
      ground.x = ground.width/2;
    }
  
stroke("black");
textSize(20);
fill ("black");
survivaltime=Math.round(frameCount/frameRate());
text ("Survival Time:"+ survivaltime,240,50);
  
food();
obstacles();
  
  drawSprites();
}
function food() {
if (frameCount%80===0){
banana=createSprite(600,random(220,260),20,20);
banana.addImage("banana",bananaImage);
banana.scale=0.1;
banana.velocityX=-2;
banana.lifetime=315;
bananagroup.add(banana);
}
}
function obstacles(){
if (frameCount % 300 === 0){
    var obstacle = createSprite(600,335,20,20);
    obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
    obstacle.velocityX = -3;
}
}





