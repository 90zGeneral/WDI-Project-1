var operation = {                              //Create an object that holds keys and valued needed later
	firstPlayerName: '',                       //Set player names blank so the input values can be pushed into them
	secondPlayerName: '',
	rowsAmount: 6,                             //Determine the amount of rows on the table
 	colsAmount: 7,                             //Set amount of columns in each row
 	table: []                                  //Make table an empty array for rows and columns to be pushed into later
};



var board = function() {                                           //A function for the creation of the board and the cells it contains.
	for(var x = 0; x < operation.rowsAmount; x++) {               //This for loop is for creating the rows
		var createRow = $('<div>').addClass('row');                //Create a div element with a class and the loop with create the addition others 
		var table = $('.table');                                    //Grab the table element already existing in the html file
		table.append(createRow);                                       //Add each new div to the table element
		for(var z = 0; z < operation.colsAmount; z++) {                //Nest another for loop inside the previous one for the creating of the columns inside each row
			var row = ("row"+x);                                        //Create variable row to holds the position of each row each time it iterates through the loop and use that variable name as a parameter in the new Cell object being returned. 
			var col = ("col"+z);                                       //Samething here for columns
			operation.table.push(new Cell (row, col));                //Access the table key in the operation object and push the new Cell objects of each cell in that empty array
			var newDiv = $('<div>').addClass('cols')
			newDiv.attr('id', 'row'+x+'col'+z);
			$('.row').eq(x).append(newDiv);                            //Add the newly created divs with class and id each to the existing parent rows to make each one unique
		}
	}
};









