function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = p5.Vector.random2D();

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.show = function() {
    var gridx = int(this.pos.x / tileWidth);
    var gridy = int(this.pos.y / tileHeight);

    stroke(cl[gridx][gridy]);
    point(this.pos.x, this.pos.y);
    
    //noStroke();
    //fill(cl[gridx][gridy]);
    //ellipse(this.pos.x, this.pos.y, 5, 5);
  }

  this.edges = function() {
    if (this.pos.x > width - 10) this.pos.x = 10;
    if (this.pos.x < 10) this.pos.x = width - 10; 
    if (this.pos.y > height - 10) this.pos.y = 10; 
    if (this.pos.y < 10) this.pos.y = height - 10;
  }
}
