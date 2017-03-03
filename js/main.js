
$(document).ready(function () {
	$('#toc').toc({ title: "Ga naar..." });
	// START offcanvas.js
	$('[data-toggle="offcanvas"]').click(function () {  
		$('.row-offcanvas').toggleClass('active')
	}); //END offcanvas.js
});
