$(document).ready(function() {

	var screenWidth = $(document).width();
	var slideFull = screenWidth + 120;

	var audio1 = document.createElement('audio');
		audio1.setAttribute('src', 'sounds/open.mp3');

	var h = window.innerHeight - 175;

	var bgcolor = ["brown", "cadetblue", "darkolivegreen", "darkorange", "goldenrod", "yellowgreen", "tomato", "slategray", "palevioletred"];

	var bgimg = ["object-atari-200.png", "object-donutphone-200.png", "object-jfk-200.png", "object-juicysalif-200.png", "object-lettera-200.png", "object-pickle-200.png", "object-readymade-200.png", "object-sweetie-200.png", "object-teacup-200.png", "object-praxis-200.png"];

	function shuffle(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$("#go_top").click(function() {
		$("body").animate({scrollTop:0},900);
	});

	$('.circle').each(function(){
		$(this).click(function(){audio1.play();});
		$(this).css({'top' : shuffle(-100,h), 'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)]});
	});	

	$('.circlemobile').each(function(){
		$(this).css({'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)]});
	});	

// I tried randomizing the circle animation speed and delay through use of variables, and it worked, but I preferred the distribution of my "fake" randomization using defined values vs. the actual random results
// 	var slidespeed = shuffle(10000,25000);
// 	var slidedelay = shuffle(1000,15000);

// Previous method of animation, sending the circle back and forth:
	// slide_left02();
	// function slide_left02() {
	// 	$('#left02').delay(100).animate({ left: slideFull }, 23000, slide_left02_back);
	// }
	// function slide_left02_back() {
	// 	$('#left02').delay(100).animate({ left: "-120px" }, 14000, slide_left02);
	// }
	// $('#left02').hover(function() {
	// 	$('#left02').pause();
	// }, function() {
	// 	$('#left02').resume();
	// });


// Attempts at randomizing the #left01 circle: 

// First, I created a variable with an array of three options, to prevent duplicate images from appearing at the same time.
// 	var bgleft01 = ["object-donutphone-200.png", "object-teacup-200.png", "object-praxis-200.png"];

// First attempt: using the "Remove Class" function did not work to prevent the other two pop-ups from popping up.
		// if ($(this).css('background') == "url('../images/object-donutphone-350.jpg')") {
		// 	$(this).removeClass("object-teacup").removeClass("object-praxis");
		// } else if ($(this).css('background') == "url('../images/object-praxis-350.jpg')"){
		// 	$(this).removeClass("object-teacup").removeClass("object-donutphone");
		// } else if ($(this).css('background') == "url('../images/object-teacup-300.jpg')"){
		// 	$(this).removeClass("object-praxis").removeClass("object-donutphone");
		// };

// Second attempt: using the fadeToggle function also did not work to automatically close the two "wrong" popups. Hmm...
		// if ($(this).css('background') == "url('../images/object-donutphone-350.jpg')") {
		// 	$("#popup-praxis").fadeToggle(10);
		// 	$("#popup-teacup").fadeToggle(10);
		// } else if ($(this).css('background') == "url('../images/object-praxis-350.jpg')"){
		// 	$("#popup-donutphone").fadeToggle(10);
		// 	$("#popup-teacup").fadeToggle(10);
		// } else if ($(this).css('background') == "url('../images/object-teacup-300.jpg')"){
		// 	$("#popup-donutphone").fadeToggle(10);
		// 	$("#popup-praxis").fadeToggle(10);
		// };

// Third attempt: using hide function. Still no success.
		// if ($(".object-donutphone").css('background') == "url('../images/object-donutphone-350.jpg')") {
		// 	$("#popup-praxis").hide();
		// 	$("#popup-teacup").hide();
		// } else if ($(".object-donutphone").css('background') == "url('../images/object-praxis-350.jpg')"){
		// 	$("#popup-donutphone").hide();
		// 	$("#popup-teacup").hide();
		// } else if ($("object-donutphone").css('background') == "url('../images/object-teacup-300.jpg')"){
		// 	$("#popup-donutphone").hide();
		// 	$("#popup-praxis").hide();
		// };

	slide_left01();
	function slide_left01() {
		$('#left01').css({'left' : "-120px", 'top' : shuffle(-100,h), 'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)]}, slide_left01);
		$('#left01').delay(5000).animate({ left: slideFull }, 13000, slide_left01);
	}	
		$('#left01').hover(function() {
		$('#left01').pause();
	}, function() {
		$('#left01').resume();
	});


	slide_left02();
	function slide_left02() {
		$('#left02').css({'left' : "-120px", 'top' : shuffle(-100,h), 'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)]}, slide_left02);
		$('#left02').delay(2000).animate({ left: slideFull }, 23000, slide_left02);
	}
		$('#left02').hover(function() {
		$('#left02').pause();
	}, function() {
		$('#left02').resume();
	});


	slide_left03();
	function slide_left03() {
		$('#left03').css({'left' : "-120px", 'top' : shuffle(-100,h), 'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)]}, slide_left03);
		$('#left03').delay(11000).animate({ left: slideFull }, 22000, slide_left03);
	}
		$('#left03').hover(function() {
		$('#left03').pause();
	}, function() {
		$('#left03').resume();
	});


	slide_left04();
	function slide_left04() {
		$('#left04').css({'left' : "-120px", 'top' : shuffle(-100,h), 'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)]}, slide_left04);
		$('#left04').delay(7000).animate({ left: slideFull }, 19000, slide_left04);
	}	
		$('#left04').hover(function() {
		$('#left04').pause();
	}, function() {
		$('#left04').resume();
	});


	slide_right01();
	function slide_right01() {
		$('#right01').css({'left' : slideFull + 'px', 'top' : shuffle(-100,h), 'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)]}, slide_right01);
		$('#right01').delay(6000).animate({ left: "-120px" }, 26000, slide_right01);
	}	
		$('#right01').hover(function() {
		$('#right01').pause();
	}, function() {
		$('#right01').resume();
	});	


	slide_right02();
	function slide_right02() {
		$('#right02').css({'left' : slideFull + 'px', 'top' : shuffle(-100,h), 'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)]}, slide_right02);
		$('#right02').delay(4000).animate({ left: "-120px" }, 20000, slide_right02);
	}	
		$('#right02').hover(function() {
		$('#right02').pause();
	}, function() {
		$('#right02').resume();
	});	


	slide_right03();
	function slide_right03() {
		$('#right03').css({'left' : slideFull + 'px', 'top' : shuffle(-100,h), 'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)]}, slide_right03);
		$('#right03').delay(12000).animate({ left: "-120px" }, 24000, slide_right03);
	}	
		$('#right03').hover(function() {
		$('#right03').pause();
	}, function() {
		$('#right03').resume();
	});	


	slide_right04();
	function slide_right04() {
		$('#right04').css({'left' : slideFull + 'px', 'top' : shuffle(-100,h), 'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)]}, slide_right04);
		$('#right04').delay(9000).animate({ left: "-120px" }, 15000, slide_right04);
	}	
		$('#right04').hover(function() {
		$('#right04').pause();
	}, function() {
		$('#right04').resume();
	});	


	slidemobile();
	function slidemobile() {
		$('.circlemobile').css({'left' : '-150px', 'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)], 'background-image' : 'url(images/' + bgimg[Math.floor(Math.random() * bgimg.length)] + ')'}, slidemobile);
		$('.circlemobile').animate({left:"600px"},3000, "easeInCirc", slidemobile);
	}
		$('#right04').hover(function() {
		$('#right04').pause();
	}, function() {
		$('#right04').resume();
	});	

	slidemobile2();
	function slidemobile2() {
		$('.circlemobile2').css({'left' : '-150px', 'background-color' : bgcolor[Math.floor(Math.random() * bgcolor.length)], 'background-image' : 'url(images/' + bgimg[Math.floor(Math.random() * bgimg.length)] + ')'}, slidemobile2);
		$('.circlemobile2').animate({left:"600px"},3000, "easeInCirc", slidemobile2);
	}


	$('.popup').each(function(){
		$(this).click(function(){
			$(this).fadeToggle(500);
		});
	});	


	$(".object-lettera").click(function() {
		$("#popup-lettera").fadeToggle(500);
	});

	$(".object-atari").click(function() {
		$("#popup-atari").fadeToggle(500);
	});

	$(".object-readymade").click(function() {
		$("#popup-readymade").fadeToggle(500);
	});

	$(".object-sweetie").click(function() {
		$("#popup-sweetie").fadeToggle(500);
	});

	$(".object-donutphone").click(function() {
		$("#popup-donutphone").fadeToggle(500);
	});

	$(".object-juicysalif").click(function() {
		$("#popup-juicysalif").fadeToggle(500);
	});

	$(".object-pickle").click(function() {
		$("#popup-pickle").fadeToggle(500);
	});

	$(".object-jfk").click(function() {
		$("#popup-jfk").fadeToggle(500);
	});

	$(".object-teacup").click(function() {
		$("#popup-teacup").fadeToggle(500);
	});

	$(".object-praxis").click(function() {
		$("#popup-praxis").fadeToggle(500);
	});

	$(".object-kodak").click(function() {
		$("#popup-kodak").fadeToggle(500);
	});

	$(".object-ericofon").click(function() {
		$("#popup-ericofon").fadeToggle(500);
	});



});