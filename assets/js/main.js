(function () {
	$(window).load(function () {
		if ($(".ad").first().height() < 10) {
			$(".ad").each(function () {
				$(".modal-fader").show();
				$(".modal-window").show();
			});
		}
	});
})();

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});