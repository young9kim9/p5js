/*
 * @name Follow 3
 * @arialabel Long segmented snake shape follows the user’s mouse as it moves 
 * @frame 710,400
 * @description A segmented line follows the mouse. The relative angle from
 * each segment to the next is calculated with atan2() and the position of
 * the next is calculated with sin() and cos(). Based on code from Keith Peters.
 */
let x = [],
  y = [],
  segNum = 500,
  segLength = 1;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(50);
  stroke(255, 10);
}

function draw() {
  background(210, 20, 50);
  dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 50);
  pop();
}
