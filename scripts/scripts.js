$(document).ready(function() {
	onClick();
});

function onClick () {
	$('#mobile-trigger').on('click', function(){
		$('#mobile-trigger').toggleClass('spin')
		$('#mobile').toggleClass('show');
	});
}
