var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(800,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 35, 5);
  bullet.shapeColor = "white";

  wall = createSprite(700, 200, thickness, 200);
  wall.shapeColor = "white";

}

function draw() {
  background("black");
  
  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor = "red";
    }

    if(damage<10){
      wall.shapeColor = "green";
    }

  }

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width; 
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}