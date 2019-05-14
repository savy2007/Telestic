class Grid{

  constructor(rows, cols, width, height){
    this.boxes = [];
    this.rows = rows;
    this.cols = cols;
    this.width = width;
    this.height = height;

    for (var r = 0; r < this.rows; r++) {

      for (var c = 0; c < this.cols; c++) {
        this.boxes.push(new Box(r * this.width, c * this.height, this.width, this.height, r, c, null));
      }
    }
  }

  clicked(){
    for (var i = 0; i < this.boxes.length; i++) {
      this.boxes[i].clicked();
    }
  }

  update(){
    for (var i = 0; i < this.boxes.length; i++) {
      this.boxes[i].update();
    }
  }

  draw(){
    for (var i = 0; i < this.boxes.length; i++) {
      this.boxes[i].draw();
    }
  }
}



//constructor(x, y, width, height, type){
