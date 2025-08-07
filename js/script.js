/*=============================================
ANIMACIONES SCROLL HEADER
=============================================*/

$(window).scroll(function(){

	var posY = window.pageYOffset;
	
	if(posY > 10){

		$("header").css({"background":"#043248", "transition":".3s all"})


	}else{

		$("header").css({"background":"rgba(0,0,0,.1)", "transition":".3s all"})

	}

})
/*=============================================
MENÚ MÓVIL
=============================================*/

$(".logotipo .fa-bars").click(function(){

	$(".menuMovil").show("fast");

})

$(".menuMovil ul li .fa-times").click(function(){

	$(".menuMovil").hide("fast");

})