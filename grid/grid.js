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
    push();
    noFill();
    stroke(0);
    strokeWeight(3)
    rect(0, 0, gameWidth - 3, gameHeight);
    pop();
  }


  resize(width, height){
    var index = 0;
    for (var r = 0; r < this.rows; r++) {
      for (var c = 0; c < this.cols; c++) {
        this.boxes[index].resize(r * width, c * height, width, height);
        index++;
      }
    }
  }
}
