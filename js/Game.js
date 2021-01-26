class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    bee1 = createSprite(100,200);
    bee1.addImage(be1Img)
    
    bee2 = createSprite(300,200);
    bee2.addImage(be2Img)
    bee3 = createSprite(500,200);
   bee3.addImage(be3Img)
    bee4 = createSprite(700,200);
   bee4.addImage(be4Img)
    beetles = [bee1, bee2, bee3, bee4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      background("lightgreen")
      image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
    // image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
      //index of the array
      var index = 0;

      //x and y position of the beetles
      var x = 160;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the beetles a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the beetles in y direction
        y = displayHeight - allPlayers[plr].distance;
        beetles[index-1].x = x;
        beetles[index-1].y = y;

        if (index === player.index){
          beetles[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = beetles[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(player.distance>3850){
      gameState=2
      fill("red")
      text("Good Work",100,200)
    }
    drawSprites();
  }
  end(){
    console.log("GAME ENDED")
  } 
    
  }

