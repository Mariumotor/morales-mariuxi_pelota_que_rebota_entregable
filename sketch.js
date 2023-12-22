let ball;
let gravity = 0.2;
let friction = 0.95; // Reducción de velocidad por fricción
let backgroundColor;

function setup() {
  createCanvas(400, 400);
  backgroundColor = color(220);
  ball = new Ball(width / 2, height / 2, 30);
}

function draw() {
  background(backgroundColor);

  ball.update();
  ball.display();
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.color = color(random(255), random(255), random(255)); // Color aleatorio
  }

  update() {
    this.ySpeed += gravity;
    this.xSpeed *= friction;
    this.y += this.ySpeed;
    this.x += this.xSpeed;

    
    if (this.y > height - this.radius / 2) {
      this.y = height - this.radius / 2;
      this.ySpeed *= -1; // Reverse vertical speed
      this.color = color(random(255), random(255), random(255)); // Cambiar de color
    }

    // Bounce when the ball hits the sides
    if (this.x > width - this.radius / 2 || this.x < this.radius / 2) {
      this.xSpeed *= -1; // Reverse horizontal speed
      this.color = color(random(255), random(255), random(255)); // Cambiar de color
    }
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }
}