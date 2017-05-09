//$(document).ready(function(){

var myCircle = Circles.create({
  id:                  'circles-1',
  radius:              30,
  value:               50,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#5A00FF', '#FF00FF'],
  duration:            200,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           false
});

// Counter Widget

$('.counter-widget').hide();

$('#chart-button').click(function(){
   $('.counter-widget').fadeIn(200);
});

var manCount = 0, 
    nonManCount = 0,
    score = 0;

$('.man .counter-button').click(function(){
    manCount += 1;
    if (manCount == 1) {
        $('.man-count').text(manCount + ' contribution')
        }
    else {
        $('.man-count').text(manCount + ' contributions');
    }
    score = nonManCount / (nonManCount + manCount) * 100;
    console.log(score);
    myCircle.update(score);
});

$('.not-man .counter-button').click(function(){
    nonManCount += 1;
    if (nonManCount == 1) {
        $('.non-man-count').text(nonManCount + ' contribution')
        }
    else {
        $('.non-man-count').text(nonManCount + ' contributions');
    }
    score = nonManCount / (nonManCount + manCount) * 100;
    console.log(score);
    myCircle.update(score);
});

$('.counter-reset').click(function(){
    nonManCount = 0; 
    manCount = 0;
    score = 50;
    $('.man-count').text('0 contributions');
    $('.non-man-count').text('0 contributions');
    myCircle.update(score);
});

$('.counter-close').click(function(){
   $('.counter-widget').fadeOut(200);
});
   

// Fade Up on Scroll
 $(window).scroll( function(){      
    $('.fadeInBlock').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
        bottom_of_window = bottom_of_window + 100;  

        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},600);
        }
    }); 
});


// Config Lunar to Select SVG Classes
var svg = document.querySelector('#circle');

// Waypoints Implementation for Credits

$('#intro').waypoint(function(direction) {
//	$('.credit').removeClass('hidden');
	if (direction == 'down') {
			$('#intro-credit').removeClass('hidden');
            lunar.addClass(svg, 'circle_animation');
//            $('#circle-bg').addClass('circle_animation-bg');
	} else {
			$('#intro-credit').addClass('hidden');
	}
//	$('.slowshow').fadeIn(1000);
}, {
    offset: '40%'
});

$('.examples').waypoint(function(direction) {
//	$('.credit').removeClass('hidden');
	if (direction == 'down') {
            $('.credit').addClass('hidden');
			$('#examples-credit').removeClass('hidden');
	} else {
            $('#intro-credit').removeClass('hidden');
			$('#examples-credit').addClass('hidden');
	}
//	$('.slowshow').fadeIn(1000);
}, {
    offset: '50%'
});

$('.why-intro').waypoint(function(direction) {
//	$('.credit').removeClass('hidden');
	if (direction == 'down') {
            $('.credit').addClass('hidden');
			$('#why-credit').removeClass('hidden');
	} else {
            $('#examples-credit').removeClass('hidden');
			$('#why-credit').addClass('hidden');
	}
//	$('.slowshow').fadeIn(1000);
}, {
    offset: '50%'
});

$('.why-outro').waypoint(function(direction) {
//	$('.credit').removeClass('hidden');
	if (direction == 'down') {
            $('.credit').addClass('hidden');
	} else {
            $('#why-credit').removeClass('hidden');
	}
//	$('.slowshow').fadeIn(1000);
}, {
    offset: '50%'
});

$('.good-time').waypoint(function(direction) {
//	$('.credit').removeClass('hidden');
	if (direction == 'down') {
            $('.credit').addClass('hidden');
			$('#good-time-credit').removeClass('hidden');
	} else {
			$('#good-time-credit').addClass('hidden');
	}
//	$('.slowshow').fadeIn(1000);
}, {
    offset: '50%'
});

$('.kind').waypoint(function(direction) {
//	$('.credit').removeClass('hidden');
	if (direction == 'down') {
            $('.credit').addClass('hidden');
	} else {
            $('#good-time-credit').removeClass('hidden');
	}
//	$('.slowshow').fadeIn(1000);
}, {
    offset: '50%'
});
    
//});