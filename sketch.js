
// Global Variables
var ellipseXPos = 0;
var ellipseYPos = 300;
var ellipseDist = 40;

// Setup code goes here
function setup() {
  width = 500;
  height = 500;
  createCanvas(width, height);
  console.log("Starting up Simple Shapes");
  rectMode(CENTER);
  ellipseMode(CENTER);

  console.log("Width = " + width);
  console.log("Height = " + height);

  // set ellipse X pos
  ellipseXPos = width/2 - 250;
 }

// Draw code goes here
function draw() {
  background(187,219,180);
  //detailed striped background
  drawExtraBg();
  drawHair();
  //face outline, nose, eyebrows
  drawFace();
  drawLips();
  drawEye(290, 230);
  drawEye(210, 230);
  addTeeth(); 
}


function drawExtraBg(){
  strokeWeight(3);

  //creates depth by incrementing the opacity of lines
  for (var i = -100; i < 250; i += 8) {
    stroke(255,255,255, i+=.001);
    line(i, 0, i + 60, windowHeight);    
    }
  for (var j = 252; j < 500; j += 8) {
    stroke(255,255,255,i-=10);
    line(j, 0, j + 60, windowHeight);
    }
}

//creates black hair with one large arc
function drawHair(){
  stroke(0,0,0);
  fill(0,0,0,);
  arc(width/2, 370, 300, 500, 380, TWO_PI);
}

function drawFace() {
  //creates oval face outline
  noStroke();
  fill(252, 240, 204);
  ellipse(width/2,height/2-10,200,200);
  fill(255,0,0);
  //creates nose
  stroke(0,0,0);
  noFill();
  strokeWeight(2);
  arc(width/2 - 2, 260, 20, 10, TWO_PI, 500);
  strokeWeight(7);
  //creates eyebrows
  line(275,200,302,200);
  line(302,200,320,207);
  line(200,200,227,200);
  line(180,207,200,200);
}

function drawLips(){
  //bottom lip
  stroke(166,66,83,100);
  strokeWeight(2);
  fill(166,66,83,200);
  arc(width/2, 290, 50, 40, TWO_PI, PI);
  //top lip
  fill(166,66,83,200);
  //separates lips
  line(225,290,275,290);
  arc(width/2, 290, 50, 20, PI, TWO_PI);
  stroke(252, 240, 204);
}

//adds teeth when mouse hovers the face
function addTeeth(){
  if (mouseX < 360 && mouseY > 130 && mouseX > 130 && mouseY < 360){
    stroke(255,255,255);
    strokeWeight(2);
    fill(255,255,255);
    arc(width/2, 290, 50, 20, TWO_PI, PI);
  }
}

function drawEye(a, b){
  //variables are x and y position, so i can just copy the eye
  var a;
  var b;
  strokeWeight(2);
  stroke(0,0,0);
  fill(255,255,255);
  arc(a, b, 30, 20, TWO_PI, PI);
  arc(a, b, 30, 20, PI, TWO_PI);
  //pupils
  stroke(39, 24, 14);
  strokeWeight(12);
  fill(0, 0, 0);
  ellipse(a, b, 5, 5);
}


