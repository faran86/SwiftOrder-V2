$(document).ready(function(){
	var dirVal = $('html').attr('dir');
	var dir = false;
	if(dirVal == "rtl"){
		dir = true;
	}

	$('.video-slider').slick({
		rtl: dir
	});

	$('.logo-slider').slick({
			slidesToShow: 8,
		slidesToScroll: 1,
		autoplay: true,
		rtl: dir,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 570,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 20,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	 });
});