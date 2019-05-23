class Player extends MasterObject{

	constructor(x, y, width, height, name, tiles){
		super(x, y, width, height, tiles);
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
		this.chooseTiles();
		this.track(mouseX, mouseY);
	}



	move(){
		if(keyIsDown(UP_ARROW)){
			this.y--;
			this.dir = "N";
			//console.log("the char is now facing " + this.dir); //moving up
		}
		else if(keyIsDown(DOWN_ARROW)){
			this.y++;
			this.dir = "S";
			//console.log("the char is now facing " + this.dir); //moving down
		}
		else if(keyIsDown(RIGHT_ARROW)){
			this.x++;
			this.dir = "E";
			//console.log("the char is now facing " + this.dir); //moving right
		}
		else if(keyIsDown(LEFT_ARROW)){
			this.x--;
			this.dir = "W";
			//console.log("the char is now facing " + this.dir);//moving left
		}
		else{
			this.dir = "Rest";
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

	chooseTiles(){

		switch(this.dir){
			case "rest":
				this.currentTileSet = this.tileArray[0];
				break;
			case "N":
				this.currentTileSet = this.tileArray[1];
				break;
			case "NE":
				this.currentTileSet = this.tileArray[2];
				break;
			case "E":
				this.currentTileSet = this.tileArray[3];
				break;
			case "SE":
				this.currentTileSet = this.tileArray[4];
				break;
			case "S":
				this.currentTileSet = this.tileArray[5];
				break;
			case "SW":
				this.currentTileSet = this.tileArray[6];
				break;
			case "W":
				this.currentTileSet = this.tileArray[7];
				break;
			case "NW":
				this.currentTileSet = this.tileArray[8];
				break;

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
