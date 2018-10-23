var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var head = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			 this.classList.add("selected");
			 console.log("for loop");
			 if(this.textContent === "Easy"){
			 	numSquares = 3;
			 }
			 else{
			 	numSquares = 6;
			 } 
			 reset();
		});
	}


	for(var i=0; i < squares.length; i++){
		

		squares[i].addEventListener("click", function(){

			var clickedColor = this.style.backgroundColor;

			

			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColor(pickedColor);
				head.style.backgroundColor = pickedColor;

			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";

			}

		});
	}
	reset();

}



function reset(){

	colors = generateRandomColors(numSquares);
	//pick a new random color from the array
	pickedColor = pickColor();
	// change colorDisplay to match pickedColor 
	colorDisplay.textContent = pickedColor;
	//change colors of squares 
	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	//Change h1 color to default
	head.style.backgroundColor = "steelblue";
	messageDisplay.textContent = " ";
	resetButton.textContent = "New Colors?"

}

resetButton.addEventListener("click", function(){
	reset();
});



function changeColor(color){
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length );
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(var i=0; i<num; i++){
		arr.push(randomColor());

	}

	return arr;
}

function randomColor(){

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")" ;

}