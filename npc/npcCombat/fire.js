class fire {

constructor(x,y,size){
this.x = x;
this.y = y;
this.size = 5;
this.speed;
this.legnth = 1; //how long our fire pixels will play
this.time = 10; //how long our fire affect will last after fire is gone
this.damage = 5; // player will recieve 5 damage per second as long as time is > 0
this.rectsmade;


// this will make a whole bunch of tiny rects that will start at yellow and turn red as they move upwards
// WIP


}

draw(){

rect(this.x, this.y , this.size, this.size);

}



}
