var playerOneTurn = 1;    //Set player turns starting at 1
var playerTwoTurn = 1;


var Cell = function (positionRow, positionCol) {  //Create constructor with 2 parameters to re-use later with other objects
	this.posHorizontal = positionRow;            //Set properties to the parameters
	this.posVertical = positionCol;
	this.value = 'empty';                        //Set a value to an empty postion because the game hasn't begun yet

	this.isEmpty = function() {                  //Create a function associated to the current value and return a boolean value of true
		if(this.value === 'empty') {
			return true;
		}
	}

	this.makeRed = function() {                  //Create a function that sets this.value to Red for when game is being played
		this.value = 'Red';
	}

	this.makeBlue = function() {                //Create a function that sets this.value to Blue for the other player 
		this.value = 'Blue';
	}
}



