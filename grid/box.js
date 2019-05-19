class Box{
  constructor(x, y, width, height, row, col, type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.row = row;
    this.col = col;
    this.type = type; //type of box i.e. swamp, mountain, lava ..ect
    this.isEmpty = true; //if player or mob is on square
    this.status = null; // for whatever might be needed;
  }

  update(){

  }

  draw(){
    push();
    translate(this.x, this.y);
    noFill();//just the outline of the rect
    stroke(0, 200, 0);//purple
    strokeWeight(3);//line width
    rect(0, 0, this.width, this.height);
    pop();
  }

  resize(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

  getInfo(){
    return{
      x: this.x,
      y: this.y,
      width: width,
      height: height,
      row: this.row,
      col: this.col,
      type: this.type,
      isEmpty: this.isEmpty,
      status: this.status
    }
  }

  setType(type){
    this.type = type;
  }

  setStatus(status){
    this.status = status;
  }

  seIsEpmty(boolean){
    this.isEmpty = boolean;
  }

  getIsEmpty(){
    return this.isEmpty;
  }

  clicked(){
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height){
      console.log(this.getInfo());
      return this.getInfo();
    }
  }


}
