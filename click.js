var line1 = $('.col0');                        //Grab every cell in col 0
var line2 = $('.col1');                        //Grab every cell in col 1
var line3 = $('.col2');
var line4 = $('.col3');
var line5 = $('.col4');
var line6 = $('.col5');

var turn = 0;

var clicked1 = function() {
	var clickedPositionArray = $(this).attr("class").split(" ");
	for(var i = 0; i < operation.table.length; i++) {
		var tableRow = operation.table[i];
		for(var j = 0; j < tableRow.length; j++) {			
			if(tableRow[j].posHorizontal === clickedPositionArray[0] && tableRow[j].posVertical === clickedPositionArray[1]) {
				myObject = tableRow[j];
			}
		}
	}
	console.log(myObject);
	// if (turn === 0) {
	// 	if(line1 === this.isEmpty) {
	// 		if('.row5 col0' === this.isEmpty) {
	// 			this.makeRed;
	// 			turn = 1;
	// 		}
	// 		else if('.row5 col0' !== this.isEmpty && '.row4 col0' === this.isEmpty) {
	// 			this.makeRed;
	// 			turn = 1;
	// 		}
	// 		else if('.row4 col0' !== this.isEmpty && '.row3 col0' === this.isEmpty) {
	// 			this.makeRed;
	// 			turn = 1;
	// 		}
	// 		else if('.row3 col0' !== this.isEmpty && '.row2 col0' === this.isEmpty) {
	// 			this.makeRed;
	// 			turn = 1;
	// 		}
	// 		else if('.row2 col0' !== this.isEmpty && '.row1 col0' === this.isEmpty) {
	// 			this.makeRed;
	// 			turn = 1;			
	// 		}
	// 		else if('.row1 col0' !== this.isEmpty && '.row0 col0' === this.isEmpty) {
	// 			this.makeRed;
	// 			turn = 1;
	// 		}
	// 	}
	// }
	// else if (turn === 1) {
	// 	if(line1 === this.isEmpty) {
	// 		if('.row5 col0' === this.isEmpty) {
	// 			this.makeBlue;
	// 			turn = 0;
	// 		}
	// 		else if('.row5 col0' !== this.isEmpty && '.row4 col0' === this.isEmpty) {
	// 			this.makeBlue;
	// 			turn = 0;
	// 		}
	// 		else if('.row4 col0' !== this.isEmpty && '.row3 col0' === this.isEmpty) {
	// 			this.makeBlue;
	// 			turn = 0;
	// 		}
	// 		else if('.row3 col0' !== this.isEmpty && '.row2 col0' === this.isEmpty) {
	// 			this.makeBlue;
	// 			turn = 0;
	// 		}
	// 		else if('.row2 col0' !== this.isEmpty && '.row1 col0' === this.isEmpty) {
	// 			this.makeBlue;
	// 			turn = 0;			
	// 		}
	// 		else if('.row1 col0' !== this.isEmpty && '.row0 col0' === this.isEmpty) {
	// 			this.makeBlue;
	// 			turn = 0;
	// 		}
	// 	}
	// }
};

var clicked2 = function() {
	var clickedPositionArray = $(this).attr("class").split(" ");
	for(var i = 0; i < operation.table.length; i++) {
		var tableRow = operation.table[i];
		for(var j = 0; j < tableRow.length; j++) {			
			if(tableRow[j].posHorizontal === clickedPositionArray[0] && tableRow[j].posVertical === clickedPositionArray[1]) {
				myObject = tableRow[j];
			}
		}
	}
	console.log(myObject);
}

var clicked3 = function() {
	var clickedPositionArray = $(this).attr("class").split(" ");
	for(var i = 0; i < operation.table.length; i++) {
		var tableRow = operation.table[i];
		for(var j = 0; j < tableRow.length; j++) {			
			if(tableRow[j].posHorizontal === clickedPositionArray[0] && tableRow[j].posVertical === clickedPositionArray[1]) {
				myObject = tableRow[j];
			}
		}
	}
	console.log(myObject);	
}

var clicked4 = function() {
	var clickedPositionArray = $(this).attr("class").split(" ");
	for(var i = 0; i < operation.table.length; i++) {
		var tableRow = operation.table[i];
		for(var j = 0; j < tableRow.length; j++) {			
			if(tableRow[j].posHorizontal === clickedPositionArray[0] && tableRow[j].posVertical === clickedPositionArray[1]) {
				myObject = tableRow[j];
			}
		}
	}
	console.log(myObject);	
}

var clicked5 = function() {
	var clickedPositionArray = $(this).attr("class").split(" ");
	for(var i = 0; i < operation.table.length; i++) {
		var tableRow = operation.table[i];
		for(var j = 0; j < tableRow.length; j++) {			
			if(tableRow[j].posHorizontal === clickedPositionArray[0] && tableRow[j].posVertical === clickedPositionArray[1]) {
				myObject = tableRow[j];
			}
		}
	}
	console.log(myObject);	
}

var clicked6 = function() {
	var clickedPositionArray = $(this).attr("class").split(" ");
	for(var i = 0; i < operation.table.length; i++) {
		var tableRow = operation.table[i];
		for(var j = 0; j < tableRow.length; j++) {			
			if(tableRow[j].posHorizontal === clickedPositionArray[0] && tableRow[j].posVertical === clickedPositionArray[1]) {
				myObject = tableRow[j];
			}
		}
	}
	console.log(myObject);	
}








