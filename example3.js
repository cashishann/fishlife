var x = 30;
var y = 50;
var xSpeed=5;
var ySpeed=5;
var bg;
function setup(){
                                                                                                                                                                                                                                                                                                                                                                                                    
	createCanvas(700,500);
	
function draw(){
	ellipse(x,y,40,40); 
	x=x+xSpeed;
	y=y+ySpeed;

 if (y>height ||y<0) { 
	ySpeed=ySpeed*-1;
}
if (x>width || x<0){
	xSpeed= xSpeed*-1
}

}

