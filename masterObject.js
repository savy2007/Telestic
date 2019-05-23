class MasterObject{

	constructor(x, y, width, height, inTiles){//just standard stuff for the generic class
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;

		this.tx = 0;//x pos of tile on spriteSheet
		this.ty = 0;//y pos of tile on spriteSheet

		if(inTiles){//truthy
			this.tileArray = inTiles;
		}
		else{
			this.tileArray = defaultTiles;
		}

		// an array used to store the row and col of the tiles needed for animation
		// override this array in each character class
		// this.tileArray = [
		// 	[[0, 0], [0, 1], [0, 2]],//EXAPLE tiles needed for walking right
		// 	[[0, 1], [1, 1], [2, 1]],//EXAMPLE tiles needed for jumping
		// 	[[0, 2], [1, 2], [2, 2]]// EXAMPLE tiles needed for shooting
		// ];//default 0 incase of null at character creation



		this.currentTileSet = this.tileArray[0];//default
		this.tileIndex = 0; //used to loop through tile setup
		this.animationSpeed = 30;//change animation every x ammount of frames

	}

	// By having some drawing pre coded lets us just create
	// a new class and see it without overridding the draw function
	draw(){

		push();
		translate(this.x, this.y);

		if(frameCount % this.animationSpeed === 0){// increases animation frame every x frames
			this.tileIndex++;
		}

		if(this.tileIndex >= this.currentTileSet[0].length){
			this.tileIndex = 0; //used as a reset after reaching the end of the array
		}

		var tileRow = this.currentTileSet[this.tileIndex][0] * tileWidth;
		var tileCol = this.currentTileSet[this.tileIndex][1] * tileHeight;
		//console.log(`row: ${tileRow}  col: ${tileCol}`);
		image(spriteSheet, 0, 0, this.width, this.height, tileRow, tileCol, tileWidth, tileHeight);
		pop();
	}

	update(){

	}

	resize(width, height){
		this.width = width;
		this.height = height;
	}

	getCoords(){
		return {
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height
		};
	}

	setTiles(array){
		this.tileArray = array;
	}

}
