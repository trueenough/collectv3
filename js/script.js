$(document).ready(function() {

	var screenWidth = $(document).width();
	var slideFull = screenWidth + 120;

	slideleft1 ();
	function slideleft1() {
		$("#left01").delay(5000).animate({left:slideFull},13523);
		$("#left01").delay(2000).animate({left:"-120px"},20523,slideleft1);
	}

	slideleft2 ();
	function slideleft2() {
		$("#left02").animate({left:slideFull},23823);
		$("#left02").animate({left:"-120px"},14823,slideleft2);
	}

	slideleft3 ();
	function slideleft3() {
		$("#left03").delay(11000).animate({left:slideFull},22623);
		$("#left03").delay(5000).animate({left:"-120px"},18623,slideleft3);
	}

	slideleft4 ();
	function slideleft4() {
		$("#left04").delay(7000).animate({left:slideFull},19200);
		$("#left04").delay(9000).animate({left:"-120px"},18200,slideleft4);
	}

	slideright ();
	function slideright() {
		$("#right01").delay(4000).animate({left:"-120px"},26423);
		$("#right01").delay(2000).animate({left:slideFull},16423,slideright);
	}

	slideright2 ();
	function slideright2() {
		$("#right02").animate({left:"-120px"},20323);
		$("#right02").delay(2500).animate({left:slideFull},20323,slideright2);
	}

	slideright3 ();
	function slideright3() {
		$("#right03").delay(9500).animate({left:"-120px"},24223);
		$("#right03").delay(3500).animate({left:slideFull},14223,slideright3);
	}

	slideright4 ();
	function slideright4() {
		$("#right04").delay(6500).animate({left:"-120px"},15123);
		$("#right04").animate({left:slideFull},17123,slideright4);
	}

	// slidemobile01 ();
	// function slidemobile01() {
	// 	$("#circlemobile01").delay(500).animate({left:slideFull},10000);
	// 	$("#circlemobile01").hide("slow", slidemobile01);
	// 	slidemobile01();
	// }

	$(function () {
    function slidemobile01() {
        $('#circlemobile01').delay(500).animate({left:slideFull},10000);
    	}
    	slidemobile01();
	});

	slidemobile02 ();
	function slidemobile02() {
		$("#circlemobile02").delay(2500).animate({left:slideFull},10000,slidemobile02);
	}




	$("#go_top").click(function() {
		$("body").animate({scrollTop:0},900);
	});




});