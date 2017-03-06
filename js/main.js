
$(document).ready(function () {
	// generate toc
	$('#toc').toc({ title: "Ga naar..." });
	
	// START offcanvas.js
	$('[data-toggle="offcanvas"]').click(function () {  
		$('.row-offcanvas').toggleClass('active')
	}); //END offcanvas.js
	
	// activate current navbar item
	var currentPage = window.location.href.split('/')[3]; // check where we are
	$('#navbar .active').removeClass('active');		// deactivate previously activated item
	if(currentPage !== ""){							// make sure were not at home
		$('#' + currentPage).addClass('active');	// activate currently activated item
	} else {
		$('#navHome').addClass('active');			// or activate Home
	};
});
