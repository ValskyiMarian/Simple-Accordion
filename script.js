$(document).ready(function () {
	$('.accordion__title').click(function (event) {
		if ($('.accordion').hasClass('one')) {
			$('.accordion__title').not($(this)).removeClass('active');
			$('.accordion__text').not($(this).next()).slideUp(400);
		}
		$(this).toggleClass('active').next().slideToggle(400);
	});
});