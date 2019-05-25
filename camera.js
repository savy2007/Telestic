/*
  TO DO:
  changing scl is not going to work
  because objects may not scale with the background
  and the x and y of the objects do not scale.
  I may try to captue the canvas as an image then manipulate
  the image by rotating and scaling the imgae.
*/



class Camera{
  constructor(){
    this.angle = 0;
    this.zoomMultiplier = 1;
    this.isShaking = false;
  }

  draw(){

    if(this.isEarthquake){
      this.shakeCamera();
    }

    else{
      push();
      //not sure why but this is how to rotate from the center, translate to the middle, rotate, then translate back to top left
      translate(gameWidth / 2, gameHeight / 2);
      angleMode(DEGREES);
      rotate(this.angle);
      translate(-gameWidth / 2, -gameHeight / 2);
      this.drawList();
      pop();
    }

  }

  drawList(){//all objects draw function will go here
    grid.draw();
    mage.draw();
    lavadragon.draw();
  }

  zoom(){

  }

  //Takes an arg and adds it to the current angle.
  //Positive numbers for RIGHT and negtive numbers for LEFT
  rotateCamera(angle){
    if(typeof(angle) === "number"){
      this.angle += angle;
    }
    else{
      console.error("rotateCamera() function only accepts numbers");
    }

  }

  setAngle(angle){
    if(typeof(angle) === "number"){
      this.angle = angle;
    }
    else{
      console.error("setAngle() function only accepts numbers");
    }

  }

  zoom(ammount){//adds to the main.js var scl,
    if(typeof(ammount) === "number"){
      scl += ammount;
    }
    else{
      console.error("zoom() function only accepts numbers");
    }
  }

  shakeCamera(axis, min, max, time){
    switch(axis){
      case "x":

        break;
      case "y":

        break;
      case "both":

        break;
      default:
        console.error(`shakeCamera() function arg 0 needs to be "x", "y", or "both"`)
        break;
    }
  }


}

// ********* KEYBOARD CONTROLES *****************

function keyPressed() {
  if (keyCode === 81) {//rotate left "Q"
    CAMERA.rotateCamera(-1)
  }

  else if (keyCode === 87) {//rotate right "W"
    CAMERA.rotateCamera(1)
  }

  else if (keyCode === 69) {//zoom in "E"
    CAMERA.zoom(CAMERA.zoomMultiplier);
    resize();//need to call this to resize all objects
  }

  else if (keyCode === 68) {//zoom out "D"
  CAMERA.zoom(-CAMERA.zoomMultiplier);
  resize();//need to call this to resize all objects
  }
}
