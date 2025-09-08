/*=============================================
ANIMACIONES SCROLL HEADER
=============================================*/

// $(window).scroll(function(){

// 	var posY = window.pageYOffset;
	
// 	if(posY > 10){

// 		$("header").css({"background":"#043248", "transition":".3s all"})


// 	}else{

// 		$("header").css({"background":"rgba(0,0,0,.6)", "transition":".3s all"})

// 	}

// })
 

// var alturaBanner = $(".fade-slider").height();

// $(".bannerEstatico").css({"height":alturaBanner+"px"})
/*=============================================
MENÚ MÓVIL
=============================================*/

$(".logotipo .fa-bars").click(function(){

	$(".menuMovil").show("fast");

})

$(".menuMovil ul li .fa-times").click(function(){

	$(".menuMovil").hide("fast");

})

/*=============================================
BOTONES IDIOMAS
=============================================*/

$(".idiomaEn").click(function(){

	$(this).removeClass("bg-white")
	$(this).removeClass("text-dark")

	$(this).addClass("bg-info")
	$(this).addClass("text-white")

	$(".idiomaEs").removeClass("bg-info")
	$(".idiomaEs").removeClass("text-white")

	$(".idiomaEs").addClass("bg-white")
	$(".idiomaEs").addClass("text-dark")


})

$(".idiomaEs").click(function(){

	$(this).removeClass("bg-white")
	$(this).removeClass("text-dark")

	$(this).addClass("bg-info")
	$(this).addClass("text-white")

	$(".idiomaEn").removeClass("bg-info")
	$(".idiomaEn").removeClass("text-white")

	$(".idiomaEn").addClass("bg-white")
	$(".idiomaEn").addClass("text-dark")


})


/*=============================================
DESPLAZAMIENTO MENÚ
=============================================*/

if(window.matchMedia("(max-width:768px)").matches){

	$(".menuMovil ul li a").click(function(e){

		$(".menuMovil").slideToggle('fast');

		e.preventDefault();

		var vinculo = $(this).attr("href");

		$("html, body").animate({

			scrollTop: $(vinculo).offset().top - 60

		}, 2000, "easeOutQuint")

	})


}else{

	$(".botonera ul li a").click(function(e){

		e.preventDefault();

		var vinculo = $(this).attr("href");

		$("html, body").animate({

			scrollTop: $(vinculo).offset().top - 60

		}, 2000, "easeOutQuint")

	})

}
/*=============================================
SCROLL UP
=============================================*/

$.scrollUp({
	scrollText:"",
	scrollSpeed: 2000,
	easingType: "easeOutQuint"
})
/*=============================================
PRELOAD
=============================================*/

$("body").css({"overflow-y":"hidden"});

var cargarImg = $("img");
var cargarScript = $("script");
var cargarCSS = $("link");
var cargarVideos = $("video");
var cargarAudios = $("audio");
var totalObjetos = [];
var numItem = 0;
var valorPorcentaje = 0;
var incremento = 0;
var numCarga = 0;

totalObjetos.push(cargarImg, cargarScript, cargarCSS, cargarVideos, cargarAudios);

totalObjetos.forEach(funcionForEach);

function funcionForEach(item, index){
	
	for(var i = 0; i < item.length; i++){

		numItem++;

		valorPorcentaje = 100/numItem;

	}

	for(var i = 0; i < item.length; i++){

		preload(i, item);	
		
	}

}

function preload(i, item){

	setTimeout(function(){

		$(item[i]).ready(function(){

				numCarga++

				incremento = Math.floor(numCarga * valorPorcentaje);
				
				$("#porcentajeCarga").html(incremento+"%");

				$("#rellenoCarga").css({"width":incremento+"%"})

				if(incremento >= 100){

					$("#preload").delay(350).fadeOut("slow");
					$("body").delay(350).css({"overflow-y":"scroll"})
				}

			})

	},i*100)

}

/*=============================================
GRID GALERIA
=============================================*/

$(".grid figure, .gridFooter figure").mouseover(function(){

	$(this).css({"background-position":"right bottom"})

})

$(".grid figure, .gridFooter figure").mouseout(function(){

	$(this).css({"background-position":"left top"})

})

// $(".grid figure, .gridFooter figure").click(function(){

// 	var vinculo = $(this).attr("vinculo");

// 	window.location = vinculo;

// })

