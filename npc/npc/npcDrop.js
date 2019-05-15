class npcDrop {

  constructor(x, y){

    this.x = x; //this will be used to determine the place we will drop loot
    this.y = y;
    this.rarity;
    this.random;
    this.max = 10;
    this.min = 1;
    this.givenItem
  }

  giveDrop(){

    this.random = Math.floor(Math.random() * max + min);
    console.log("the number was" +this.random);

    if(this.random >= 9){

      this.rarity = 3;//rare drop
      addItem(givenItem);

    }

    if(this.rarity >=6 && this.rarity < 8){

      this.rarity = 2;//uncommon drop
      addItem(givenItem);

    } else {

      this.rarity = 1;//common drop
      addItem(givenItem);
    }

  }


}
