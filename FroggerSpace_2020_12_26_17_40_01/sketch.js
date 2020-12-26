var carx = []
var cary  = []
var c = []
var lives = []
var carw = 40
var carh = 15
var score = 0
var frogx = 200
var frogy = 460
var frogw = 20
var frogh = 30
var speed = 2
var life = 3
function setup() {
  createCanvas(400, 500);
  carx = [random(0,70),random(120,210),random(260,290),
          random(340,400),random(0,70),random(120,210),
          random(260,300),random(350,400),random(0,70),
          random(120,210),random(260,300),random(350,400),
          random(0,70),random(120,210),random(260,300),
          random(350,400)]
  cary =[374,374,374,374,
         257,257,257,257,
         220,220,220,220,
         337,337,337,337]
  c = [color(255,10,10),color(10,220,10),color(10,10,255),
       color(255,200,10),color(255,10,10),color(10,220,10),
       color(10,10,255),color(255,200,10),color(255,10,10),
       color(10,220,10),color(10,10,255),color(255,200,10),
       color(255,10,10),color(10,220,10),color(10,10,255),
       color(255,200,10)]
  lives = [100,130,160,190,220]
}

function draw() {
  Set()
  road(325)
  road(210)
  linee(362)
  linee(247)
  carR()
  carL()
  Speed()
  frog()
  Score()
  increase()
  CC()
  Life()
}

function Life(){
  fill(0)
  text("Lives: ", 10,130)
  text("W A S D to move ", 200,100)
  for(i = 0; i < life; i++){
    fill(0,255,0)
    ellipse(lives[i],125,15, 25)
  }
  textSize(25)
  if (life == 0){
    noLoop()
    background(0,200,0)
    textSize(50)
    text("Game Over", 70,200)
    text("Score: " + score, 100,250)
    fill(0, 200, 0);
    rect(75, 300, 250, 100)
    fill(0, 0, 0);
    textSize(30);
    text("Play again?", 120, 360);
  }
}

function CC(){
  for( i = 0; i <=15; i++){
  if (collisionCheck(carx[i], cary[i], carw, carh)){
     frogx = 200
     frogy = 460
     life--
  }}
}

function increase(){
  if (frogy <= 180){
    frogx = 200
    frogy = 460
    speed += 0.5
    score++
      }
}

function Score(){
  fill(0)
  text("Score: " + score, 10,100)
  textSize(25)
}

function Speed(){
  for( var i = 0; i<=7; i++){
  carx[i] += speed
  }
  for( i = 8; i<=15; i++){
  carx[i] -= speed
  }
}

function keyPressed(){
if (keyCode == 65) {
    frogx -= 39;
  }else if (keyCode == 68) {
    frogx += 39;
  }else if (keyCode == 87) {
    frogy -= 39;
  }else if (keyCode == 83) {
    frogy += 39;
}
}

function carL(){
  for(var i = 0; i <= 7; i++){
    fill(c[i])
 rect(carx[i],cary[i],carw,carh);
      if (carx[i] >= 400){
      carx[i] = -50;
  }}
}

function carR(){
  for( var i = 8; i <= 15; i++){
    fill(c[i])
 rect(carx[i],cary[i],carw,carh);
      if (carx[i] <= -50){
      carx[i] = 400;
  }}
}

function collisionCheck (carx, cary, carw, carh){
  return (frogx < carx+10 + carw) && (frogy < cary + carh)&&
    (frogx + frogw > carx+10) && (frogy + frogw > cary);
}

function frog(){
fill(0,255,0)
ellipse(frogx,frogy,frogw,frogh)
if(frogx >= 395){
frogx = 395
}
if(frogx <= 5){
  frogx = 5
}
if(frogy >= 500){
  frogy = 500
}
}

function linee(ly){
  var lx = 0;
  stroke(245,240,0);
  while (lx <= 350){
  line(lx +10,ly,lx +40,ly)
  lx += 50
  }
  stroke(0);
  }

function road(ry){
  fill(200)
  rect(0,ry,399,74);
}

function Set(){
  background(0,200,0)
  fill(0,50,255)
  ellipse(200,-45, 500, 200)
}

function mousePressed(){
if(mouseX >= 75 && mouseX <= 325 && 
   mouseY >= 300 && mouseY <= 400 && life == 0){
  score = 0
  life = 3
  speed = 2 
  carx = [random(0,70),random(110,210),random(260,320),
          random(340,400),random(0,70),random(110,210),
          random(260,320),random(340,400),random(0,70),
          random(110,210),random(260,320),random(340,400),
          random(0,70),random(110,210),random(260,320),
          random(340,400),random(0,70),random(110,210),
          random(260,320),random(340,400)]
  loop()  
}
}