var car,wall;

var speed,wieght;
function setup() {
  createCanvas(1600,600);
  car = createSprite(50,200,50,50);
  speed =random(55,90);
  wieght =random(400,1500);



function draw(){
  background("red");  
  
  drawsprites();
}