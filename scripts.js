let removeCopiedText = 0;

$(function() {
	$('#num-cards').change(function() {
		$('#num-shuffles').prop('disabled', false);
		$('#num-shuffles').val(Math.ceil(1.5 * Math.log2(parseInt($(this).val() ) ) ) );
		$('#num-shuffles').prop('disabled', true);
	});

	$('#shuffle-btn').click(function() {
		let arr = $('#shuffle-input').val().split(' ').join(',').split(',');
		arr = arr.filter(function (el) {
			return el != '';
		});
		$('#shuffle-output').val(shuffleArray(arr) );

		// set url params
		history.replaceState({}, '', '?q=' + arr);

	});

	$('#copy-url-btn').click( ()=> {
		let tmp = $('<input type="text">').appendTo(document.body);
		tmp.val(window.location.href);
		tmp.select();
		document.execCommand('copy');
		tmp.remove();

		$('#copied-url').css('display', 'inline');
		removeCopiedText++;
		setTimeout( ()=> {
			removeCopiedText--;
			if(removeCopiedText==0)
				$('#copied-url').css('display', '');
		}, 3000);
	});

	//get url params
	let url = new URL(window.location.href);
	let q = url.searchParams.get('q');
	$('#shuffle-input').val(q || '');
	$('#shuffle-btn').click();

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