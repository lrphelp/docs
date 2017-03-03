
$(document).ready(function () {
	$('#toc').toc({ title: "Ga naar..." });
	// START offcanvas.js
	$('[data-toggle="offcanvas"]').click(function () {  
		$('.row-offcanvas').toggleClass('active')
	}); //END offcanvas.js
	
	// activate current navbar item
	var currentPage = window.location.href.split('/')[3];
	if(currentPage !== ""){
		$('#navbar .active').removeClass('active');
		$('#' + currentPage).addClass('active');
	};
});
