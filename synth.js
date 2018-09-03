//Basic *REALLY* Basic rhythm game.

var sounds = [];
var bubbles = [];
var shapes = [];
var inkSound = [];

// load in all the music sounds!
var gameOver = false;
 
var timerDuration = 10 * 6400;	// 123 seconds // 2 minutes 3 Seconds
 

function preload() {
	
	sounds[0] = loadSound("assets/drum/kick1.wav");
	sounds[1] = loadSound("assets/drum/clap.wav");
	sounds[2] = loadSound("assets/ShotExplosionDirect00.wav");
	sounds[3] = loadSound("assets/drum/cowbell.wav");
	sounds[4] = loadSound("assets/negative.wav");
	sounds[5] = loadSound("assets/boss3.wav");
	sounds[6] = loadSound("assets/Gachihoko_Charge_Loop00.wav");
	sounds[7] = loadSound("assets/PlayerWeaponRollerSwing00.wav");
	sounds[8] = loadSound("assets/drum/kick2.wav");
	sounds[9] = loadSound("assets/ChargeShot01.wav");
	sounds[10] = loadSound("assets/BombBomb00.wav");
	sounds[11] = loadSound("assets/touchon01.wav");
	
	
	
	inkSound = [ loadSound("assets/inkHit00.wav"), loadSound("assets/inkHit01.wav"), loadSound("assets/inkHit02.wav"),loadSound("assets/inkHit03.wav"),loadSound("assets/inkHit04.wav"),
	loadSound("assets/inkHit05.wav"),loadSound("assets/inkHit06.wav"),loadSound("assets/inkHit07.wav"),loadSound("assets/inkHit08.wav"),loadSound("assets/inkHit09.wav"),loadSound("assets/inkHit10.wav"),
	loadSound("assets/inkHit11.wav"),loadSound("assets/inkHit12.wav"),loadSound("assets/inkHit13.wav"),loadSound("assets/inkHit14.wav"),loadSound("assets/inkHit15.wav")];
	
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
        background(120,0,120);
		sounds[5].play();
		
		// "tracks" music duration
		timerDuration += millis();
}

function draw() {
	
if(!gameOver) {
 
		// draw the timer
		textSize(100);
		fill(120);
		textAlign(CENTER, CENTER);
 
		// timer is equal to the total duration minus how many
		// millis have passed
		var timer = timerDuration - millis();
 
		// turn into seconds, whole numbers.
		timer = int(timer/1000);
 
		// show it. nah
		//text(timer, width/2, 200);
		
		// canvas will display a key
		// depending on the timer.
		if(timer == 57) {
		 text("S", width/2, height/2);
		}
		if(timer == 55) {
		 text("ADADADA...", width/2, (height/2)-100);
		}
		if(timer == 52 ) {
		 text("SpaceBar", width/2, (height/2)+100);
		}
		if(timer == 48 ) {
		 text("S", width/2, height/2);
		}
		if(timer == 46 ) {
		 text("W W W W W W W", width/2, (height/2)-100);
		 }
		if(timer == 43 ) {
		 text("UP ARROW", width/2, (height/2)+100);
		}
		if(timer == 38 ){
			text("S", width/2, height/2);
		}
		if(timer == 32){
			text("MouseClick", width/2, (height/2)-100);
		}
		if(timer == 28){
			text("LeftArrow", width/2, height/2);
		}
		if(timer == 23){
			text("RightArrow", width/2, height/2);
		} 
		if(timer == 18){
			text("Mix it up", width/2, height/2);
		}
		
		// if weve reached 0, game over.
		if(timer <= 0) {
			gameOver = true;
		}
 
	} else {
		// game is over!
		text("The end!", width/2, 200);
	}
	
	
	
		for(var i = bubbles.length - 1; i >= 0; i--) {
			// update and display all bubbles
			bubbles[i].update();
			bubbles[i].display();
 
			// check life of bubbles
			if(bubbles[i].life < 0) {
				// if low life, delete
				bubbles.splice(i,1);
			}

	 
 
		}
}

function mouseClicked() {
	// make a new bubble at mouse location
	// if we drag mouse
	background(255,100,150);
	var randInk = int(random(inkSound.length));
	bubbles.push(new Bubble());
	inkSound[randInk].play();
}


function keyPressed() {
	// for specific keys play and do specific thing
	if(key == 'A') {
		background(255);
		background(255,0,0,50);
		sounds[0].play();
		
	}

	if(key == 'W') {
		background(255);
		background(0,0,255,50);
		sounds[1].play();
	}

	if(key == 'S'){
		background(255);
		sounds[6].play();
		background(100,50,80,80)
		}
	// space bar
	if(keyCode == 32){
			background(255);
			background(255);
			sounds[2].play();
		}
	if(key == 'D') {
		background(255);
		background(0,255,0, 50);
		sounds[8].play();
		
	}
	
	//up arrow
	if(keyCode == 38) {
		background(255);
		background(0,255,0, 100);
		sounds[7].play();
		
	}
	//down arrow
	if(keyCode == 40) {
		background(255);
		background(0,255,0, 100);
		sounds[9].play();
		
	}
	//left arrow
	if(keyCode == 37) {
		background(255);
		background(0,255,0, 100);
		sounds[10].play();
		
	}
	//right arrow
	if(keyCode == 39) {
		background(255);
		background(0,255,0, 100);
		sounds[11].play();
		
	}
}

// create a class
function Bubble() {
 
	// internal variables
	this.x = mouseX;
	this.y = mouseY;
 
	// d is short for diameter
	this.d = random(50, 130);
 
	this.life = 500;
 
	// internal functions for object
	this.update = function() {
		this.life--;
		this.x += random(-2,2);
		this.y += random(-2,6);
	}
 
	this.display = function() {
		noStroke();
		
		
		fill(90,200,255, this.life);
		ellipse(this.x, this.y, this.d, this.d);
		fill(255,100,90, this.life);
		ellipse((this.x)+100, this.y, this.d, this.d);
		fill(90,255,90, this.life);
		ellipse((this.x)-100, this.y, this.d, this.d);
	}
}
