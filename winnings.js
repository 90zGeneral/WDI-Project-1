
var winningCombos = [
					[$("#row5col3"), $("#row4col4"), $("#row3col5"), $("#row2col6")], [$("#row5col2"), $("#row4col3"), $("#row3col4"), $("#row2col5")], 
					[$("#row4col3"), $("#row3col4"), $("#row2col5"), $("#row1col6")], [$("#row5col1"), $("#row4col2"), $("#row3col3"), $("#row2col4")],
					[$("#row4col2"), $("#row3col3"), $("#row2col4"), $("#row1col5")], [$("#row3col3"), $("#row2col4"), $("#row1col5"), $("#row0col6")], 
					[$("#row5col0"), $("#row4col1"), $("#row3col2"), $("#row2col3")], [$("#row4col1"), $("#row3col2"), $("#row2col3"), $("#row1col4")], 
					[$("#row3col2"), $("#row2col3"), $("#row1col4"), $("#row0col5")], [$("#row4col0"), $("#row3col1"), $("#row2col2"), $("#row1col3")],
					[$("#row3col1"), $("#row2col2"), $("#row1col3"), $("#row0col4")], [$("#row3col0"), $("#row2col1"), $("#row1col2"), $("#row0col3")], 
					[$("#row2col0"), $("#row3col1"), $("#row4col2"), $("#row5col3")], [$("#row1col0"), $("#row2col1"), $("#row3col2"), $("#row4col3")], 
					[$("#row2col1"), $("#row3col2"), $("#row4col3"), $("#row5col4")], [$("#row0col0"), $("#row1col1"), $("#row2col2"), $("#row3col3")], 
					[$("#row1col1"), $("#row2col2"), $("#row3col3"), $("#row4col4")], [$("#row2col2"), $("#row3col3"), $("#row4col4"), $("#row5col5")], 
					[$("#row0col1"), $("#row1col2"), $("#row2col3"), $("#row3col4")], [$("#row1col2"), $("#row2col3"), $("#row3col4"), $("#row4col5")],
					[$("#row2col3"), $("#row3col4"), $("#row4col5"), $("#row5col6")], [$("#row0col2"), $("#row1col3"), $("#row2col4"), $("#row3col5")], 
					[$("#row1col3"), $("#row2col4"), $("#row3col5"), $("#row4col6")], [$("#row0col3"), $("#row1col4"), $("#row2col5"), $("#row3col6")], 
					[$("#row0col0"), $("#row0col1"), $("#row0col2"), $("#row0col3")], [$("#row0col1"), $("#row0col2"), $("#row0col3"), $("#row0col4")], 
					[$("#row0col2"), $("#row0col3"), $("#row0col4"), $("#row0col5")], [$("#row0col3"), $("#row0col4"), $("#row0col5"), $("#row0col6")], 
					[$("#row1col0"), $("#row1col1"), $("#row1col2"), $("#row1col3")], [$("#row1col1"), $("#row1col2"), $("#row1col3"), $("#row1col4")],
					[$("#row1col2"), $("#row1col3"), $("#row1col4"), $("#row1col5")], [$("#row1col3"), $("#row1col4"), $("#row1col5"), $("#row1col6")], 
					[$("#row2col0"), $("#row2col1"), $("#row2col2"), $("#row2col3")], [$("#row2col1"), $("#row2col2"), $("#row2col3"), $("#row2col4")], 
					[$("#row2col2"), $("#row2col3"), $("#row2col4"), $("#row2col5")], [$("#row2col3"), $("#row2col4"), $("#row2col5"), $("#row2col6")], 
					[$("#row3col0"), $("#row3col1"), $("#row3col2"), $("#row3col3")], [$("#row3col1"), $("#row3col2"), $("#row3col3"), $("#row3col4")], 
					[$("#row3col2"), $("#row3col3"), $("#row3col4"), $("#row3col5")], [$("#row3col3"), $("#row3col4"), $("#row3col5"), $("#row3col6")],
					[$("#row4col0"), $("#row4col1"), $("#row4col2"), $("#row4col3")], [$("#row4col1"), $("#row4col2"), $("#row4col3"), $("#row4col4")], 
					[$("#row4col2"), $("#row4col3"), $("#row4col4"), $("#row4col5")], [$("#row4col3"), $("#row4col4"), $("#row4col5"), $("#row4col6")], 
					[$("#row5col0"), $("#row5col1"), $("#row5col2"), $("#row5col3")], [$("#row5col1"), $("#row5col2"), $("#row5col3"), $("#row5col4")], 
					[$("#row5col2"), $("#row5col3"), $("#row5col4"), $("#row5col5")], [$("#row5col3"), $("#row5col4"), $("#row5col5"), $("#row5col6")], 
					[$("#row0col0"), $("#row1col0"), $("#row2col0"), $("#row3col0")], [$("#row1col0"), $("#row2col0"), $("#row3col0"), $("#row4col0")],
					[$("#row2col0"), $("#row3col0"), $("#row4col0"), $("#row5col0")], [$("#row0col1"), $("#row1col1"), $("#row2col1"), $("#row3col1")], 
					[$("#row1col1"), $("#row2col1"), $("#row3col1"), $("#row4col1")], [$("#row2col1"), $("#row3col1"), $("#row4col1"), $("#row5col1")], 
					[$("#row0col2"), $("#row1col2"), $("#row2col2"), $("#row3col2")], [$("#row1col2"), $("#row2col2"), $("#row3col2"), $("#row4col2")], 
					[$("#row2col2"), $("#row3col2"), $("#row4col2"), $("#row5col2")], [$("#row0col3"), $("#row1col3"), $("#row2col3"), $("#row3col3")], 
					[$("#row1col3"), $("#row2col3"), $("#row3col3"), $("#row4col3")], [$("#row2col3"), $("#row3col3"), $("#row4col3"), $("#row5col3")],
					[$("#row0col4"), $("#row1col4"), $("#row2col4"), $("#row3col4")], [$("#row1col4"), $("#row2col4"), $("#row3col4"), $("#row4col4")], 
					[$("#row2col4"), $("#row3col4"), $("#row4col4"), $("#row5col4")], [$("#row0col5"), $("#row1col5"), $("#row2col5"), $("#row3col5")], 
					[$("#row1col5"), $("#row2col5"), $("#row3col5"), $("#row4col5")], [$("#row2col5"), $("#row3col5"), $("#row4col5"), $("#row5col5")], 
					[$("#row0col6"), $("#row1col6"), $("#row2col6"), $("#row3col6")], [$("#row1col6"), $("#row2col6"), $("#row3col6"), $("#row4col6")], 
					[$("#row2col6"), $("#row3col6"), $("#row4col6"), $("#row5col6")]	
					];


