class Player{
constructor(){
this.name=null;
this.distance=0;
this.index=0;

    
}
getcount(){
    var playercountRef  = database.ref('playerCount');
    playercountRef.on("value",function(data){
       playerCount=data.val();
    })

  }

  updateCount(Count){
    database.ref('/').update({
      playerCount: Count
    });
  }



}