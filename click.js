
var turn = 0;                                       //Global variable to represent which player turn is it

var clicked = function() {                          //This function contains everything needed for the event listener within the window onlad function
	
	var target = $(event.target);                  //Used for the individual cells being clicked on one at a time as the current target click
	if (turn === 0) {

			target.addClass('player1')
			target.css('background-color', 'red');
			turn = 1;

	}
	else if (turn = 1) {

			target.addClass('player2')
			target.css('background-color', 'blue');
			turn = 0;	
	}

};



























	// var clickedPositionArray = $(this).attr("class").split(" ");
	// console.log(clickedPositionArray)
	// for(var i = 0; i < operation.table.length; i++) {
	// 	var tableRow = operation.table[i];
	// 	for(var j = 0; j < tableRow.length; j++) {			
	// 		if(tableRow[j].posHorizontal === clickedPositionArray[0] && tableRow[j].posVertical === clickedPositionArray[1]) {
	// 			myObject = tableRow[j];
	// 		}
	// 	}
	// }

	// //check to see what the nearest empty one is
	// console.log(myObject)
	// var vert = "." + myObject.posVertical
	// var column = $(vert);
	// var index = vert[vert.length - 1]
	// console.log(index)

	// for(var k = 0; k < operation.table.length; k++){
	// 	var currentRow = operation.table[k]
	// 	for(var l = 0; l < currentRow.length; l++){
	// 		if(currentRow[index].isEmpty()) {
	// 			$(".row" + k + ".col" + index).css("background-color", "red");
	// 		}
	// 	}
	// }


	


	
	


	







