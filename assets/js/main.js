(function () {
	$(window).load(function () {
	  if ($(".ad").first().height() < 10) {
		$(".ad").each(function () {
		  $(".modal-fader").show();
		  $(".modal-window").on("shown.bs.modal", function() {
			// Create an audio element
			var audio = new Audio('path/to/audio-file.mp3');
  
			// Play the audio
			audio.play();
		  }).show();
		});
	  }
	});
  })();  
  

// scroll body to top on click

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});

// play sound on click with slight delay

const audio = new Audio("https://files.catbox.moe/qqiej6.ogg");
const btn = document.getElementById("back-to-top");
btn.addEventListener("click", function () {
	setTimeout(function () {
		audio.play();
	}, 100);
});