
$(document).ready(function () {
	$('#toc').toc({ title: "Ga naar..." });
	// START offcanvas.js
	$('[data-toggle="offcanvas"]').click(function () {  
		$('.row-offcanvas').toggleClass('active')
	}); //END offcanvas.js
	
	// activate current navbar item
	var currentPage = window.location.href.split('/')[3];
	console.log("Current page is " + currentPage);
	if(currentPage !== ""){
		console.log("Current page is not empty");
		$('#navbar .active').removeClass('active');
		$('#' + currentPage).addClass('active');
	};
});
