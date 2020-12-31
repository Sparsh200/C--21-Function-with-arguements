var movingRect;
var fixedRect;
var gameobject1,gameobject2,gameobject3;

function setup() {
  createCanvas(1600,800);
 movingRect=  createSprite(400, 200, 50, 50);
 movingRect.shapeColor = "red";
 movingRect.debug = true;
 
 fixedRect = createSprite(200,200,80,70);
 fixedRect.shapeColor = "blue";
 fixedRect.debug = true;

 gameobject1 = createSprite(40,50,30,30);
 gameobject1.shapeColor = "brown";
 gameobject2 = createSprite(100,400,20,30);
 gameobject2.shapeColor = "gold";
 gameobject3 = createSprite(350,500,70,30);
 gameobject3.shapeColor = "orange";





}

function draw() {
  background("black");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
//calling custom function
if(isTouching(movingRect,gameobject2))
{
  movingRect.shapeColor = "yellow";
  gameobject2.shapeColor = "yellow";
}
else 
{
  movingRect.shapeColor = "green";
  gameobject2.shapeColor = "green";
}



  drawSprites();
}

