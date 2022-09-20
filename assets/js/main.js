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