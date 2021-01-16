var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var ram;
var score=0;
var balloonGroup , arrowGroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(800, 800);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  balloonGroup=new Group();
  arrowGroup=new Group();
  
 
}

function draw() {
  // moving ground
    background.velocityX = -3 

  
    if (background.x < 0){
      background.x = background.width/2;
    }
  
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  ram=Math.round(random(1,4));
  
  if(World.frameCount%80==0)
    {
      if(ram==1)
        {
          redB();
        }
      if(ram==2)
        {
          blueB();
        }
      if(ram==3)
        {
          pinkB();
        }
      if(ram==4)
        {
          greenB();
        }
    }
  
  
  if(arrowGroup.isTouching(redB))
  {
    redB.destroyEach();
    score=score+1;
  }
  
  if(arrowGroup.isTouching(blueB))
  {
    blueB.destroyEach();
    score=score+1;
  }
  
  if(arrowGroup.isTouching(greenB))
  {
    greenB.destroyEach();
    score=score+1;
  }
  
  if(arrowGroup.isTouching(pinkB))
  {
    pinkB.destroyEach();
    score=score+1;
  } 
  drawSprites();
  
  fill("black");
  textSize(15);
  text("score = " + score , 100,50);
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
   arrow.debug=true;
  
  arrowGroup.add(arrow);
}

function redB()
{
  
  red_balloon = createSprite(50, 250, 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1
  red_balloon.velocityX=2;
  red_balloon.lifetime=200;
  
  balloonGroup.add(red_balloon);

}

function blueB()
{
  
  blue_balloon = createSprite(140, 200, 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
  blue_balloon.velocityX=2;
  blue_balloon.lifetime=200;
  
  balloonGroup.add(blue_balloon);
}

function pinkB()
{
  pink_balloon = createSprite(180, 250, 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.2;
  pink_balloon.velocityX=2;
  pink_balloon.lifetime=200;
  
  balloonGroup.add(pink_balloon);

}

function greenB()
{
  green_balloon = createSprite(100,250, 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
  green_balloon.veloctiyX=1;
  green_balloon.lifetime=200;
  
  balloonGroup.add(green_balloon);
}
