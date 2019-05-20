class LavaDragon extends MasterObject{//need to make a boss class and extend from that
  constructor(x, y, width, height){
    super(x, y, width, height);
  }
}
// class lavaDragon {
//
//   constructor(x,y,size){
// 	this.x = x;
// 	this.y = y;
// 	this.size = size;
// 	this.angle = 100;
// 	this.health = 1000;
// 	this.state = [""];//any affects like fire will go here
// 	//we will constantly loop through the array to check if player is onfire or poisned
// 	//once fire or poisned is done, we will remove it from the array
//   this.phase = 1; //boss will have 3 phases
//   this.handsAlive = true;
//   //this.img = loadImage('https://www.dropbox.com/s/0jd2elzdag68hr2/1.png?dl=0);
//   this.bossName = "lava Dragon";
// }
//
// draw(){
//
//   push();
//   translate(this.x, this.y);//translate to the current x and y so we can draw at 0, 0 x and y
// 	rotate(this.angle);
// 	fill(200,0,0);
//   //image(this.img, this.x, this.y);
// 	rect(0 - this.size / 2, 0  - this.size / 2, this.size, this.size);
// 	pop();
//
// }
//
// update(){
//
// this.track(player.x,player.y);
//
//
// if(this.handsAlive = true){
//
//   //console.log("this boss cannot be killed until the hands are dead");
//   this.health = 1000; //resets health to 1000
//   //console.log(this.health);
//
// } else {
//
//   this.phase = 2; //we will now enter phase 2 of the boss
//   console.log("this boss can now be damaged");
//
// }
//
// if (this.health < 250){ //boss is now under 250 health
//   this.phase = 3;
//   console.log("last phase");
//   //boss will now enter the last phase
// }
//
// if (this.health === 0){
//
//   console.log("boss is now dead");
//
// }
//
// }
//
// track(x, y){
// 		var tx = x;//tracking x
// 		var ty = y;//tracking y
//
// 		/* this function I didnt write and dont fully understand but
// 			after playing with it i got it to work
// 		*/
// 		this.angle = angle360(this.x, this.y, tx, ty);
//
// 		strokeWeight(3);//line width
// 		stroke(255, 0, 0);//red line color
// 		//line(this.x - 50 + this.size, this.y, tx, ty);//draws a red line to show tracking
// 		strokeWeight(1);//returns line size back to 1
// 		stroke(0);//black line color
// 	}
//
//
// }
