/********************************

# Theme Functionality

# Add jQuery usability to created SCSS
# components

*******************************/

/***************
#
# Tapbox (_tapbox.scss)
#
****************/

$(document).ready(function(){
	$(".tapbox").click(function(){
		$(this).find(".tap-slide_1").fadeToggle();
	});
});