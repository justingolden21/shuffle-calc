$(function() {
	$('#num-cards').change(function() {
		$('#num-shuffles').val(Math.ceil(1.5 * Math.log2(parseInt($(this).val() ) ) ) );
	});

	$('#shuffle-btn').click(function() {
		let arr = $('#shuffle-input').val().split(' ').join(',').split(',');
		arr = arr.filter(function (el) {
			return el != '';
		});
		$('#shuffle-output').val(shuffleArray(arr) );
	});

	$('#num-cards').val('52').change().select();
});

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(arr) {
	for(let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1) );
		let tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
	return arr;
}