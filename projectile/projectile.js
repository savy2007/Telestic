class Projectile{

  constructor(x, y, angle, type){
    this.x = x;
    this.y = y;
    this.type = type;
    this.angle = angle;
    this.width = 10;
    this.height = 20;
    this.speed = 5;
    this.id = this.randomId();
    this.color = color(0, 0, 0);
  }

  update(){
    this.move();
    this.offScreen();
    this.collide();
  }

  draw(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(this.color);
    rect(0, 0, this.width, this.height);
    pop();

  }

  move(){
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
  }

  offScreen(){
    if(this.x + this.width < 0 || this.x > gameWidth || this.y + this.size < 0 || this.y > gameHeight ){
      projectileManager.removeProjectile(this.id)
    }
  }

  // tx = target x
  // ty = target y
  // tw = target width
  // th = target height
  collide(tx, ty, tw, th){
    collideRectRect(this.x, this.y, this.width, this.height, tx, ty, tw, th)

  }

  randomId(){
    return Math.random();
  }
}





class RedShoot extends Projectile{
  constructor(x, y, angle, type){
    super(x, y, angle, type);
    this.color = color(255, 0, 0);
  }
}

class BlueShoot extends Projectile{
  constructor(x, y, angle, type){
    super(x, y, angle, type);
    this.color = color(0, 0, 255);
  }
}