var whoWon = function () {

	if ($("#row0col0").hasClass("player1") === true && $("#row0col1").hasClass("player1") === true && $("#row0col2").hasClass("player1") === true && $("#row0col3").hasClass("player1") === true) {
		console.log('winner');
	}
	else if ($("#row0col0").hasClass("player2") === true && $("#row0col1").hasClass("player2") === true && $("#row0col2").hasClass("player2") === true && $("#row0col3").hasClass("player2") === true) {
		console.log('winner');
	}
	else if ($("#row3col3").hasClass("player1") === true && $("#row2col4").hasClass("player1") === true && $("#row1col5").hasClass("player1") === true && $("#row0col6").hasClass("player1") === true) {
		console.log('winner');
	} 
	else if ($("#row3col3").hasClass("player2") === true && $("#row2col4").hasClass("player2") === true && $("#row1col5").hasClass("player2") === true && $("#row0col6").hasClass("player2") === true) {
		console.log('winner');
	} 
	else if ($("#row5col3").hasClass("player1") === true && $("#row4col3").hasClass("player1") === true && $("#row3col3").hasClass("player1") === true && $("#row2col3").hasClass("player1") === true) {
		console.log('winner');
	} 
	else if ($("#row5col3").hasClass("player2") === true && $("#row4col3").hasClass("player2") === true && $("#row3col3").hasClass("player2") === true && $("#row2col3").hasClass("player2") === true) {
		console.log('winner');
	} 
// 	for(var i = 0; i < winningCombos.length; i++) {
// 		var redCount = 0;
// 		var	blueCount = 0;
// 		for(var j = 0; j < winningCombos[i].length; j++) {
// 			var matchingSet = winningCombos[i][j];
// 			if (matchingSet.hasClass('player1') === true) {
// 				redCount++;
// 				if(redCount === 4) {
// 					alert("player1 won");
// 				}
// 				console.log('player1 ' + redCount);
// 			}
// 			else if (matchingSet.hasClass('player2') === true) {
// 				blueCount++;
// 				if (blueCount === 4) {
// 					alert("player2 won");
// 				}
// 				console.log('player2 ' + blueCount);
// 			}
// 		}	
// 	}
};




