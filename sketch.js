var robot, robotImage, boss, bossImage, bullet, bulletImage;



    
function setup(){
    var canvas = createCanvas(800,800);
    robot=createSprite(400, 400, 50, 50);
    boss=createSprite(400, 200, 100, 100);
}

function draw(){
    background(0);

if(keyDown("LEFT_ARROW")){
    robot.x=robot.x-5;
}
if(keyDown("RIGHT_ARROW")){
    robot.x=robot.x+5;
}
if(keyDown("UP_ARROW")){
    robot.y=robot.y-5;
}
if(keyDown("DOWN_ARROW")){
    robot.y=robot.y+5;
}
if(robot.x<0||robot.x>800||robot.y>800||robot.y<0){
    fill("white");
   textFont("courier new")
   textSize(40);
    text("GAME OVER", 500, 500);  
    
}




    drawSprites();
}