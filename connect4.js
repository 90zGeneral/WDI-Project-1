var Cell = function (positionRow, positionCol) {  //Create constructor with 2 parameters to re-use later with other objects
	this.posHorizontal = positionRow;            //Set properties to the parameters
	this.posVertical = positionCol;
	this.empty = true;                        //Set a value to an empty postion because the game hasn't begun yet
	this.color = '';
	this.isEmpty = function() {                  //Create a function associated to the current value and return a boolean value of true
		return this.empty === true;
		
	},
	this.makeRed = function() {                  //Create a function that sets this.value to Red for when game is being played
		return this.color = 'Red';
	}

	this.makeBlue = function() {                //Create a function that sets this.value to Blue for the other player 
		return this.color = 'Blue';
	}
}



