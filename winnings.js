var a1 = $('.row0col0'), a2 = $('.row0col1'), a3 = $('.row0col2'), a4 = $('.row0col3'), a5 = $('.row0col4'), a6 = $('.row0col5'), a7 = $('.row0col6'),
	b1 = $('.row1col0'), b2 = $('.row1col1'), b3 = $('.row1col2'), b4 = $('.row1col3'), b5 = $('.row1col4'), b6 = $('.row1col5'), b7 = $('.row1col6'),
	c1 = $('.row2col0'), c2 = $('.row2col1'), c3 = $('.row2col2'), c4 = $('.row2col3'), c5 = $('.row2col4'), c6 = $('.row2col5'), c7 = $('.row2col6'),
	d1 = $('.row3col0'), d2 = $('.row3col1'), d3 = $('.row3col2'), d4 = $('.row3col3'), d5 = $('.row3col4'), d6 = $('.row3col5'), d7 = $('.row3col6'),
	e1 = $('.row4col0'), e2 = $('.row4col1'), e3 = $('.row4col2'), e4 = $('.row4col3'), e5 = $('.row4col4'), e6 = $('.row4col5'), e7 = $('.row4col6'),
	f1 = $('.row5col0'), f2 = $('.row5col1'), f3 = $('.row5col2'), f4 = $('.row5col3'), f5 = $('.row5col4'), f6 = $('.row5col5'), f7 = $('.row5col6') 

var winningCombos = [
					[f4, e5, d6, c7], [f3, e4, d5, c6], [e4, d5, c6, b7], [f2, e3, d4, c5], [e3, d4, c5, b6],
					[d4, c5, b6, a7], [f1, e2, d3, c4], [e2, d3, c4, b5], [d3, c4, b5, a6], [e1, d2, c3, b4],
					[d2, c3, b4, a5], [d1, c2, b3, a4], [c1, d2, e3, f4], [b1, c2, d3, e4], [c2, d3, e4, f5], 
					[a1, b2, c3, d4], [b2, c3, d4, e5], [c3, d4, e5, f6], [a2, b3, c4, d5], [b3, c4, d5, e6],
					[c4, d5, e6, f7], [a3, b4, c5, d6], [b4, c5, d6, e7], [a4, b5, c6, d7], [a1, a2, a3, a4],
					[a2, a3, a4, a5], [a3, a4, a5, a6], [a4, a5, a6, a7], [b1, b2, b3, b4], [b2, b3, b4, b5],
					[b3, b4, b5, b6], [b4, b5, b6, b7], [c1, c2, c3, c4], [c2, c3, c4, c5], [c3, c4, c5, c6],
					[c4, c5, c6, c7], [d1, d2, d3, d4], [d2, d3, d4, d5], [d3, d4, d5, d6], [d4, d5, d6, d7],
					[e1, e2, e3, e4], [e2, e3, e4, e5], [e3, e4, e5, e6], [e4, e5, e6, e7], [f1, f2, f3, f4],
					[f2, f3, f4, f5], [f3, f4, f5, f6], [f4, f5, f6, f7], [a1, b1, c1, d1], [b1, c1, d1, e1],
					[c1, d1, e1, f1], [a2, b2, c2, d2], [b2, c2, d2, e2], [c2, d2, e2, f2], [a3, b3, c3, d3],
					[b3, c3, d3, e3], [c3, d3, e3, f3], [a4, b4, c4, d4], [b4, c4, d4, e4], [c4, d4, e4, f4],
					[a5, b5, c5, d5], [b5, c5, d5, e5], [c5, d5, e5, f5], [a6, b6, c6, d6], [b6, c6, d6, e6],
					[c6, d6, e6, f6], [a7, b7, c7, d7], [b7, c7, d7, e7], [c7, d7, e7, f7]	
					];


var whoWon = function () {
	for(var i = 0; i < winningCombos.length; i++) {
		var redCount = 0,
			blueCount = 0;
		for(var j = 0; j < winningCombos[i].length; j++) {
			if (winningCombos[i][j].attr('class') === 'player1') {
				redCount++;
				if(redCount === 4) {
					alert("player1 won");
				}
				console.log('player1 ' + blueCount);
			}
			else if (winningCombos[i][j].attr('class') === 'player2') {
				blueCount++;
				console.log('player2 ' + redCount);
				if (redCount === 4) {
					alert("player2 won");
				}
			}
		}
		
		
	}

};
