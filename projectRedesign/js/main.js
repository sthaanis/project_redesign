$(window).scroll(function(){
	
	if($(window).scrollTop()>100) {
		$('.head-section').addClass('show');
	} else {
		$('.head-section').removeClass('show');
	};	
});