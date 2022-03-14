// Recreating 'Untitled', 1969, by Anni Albers
// Original Artwork: https://nmwa.org/art/collection/albers-untitled/
// Recreated by Kenny Kim


var xAxis = 30;
var yAxis = 34;
var h = 20;
var orange, teal;
var angle = [];

function setup() {
  orange = color(251, 73, 1);
  teal = color(98, 177, 218);
  createCanvas(xAxis * h, yAxis * h);

  for (var i = 0; i < xAxis; i++) {
    angle[i] = [];
    for (var j = 0; j < yAxis; j++) {
      angle[i][j] = random([0, 0.25, 0.5, 0.75]) * 2 * PI;
    }
  }
}

function draw() {
  //background(255);
  noStroke();

  for (var i = 0; i < xAxis; i++) {
    for (var j = 0; j < yAxis; j++) {
      push();
      
      translate(i * h + h / 2, j * h + h / 2);
      rotate(angle[i][j]);
      
      fill(orange);
      beginShape();
      vertex(-h / 2, -h / 2);
      vertex(-h / 2, h / 2);
      vertex(h / 2, -h / 2);
      endShape(CLOSE);
      
      fill(teal);
      beginShape();
      vertex(h / 2, h / 2);
      vertex(h / 2, -h / 2);
      vertex(-h / 2, h / 2);
      endShape(CLOSE);
      
      pop();
    }
  }
}

function mouseMoved(event) {
  shuffle(angle, true);
}
