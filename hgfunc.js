var images = new Array(20);
var score = 0;
var attempts = 0;
var inumberRightHand = 10;
var inumberLeftHand = 10;
        

function setImages() {
	for(i = 0; i < inumberRightHand; i++) {
	 	images[i] = new Image(50, 50);
	 	images[i].src = "imgs/righthand"+(i+1)+".jpg";
	}
    	for(j = 0; j < inumberLeftHand; j++) { 
	 	images[j+inumberRightHand] = new Image(50, 50);
	 	images[j+inumberRightHand].src = "imgs/lefthand"+(j+1)+".jpg";
    	}
}

function startGame() {
	var currentImage = document.getElementById("slide");
	currentImage.style.display = "block";
}

function chooseLeft() {
	var currentImage = document.getElementById("slide");
	var randomNumber = Math.floor(Math.random() * (1+images.Length));
	var scoreHTML = document.getElementById("score");
	if (attempts != 20) {
		if (currentImage.src.indexOf("left") < 0) {
			attempts++;
			currentImage.src = images[randomNumber].src;
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

function chooseRight() {
	var currentImage = document.getElementById("slide");
	var randomNumber = Math.floor(Math.random() * (1+images.Length));
	var scoreHTML = document.getElementById("score");
	if (attempts != 20) {
		if (currentImage.src.indexOf("right") < 0) {
			attempts++;
			currentImage.src = images[randomNumber].src;
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

function finishEarly() {
	alert("Game Finished Early!" + "\n" + "You scored: " + score + "/" + attempts);
}
