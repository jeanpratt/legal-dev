/********************************

# Theme Functionality

# Add jQuery usability to created SCSS
# components

*******************************/

$(document).ready(function(){

/***************
#
# Tapbox (_tapbox.scss)
#
****************/

	$(".tapbox").click(function(){
		$(this).find(".tap-slide_1").fadeToggle();
	});

/***************
#
# Tooltips and Popovers
#
****************/

	$('[data-toggle="popover"]').popover({ html: true });
	$('[data-toggle="tooltip"]').tooltip();

});