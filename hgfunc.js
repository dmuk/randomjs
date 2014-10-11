var images = new Array(20); //Declare Array to hold the images
var score = 0; //Variable to store the score so it can be displayed
var attempts = 0;  //Record how many attempts so that when it reaches a max amount you fail
var inumberRightHand = 10; //number of right hand images in the images array
var inumberLeftHand = 10; //number of left hand images in the images array
        
        
        
/**
  * @desc fill the images array with saved resources
*/ 

function setImages() {
	//these for loop fill the array with the images of the hands
	for(i = 0; i < inumberRightHand; i++) { 
	 	images[i] = new Image(50, 50); //creates a new instance of an image at the last unused index
	 	images[i].src = "imgs/righthand"+(i+1)+".jpg"; //sets the image equal to a  right hand
	}
	
	
    	for(j = 0; j < inumberLeftHand; j++) { 
	 	images[j+inumberRightHand] = new Image(50, 50); 
	 	images[j+inumberRightHand].src = "imgs/lefthand"+(j+1)+".jpg";
    	}
}


/** 
  * @desc changes the HTML Elements syle/displayready for the game
*/  
function startGame() {
	var currentImage = document.getElementById("slide");  
	var startBtn = document.getElementById("startButton");
	var leftBtn = document.getElementById("left");
	var rightBtn = document.getElementById("right");
	var orTxt = document.getElementById("or");
	var scoreHTML = document.getElementById("score");
	
	startBtn.style.display = "none";
	currentImage.style.display = "block";
	currentImage.style.margin = "0 auto 30px";
	leftBtn.style.display = "inline";
	rightBtn.style.display = "inline";
	orTxt.style.display = "inline";
	scoreHTML.style.display = "block";
}


/** 
  * @desc check if the correct hand choice has been made
  * @param bool isLeftHand parse true if the left hand is chosen
*/  
function chooseHand(bool isLeftHand) {
	var currentImage = document.getElementById("slide");
	var randomNumber = Math.floor(Math.random() * (1+images.Length));
	var scoreHTML = document.getElementById("score");
	if (attempts != 20) {
		if ((currentImage.src.indexOf("left") < 0 && isLeftHand == true) || (currentImage.src.indexOf("right") < 0 && isLeftHand == false)) {
			attempts++;
			currentImage.src = images[randomNumber].src;
		}
		} else {
			attempts++;
			score++;
			scoreHTML.innerHTML = score.toString();
			currentImage.src = images[randomNumber].src;
		}
		images.splice(randomNumber,1);
	} else {
		alert("Game Finished!" + "\n" + "You scored: " + score + "/20");
	}
}


/** 
  * @desc reset the game ready for it to be played again
*/  
function resetGame() {
	setImages();
	var currentImage = document.getElementById("slide");
	var randomNumber = Math.floor(Math.random() * (1+images.Length));
	var scoreHTML = document.getElementById("score");
	score = 0;
	attempts = 0;
	scoreHTML.innerHTML = score.toString();
	currentImage.src = images[randomNumber].src;
	images.splice(randomNumber,1);
}


/** 
  * @desc called if you exit the game before it is supposed to finish
*/ 
function finishEarly() {
	alert("Game Finished Early!" + "\n" + "You scored: " + score + "/" + attempts);
}
