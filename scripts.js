$(function() {
	$('#num-cards').change(function() {
		$('#num-shuffles').val(Math.ceil(1.5 * Math.log2(parseInt($(this).val() ) ) ) );
	});
	$('#num-cards').val('52').change().select();
});