class Mage extends Player{

	constructor(x, y, width, height, name, resistance, tiles){

		super(x, y, width, height, name, resistance, tiles);
		//we override any vars we need to for each character class
		this.resistance = [0.5, 2, 1];//array that holds resistances to attacks [magic, melee, range] in that order (alphabetical)



	}


}
