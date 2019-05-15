function addItem(item){

  if(player.playerInventory.legnth === 10){


    return false;
    //inventory full
    console.log("your inventory is full");


  }

  player.playerInventory.push(item)

  return true;
  //test


}
