var catAnimation,cat;
var bg,ground;
var foodG,foodImg;
var energy=1000;
function preload(){
  catAnimation=loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png","cat5.png","cat6.png");
  bg=loadImage("bg.jfif");
  foodImg=loadImage("food.png");
}

function setup() {
  createCanvas(1200,600);
  cat=createSprite(150,mouseY,100,100);
  cat.addAnimation("catimg",catAnimation);
  cat.scale=2;
  ground=createSprite(800,600,1200,600);
  ground.addImage(bg);
  ground.scale=7;
  foodG=new Group();
}

function draw() {
  background(200);  
  ground.velocityX=-10;
  if(ground.x < 300){
    ground.x = 600;
  }
  for(var i=0;i<foodG.length;i++){
    var eatenfood=foodG.get(i);
    if(cat.isTouching(foodG)){
      foodG.get(i).destroy();
      energy=energy+50;
    }
  }
  energy=energy-1;
  cat.y=mouseY;
  cat.depth=ground.depth+1;
  createFood();
  drawSprites();
  textSize(18);
  fill("red");
  text("Energy: "+energy,10,30);
  
}
function createFood(){
  if(frameCount%40===0){
    var food=createSprite(1300,random(50,550),50,50);
    food.addImage(foodImg);
    food.scale=0.3;
    food.velocityX=-10;
    food.depth=ground.depth+1;
    food.lifetime=120;
    foodG.add(food);
    }
}