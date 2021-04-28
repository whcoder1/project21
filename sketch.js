var bullet,wall;
var speed ,weight;

var thickness;
function setup() {

  createCanvas(1600,400);
  bullet=createSprite(50, 200, 100, 20);
  bullet.shapeColor="white"
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
  thickness=random(22,83)
  speed =random(223,321);
  weight=random(30,52);
bullet.velocityX=speed;
}

function draw() {
  background(0);  
  if(hasCollided (bullet,wall))
  {
    bullet.velocityX=0;
    var deformation =0.5*weight*speed*speed/thickness*thickness*thickness;
    if (deformation>10){
      wall.shapeColor="red";
    }
    
    if (deformation<10){
      wall.shapeColor="green";
    }
    

  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  {
    bulletrightedge=lbullet.x+lbullet.width;
    wallleftedge=lwall.x
    console.log(bulletrightedge)
    console.log(wallleftedge)
  }
  if(bulletrightedge>=wallleftedge){
    return true
  }
  else 
  {
    return false 
  }
}