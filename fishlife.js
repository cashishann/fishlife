var sprite1Xpos=0;
var sprite1Ypos=250;
var obst1Xpos= 250;
var obst1Ypos= 500;

var obst2Xpos= 800;
var obst2Ypos= 400

var obst1costumeXpos= 250;
var obst1costumeYpos= 500

var sprite1XSpeed =1;
var sprite1YSpeed =1;
var obst1XSpeed =15;
var obst1YSpeed =15;
var obst2XSpeed =10;
var obst2YSpeed =10;
var obst1costumeXSpeed= 20;
var obst1costumeYSpeed= 20;
var sprite1;  
var obst1;
var obst2;
var bg;
var obst1costume;
var bg2;
var bg3;
var bg4;
var spritecostume1
var spritecostume2

// timeing
var time = 0;
function setup (){ 
	createCanvas(1000,800);
	sprite1= loadImage("fishsprite.png");
	obst1=loadImage("fishsprite7.png");
	obst2=loadImage("fishsprite7.png");
	bg= loadImage("background.png");
	obst1costume= loadImage ("fishsprite7up.png")
	bg2= loadImage ("gameover2.png")
	bg3=loadImage ("gameover.png")
 	bg4=loadImage("winner.png")
	
spritecostume1=loadImage ("fishsprite2.png")
	spritecostume2= loadImage("fishspriteturndown.png")
}
//making the image move

function draw (){
clear();
background(bg);
image(sprite1,sprite1Xpos, sprite1Ypos, 150, 200);
//making the main sprite bounce	
sprite1Xpos=sprite1Xpos + sprite1XSpeed;
	
	if (sprite1Xpos>width - 130 || sprite1Xpos<0 - 20){
		sprite1XSpeed= sprite1XSpeed *0;
	
	}
//making the obstacles move/bounce	
	if (obst1Ypos>height -170 || obst1Ypos<0){
		obst1YSpeed= obst1YSpeed* -1
	}
	if (obst2Ypos>height -170|| obst2Ypos<0){
		obst2YSpeed= obst2YSpeed* -1
 }
	
		obst1Ypos = obst1Ypos + obst1YSpeed;

	
		obst2Ypos = obst2Ypos + obst2YSpeed;
//directing the main sprite with the keyboard
if (keyIsDown(UP_ARROW)){
	sprite1Ypos=sprite1Ypos-20                           
	//image(spritecostume1,sprite1Xpos,sprite1Ypos,150,300)
	
 }
if (keyIsDown(LEFT_ARROW)){
	sprite1Xpos=sprite1Xpos-10
 }
if (keyIsDown(RIGHT_ARROW)){
	sprite1Xpos=sprite1Xpos+15
}
if (keyIsDown(DOWN_ARROW)){
	sprite1Ypos=sprite1Ypos+10
}

// changing the costumes for the big fishes
if (obst1YSpeed > 0){
	image( obst1,obst1Xpos,obst1Ypos, 150,300);
} 
	else if (obst1YSpeed < 0){
		image (obst1costume,obst1Xpos,obst1Ypos,150,300);
	}
	if (obst2YSpeed > 0){
		image( obst2,obst2Xpos,obst2Ypos, 150,300);
	} 
	else if (obst2YSpeed < 0){
		image (obst1costume,obst2Xpos,obst2Ypos,150,300);
	}


// calculating distance between the orange fish and the green fish on the left
var distance1=dist(sprite1Xpos+75,sprite1Ypos+150,obst1Xpos+75,obst1Ypos+150)

// if the distance between the two fishes is close then end the game
if(distance1<=150){
	clear()
	background(bg2)
	noLoop();
}


// calculating distance between the orange fish and the green fish on the right
var distance2=dist(sprite1Xpos+75,sprite1Ypos+150,obst2Xpos+75,obst2Ypos+150)
// if the distance between the two fishes is close then end the game
if(distance2<=150){
	clear()
	background(bg3)
	noLoop();
}

// calculate time 
if (frameCount % 24 == 0){
	time++;
}
console.log(time);
if (time >= 30){
	clear()
	background(bg3)
	noLoop();
}

if (sprite1Xpos > width){
	clear();
	background(bg4);
	noLoop();
}

}
