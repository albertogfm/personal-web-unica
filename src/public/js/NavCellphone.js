$(document).ready(NavCellphone);
 
var contador = 1;
 
function NavCellphone () {
	console.log("ready");
	console.log($('.menu_bar'));
	document.querySelector('.menu_bar').click(function(){
		console.log("entra")
		if (contador == 1) {
			$('nav').animate({
				right: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				right: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}
