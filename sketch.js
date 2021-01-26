var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var beetles, bee1, bee2, bee3, bee4;
var be1Img,be2Img,be3Img,be4Img;

var trackImg

function preload() {
  be1Img=loadImage("1.png")
  be2Img=loadImage("2.png")
  be3Img=loadImage("3.png")
  be4Img=loadImage("4.png")

 trackImg=loadImage("track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
 
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
    
  }
}
