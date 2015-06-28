var operation = {                              //Create an object that holds keys and valued needed later
	firstPlayerName: '',                       //Set player names blank so the input values can be pushed into them
	secondPlayerName: '',
	rowsAmount: 6,                             //Determine the amount of rows on the table
 	colsAmount: 7,                             //Set amount of columns in each row
 	table: []                                  //Make table an empty array for rows and columns to be pushed into later
};

var circle = ['a1','a2','a3','a4','a5','a6','a7',
			  'a8','a9','a10','a11','a12','a13','a14',
			  'a15','a16','a17','a18','a19','a20','a21',
			  'a22','a23','a24','a25','a26','a27','a28',
			  'a29','a30','a31','a32','a33','a34','a35',
			  'a36','a37','a38','a39','a40','a41','a42'];


var board = function() {                                           //A function with 2 parameters that represents the amount of rows and columns
	for(var x = 0; x < operation.rowsAmount; x++) {               //This for loop is for creating the rows
		operation.table.push([]);                                //Push arrays into the table array to create a nested array with rows and columns 
		var createRow = $('<div>').addClass('row');                //Create a div element with a class and the loop with create the addition others 
		var table = $('.table');                                    //Grab the table element already existing in the html file
		table.append(createRow);                                       //Add each new div to the table element
		for(var z = 0; z < operation.colsAmount; z++) {                //Nest another for loop inside the previous one for the creating of the columns inside each row
			var row = ("row"+x);                                        //Create variable row to holds the position of each row each time it iterates through the loop and use that variable name as a parameter in the new Cell object being returned. 
			var col = ("col"+z);                                       //Samething here for columns
			operation.table[x].push(new Cell (row, col));                //Access the table key in the operation object and push the new Cell objects of each cell in that empty array
			var newDiv = $('<div>').addClass('cols')
			newDiv.addClass('row'+x+'col'+z);
			$('.row').eq(x).append(newDiv);                            //Add the newly created divs with 2 classes each to the existing parent rows to make each one unique
		}
	}
};









