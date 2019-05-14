class ProjectileManager{

  constructor(){
    this.projectiles = [];
  }

  update(){
    for (var i = 0; i < this.projectiles.length; i++) {
      this.projectiles[i].update();
    }
  }

  draw(){
    for (var i = 0; i < this.projectiles.length; i++) {
      this.projectiles[i].draw();
    }
  }

  addProjectile(projectile){
    this.projectiles.push(projectile);
  }

  removeProjectile(id){
    for (var i = 0; i < this.projectiles.length; i++) {
      if(this.projectiles[i].id === id){//if id of projectile is found we remove it from the array
        this.projectiles.splice(i, 1);
      }
    }
  }
}
