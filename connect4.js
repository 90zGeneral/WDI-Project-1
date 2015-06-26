var Cell = function (positionRow, positionCol) {  //Create constructor with 2 parameters to re-use later with other objects
	this.posHorizontal = positionRow;            //Set properties to the parameters
	this.posVertical = positionCol;
	this.empty = 'empty';                        //Set a value to an empty postion because the game hasn't begun yet

	this.isEmpty = function() {                  //Create a function associated to the current value and return a boolean value of true
		return this.empty = 'empty';
	},
	this.makeRed = function() {                  //Create a function that sets this.value to Red for when game is being played
		return this.empty = 'Red';
	}

	this.makeBlue = function() {                //Create a function that sets this.value to Blue for the other player 
		return this.empty = 'Blue';
	}
}



