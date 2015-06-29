$(function() {

	console.log('loaded');
	$('#start').on('click', board);
	$('.row').on('click', '.cols', clicked);
	$('.row').on('click', whoWon);
});




