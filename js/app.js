'use strict';

AOS.init();

$( document ).ready(function() {

	//Remove jumbotron animation delay for mobile
	if ($(window).width() < 768) {
		$('.jumbotron-blurb').attr('data-aos-delay', '0');
	}

	//Isotope filtering
	var $classes = $('.classes-section');
	var $gallery = $('.img-gallery');
	var $ttable = $('.ttable-section');

	$classes.isotope({ itemSelector: ".classes-item" });
	$gallery.isotope({ itemSelector: ".thumbnail" });
	$ttable.isotope({ itemSelector: ".ttable-item" });

	//Set initial filter values
	$classes.isotope({ filter: '.iso-ballet' });
	$ttable.isotope({ filter: '.iso-htl' });

	$("#classes-buttons").on("click", "button", function() {
		var filterValue = $(this).attr('data-filter');
  	$classes.isotope({ filter: filterValue });
	});
	$("#gallery-buttons").on("click", "button", function() {
		var filterValue = $(this).attr('data-filter');
  	$gallery.isotope({ filter: filterValue });
	});
	$("#ttable-buttons").on("click", "button", function() {
		var filterValue = $(this).attr('data-filter');
		$ttable.isotope({ filter: filterValue });
	});


	//Add overlay when gallery img is clicked
	var $overlay = $('<div id="gallery-overlay"></div>');
	var $image = $("<img>");
	var $closeBtn = $('.close-gallery-overlay');

	//Add Image to overlay
	$overlay.append($closeBtn);
	$overlay.append($image);
	$("body").append($overlay);

	//Capture the click event on a link to an image
	$(".thumbnail a").click(function(event) {

		var position = $(document).scrollTop();
		$('#gallery-overlay').css( "top", position );

		event.preventDefault();
		var imageLocation = $(this).attr("href");

		//Update overlay with the image linked
		$image.attr("src", imageLocation)

		$overlay.css({
			'display': 'flex',
			'margin': 'auto',
			'justify-content': 'center'
		});

		$('body').css('overflow', 'hidden');

		$image.fadeIn("slow");
	});

	$closeBtn.click(function() {
	    $overlay.hide();
			$('body').css('overflow', 'auto');
	});

	//Date object for copyright
	var dateObj = new Date();
	var year = dateObj.getFullYear();
	$('#year').text(year);

}); // End document.ready
