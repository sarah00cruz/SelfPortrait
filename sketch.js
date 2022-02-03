/***********************************************************************************
  SimpleShapes
  by Scott Kildall

  Sketch for drawing some very simple shapes

***********************************************************************************/

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
  drawExtraBg();
  drawCircle();
  drawEllipses();
  drawRects();
}

function drawExtraBg(){
  
  strokeWeight(3);
  //line(x1,y1,x2,y2);
  for (var i = -100; i < windowWidth/2; i += 8) {
    stroke(255,255,255, i+=.001);
    line(i, 0, i + 60, windowHeight);
    
    }
}

function drawCircle() {
  // fill(0,102,255);
  // circle(width/2,height/2,20);
}

function drawEllipses() {
  // // Ellipse #1
  // fill(0,255,0);
  // ellipse(ellipseXPos,ellipseYPos,200,80);

  // // Ellipse #2
  // fill(0,255,0);
  // ellipse(ellipseXPos,ellipseYPos+ellipseDist,200,80);

  //Ellipse #3
  noStroke();
  fill(134,22,87,200);
  ellipse(200,300,200,200);
  
}

function drawRects() {
//  // Center Rectangle
//   fill(255,0,0);
//   stroke(220);
//   strokeWeight(3);
//   rect( width/2,height/2,200,100);

//   // Tall Rect
//   fill(126,50,20);
//   stroke(27);
//   strokeWeight(2);
//   rect( 100,height/2,40,400);
 }