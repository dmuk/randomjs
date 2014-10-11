var images = new Array(20);
var score = 0;
var attempts = 0;
var inumberRightHand = 10;
var inumberLeftHand = 10;
        

function setImages() {
	for(i = 0; i < inumberRightHand; i++) {
	 	handimages[i] = new Image(50, 50);
	 	handimages.src[i] = "imgs/righthand"+(i+1)+".jpg";
	}
    	for(j = inumberRightHand; j < inumberLeftHand+inumberRightHand; j++) { 
	 	handimages[j] = new Image(50, 50);
	 	handimages[j].src = "img/lefthand"+(j+1)+".jpg";
    	}
}


function chooseHand() {
	var currentImage = document.getElementById("slide");
	var randomNumber = Math.floor(Math.random() * 21);
	var scoreHTML = document.getElementById("score");
	if (attempts != 20) {
		if (currentImage.src.indexOf("left") < 0) {
			attempts++;
			currentImage.src = images[randomNumber].src;
		}
		else if(currentImage.src.indexOf("right") < 0) {
			attempts++;
			currentImage.src = images[randomNumber].src;
		}
		else {
			attempts++;
			score++;
			scoreHTML.innerHTML = score.toString();
			currentImage.src = images[randomNumber].src;
		}
	} else {
		alert("Game Finished!" + "\n" + "You scored: " + score + "/20");
	}
}

function resetGame() {
	score = 0;
	attempts = 0;
	var scoreHTML = document.getElementById("score");
	scoreHTML.innerHTML = score.toString();
	currentImage.src = images[randomNumber].src;
}

function finishEarly() {
	alert("Game Finished Early!" + "\n" + "You scored: " + score + "/" + attempts);
}
