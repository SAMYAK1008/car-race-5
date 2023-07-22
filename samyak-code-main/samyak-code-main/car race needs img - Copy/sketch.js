var backgroundimage;
var road,roadImg;
var car,carImg;
var coin,coinImg;
var score=0
function preload(){
   backgroundimage=loadImage("th.jpg") ;
   roadImg=loadImage("bg.jpg");
   carImg=loadImage("car1.png");
   coinImg=loadImage("coin1.png");
}
function setup(){
    createCanvas(800,800);
road=createSprite(500,700,1200,400);
road.addImage("racing",roadImg);
car=createSprite(100,600,400,100);
car.addImage(carImg);
car.scale=0.3;


}

function draw(){
    background(backgroundimage);
   if(keyIsDown(DOWN_ARROW)&&car.y<800){
    car.y=car.y+5
   }
if (keyIsDown(UP_ARROW)&&car.y>600){
    car.y=car.y-5
    
}
road.velocityX=-1;
if(road.x<=300){
    road.x=500;

}
bringCoins()
text("SCORE: "+score,600,50)

    drawSprites();
    
}

function bringCoins(){
    if(frameCount%60===0){
        coin=createSprite(700,600,50,50);
        coin.addImage(coinImg)
        coin.scale=0.1
        coin.velocityX=-3;
        coin.y=Math.round(random(600,800));
    }
}