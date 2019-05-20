class MasterObject{

	constructor(x, y, width, height){//just standard stuff for the generic class
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	draw(){//By having some drawing pre coded lets us just create a new class and see it without overridding the draw function 
		push();
		translate(this.x, this.y);
		fill(255,20,147);
		rect(0, 0, this.width, this.height);//Default in case of no imgages or animation
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

}
