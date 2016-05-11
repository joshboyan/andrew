$(document).ready(function() {
	onClick();
});

function onClick () {
	$('#mobile-trigger').on('click', function(){
		$('#mobile-trigger').toggleClass('spin')
		$('#mobile').toggleClass('show');
	});
}
$('a').hover(
	function(){ $(this).addClass('hover') },
	function(){ $(this).removeClass('hover') }
)
$('.nav-item').hover(
	function(){ $(this).addClass('hover-gradient') },
	function(){ $(this).removeClass('hover-gradient') }
)