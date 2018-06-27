var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  for(var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height);
    var r = 48;
    fill(255, 0, 150, 100);
    noStroke();
    ellipse(x, y, 2*r, 2*r);
  } 
}

function draw() {

}
