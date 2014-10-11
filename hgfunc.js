var images = new Array(20);
var score = 0;
var attempts = 0;


function setImages() {
	images[0] = new Image(50, 50);
	images[0].src = "imgs/righthand1.jpg";
	images[1] = new Image(50, 50);
	images[1].src = "imgs/righthand2.jpg";
	images[2] = new Image(50, 50);
	images[2].src = "imgs/righthand3.jpg";
	images[3] = new Image(50, 50);
	images[3].src = "imgs/righthand4.jpg";
	images[4] = new Image(50, 50);
	images[4].src = "imgs/righthand5.jpg";
	images[5] = new Image(50, 50);
	images[5].src = "imgs/righthand6.jpg";
	images[6] = new Image(50, 50);
	images[6].src = "imgs/righthand7.jpg";
	images[7] = new Image(50, 50);
	images[7].src = "imgs/righthand8.jpg";
	images[8] = new Image(50, 50);
	images[8].src = "imgs/righthand9.jpg";
	images[9] = new Image(50, 50);
	images[9].src = "imgs/righthand10.jpg";
	images[10] = new Image(50, 50);
	images[10].src = "imgs/lefthand1.jpg";
	images[11] = new Image(50, 50);
	images[11].src = "imgs/lefthand2.jpg";
	images[12] = new Image(50, 50)
	images[12].src = "imgs/lefthand3.jpg";
	images[13] = new Image(50, 50);
	images[13].src = "imgs/lefthand4.jpg";
	images[14] = new Image(50, 50);
	images[14].src = "imgs/lefthand5.jpg";
	images[15] = new Image(50, 50);
	images[15].src = "imgs/lefthand6.jpg";
	images[16] = new Image(50, 50);
	images[16].src = "imgs/lefthand7.jpg";
	images[17] = new Image(50, 50);
	images[17].src = "imgs/lefthand8.jpg";
	images[18] = new Image(50, 50);
	images[18].src = "imgs/lefthand9.jpg";
	images[19] = new Image(50, 50);
	images[19].src = "imgs/lefthand10.jpg";
}


function chooseLeft() {
	var currentImage = document.getElementById("slide");
	var randomNumber = Math.floor(Math.random() * 21);
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
	} else {
		alert("Game Finished!" + "\n" + "You scored: " + score);
	}
}

function chooseRight() {
	var currentImage = document.getElementById("slide");
	var randomNumber = Math.floor(Math.random() * 21);
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
	} else {
		alert("Game Finished!" + "\n" + "You scored: " + score);
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
	alert("Game Finished Early!" + "\n" + "You scored: " + score);
}