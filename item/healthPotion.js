function healthPotion(){

  if(player.health >= 75){

    player.health = 100;
    player.sendmessage("You drink the potion... you can't heal over 100!");

  } else if {

  player.health = player.health + 25;
  player.sendmessage("You drink the potion... It tastes funny.");
  }
}
