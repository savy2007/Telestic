class Player extends MasterObject{

	constructor(x, y, width, height, name){
		super(x, y, width, height);
		this.health = 100;//default, can be overridden in the character class
		this.angle = 0;
		this.dir = "N"; // direction
		this.state = [""];//any affects like fire will go here
		this.playerName = name;
		this.resistance = [1, 1, 1];//array that holds resistances to attacks [magic, melee, range] in that order (alphabetical)

	}

	

	update(){
		this.move();
		this.attack();
		this.track(mouseX, mouseY);
	}



	move(){
		if(keyIsDown(UP_ARROW)){
			this.y--;
			this.dir = "N";
			//console.log("the char is now facing " + this.dir); //moving up
		}
		if(keyIsDown(DOWN_ARROW)){
			this.y++;
			this.dir = "S";
			//console.log("the char is now facing " + this.dir); //moving down
		}
		if(keyIsDown(RIGHT_ARROW)){
			this.x++;
			this.dir = "E";
			//console.log("the char is now facing " + this.dir); //moving right
		}
		if(keyIsDown(LEFT_ARROW)){
			this.x--;
			this.dir = "W";
			//console.log("the char is now facing " + this.dir);//moving left
		}
	}

	track(x, y){
		var tx = x;//tracking x
		var ty = y;//tracking y
		this.angle = angle360(this.x, this.y, tx, ty);

		strokeWeight(3);//line width
		stroke(255, 0, 0);//red line color
		strokeWeight(1);//returns line size back to 1
		stroke(0);//black line color
	}

	attack(){
		if (mouseIsPressed) {
	    //console.log("mouse is pressed");
			//this is where i will call the shooting script
	  }
	}

	damage(type, damage){

		switch(type){
			case "magic":
				this.health -= (damage *= this.this.resistance[0]);
				break;
			case "melee":
				this.health -= (damage *= this.this.resistance[1]);
				break;
			case "range":
				this.health -= (damage *= this.this.resistance[2]);
				break;
			default:
				console.error("wrong attack type given as argument");
		}
	}

}
