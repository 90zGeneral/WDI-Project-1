var people = ['Adam', 'Andrew', 'Colleen', 'Connor', 'Cosmo', 'Dominique', 'Hwan', 'Jorge',
			  'Kenneth', 'Michael', 'Naina', 'Nishad', 'Owens', 'Rachelle', 'Rubina', 'Rupali', 
			  'Seinna', 'Sneha', 'Wong', 'Thom', 'Wil', 'Winnie', 'Zhen'];

people[Math.floor(Math.random() * people.length)];

var opponent = function () {
	console.log('checking for players');

	var firstPlayer = function() {
		var player1 = $('input');
		var enter = $('#submit');

		$(enter).on('click', function() {
			if(player1.val() === ' ') {
				operation.firstPlayerName = 'First Move';
			}
			else {
				operation.firstPlayerName = player1.val();
			}

			$(player1). hide();
			$(enter).hide();
		})
	}
}