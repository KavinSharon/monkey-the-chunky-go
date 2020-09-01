var bananaImage,bananaGroup;
var obstaclesImage,obstaclesGroup;
var backImage,backGround;
var score;
var player,player_running;
var invisibleGround;
function preload(){
  backImage=loadImage("jungle.png");
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png"); 
  obstaclesImage=loadImage("stone.png");
  
}
  



function setup() {
  createCanvas(800, 400);
  
  backGround = createSprite(0,200,1600,400);
  backGround.addImage("1234",backImage);
  backGround.x = backGround.width /2;
  backGround.velocityX = -4;
  backGround.scale=4;
  
  invisibleGround = createSprite(0,350,1600,50); 
  invisibleGround.visible = false;
  
  player = createSprite(100,340,10,10);
  player.addAnimation("running", player_running);
  player.scale=0.1;
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();

}

function draw() {
  background(220);
   
  
   if (backGround.x < 0){
    backGround.x = backGround.width/2;
  }
  
  player.collide(invisibleGround);
  
 
  invisibleGround.velocityX=-10;
  invisibleGround.x=invisibleGround.width/2;
  
  if(keyDown("space")&&player.y >= 260 ){
      player.velocityY = -12 ;
  }
   //Add gravity 
  player.velocityY = player.velocityY + 0.8;
  
  spawnBanana();
  spawnRock();
  
  if(bananaGroup.isTouching(player)){
    score=score+2;
    
  }
  
  switch(score){
    case 10:player.scale=0.12; 
          break;
    case 20:player.scale=0.14;  
          break;
    case 30:player.scale=0.15; 
          break;
    case 40:player.scale=0.16; 
          break; 
    case 50:player.scale=0.18; 
          break; 
          default:break;  
  }
  
  if(obstaclesGroup.isTouching(player)){
    player.scale=0.08; 
  }
  
  
  drawSprites();
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,500,50);
}

function spawnBanana(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(800,320,40,10);
    banana.y = Math.round(random(150,200));
    banana.addImage("1234",bananaImage);
    banana.scale=0.05; 
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 400;
    
    
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
  
}
function spawnRock(){
if (frameCount % 300 === 0) {
    var rock = createSprite(800,320,40,10);
    rock.y = 320;
    rock.addImage("Stone",obstaclesImage);
    rock.scale = 0.2;
    rock.velocityX = -8;
    
     //assign lifetime to the variable
    rock.lifetime = 400;
    
    
    
    //add each cloud to the group
    obstaclesGroup.add(rock);
  }
  
}
