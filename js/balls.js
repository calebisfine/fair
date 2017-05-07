const numBalls = 150;

$(document).ready(function(){
var ballColor = Please.make_scheme(
{
	h: 230,
	s: 1,
	v: .8
},
{
	scheme_type: 'analogous',
	format: 'hex',
  colors_returned: 10
});

// // Wiggle Definition

 function wiggle(selector){
   $(selector).each(function() {
     // wiggleProp(this, 'scale', 0.93, 1);
     // wiggleProp(this, 'rotation', -5, 5);
     wiggleProp(this, 'x', -20, 20);
     wiggleProp(this, 'y', -20, 20);
   })
 }

 function wiggleProp(element, prop, min, max) {
   var duration = Math.random() * (.6 - .3) + .3;
  
   var tweenProps = {
     ease: Power1.easeInOut,
     onComplete: wiggleProp,
     onCompleteParams: [element, prop, min, max]
   };
   tweenProps[prop] = Math.random() * (max - min) + min;

   TweenMax.to(element, duration, tweenProps);
 }

// Copy

function copy(element, quantity) {
		if (typeof(element) === "string") {
			element = document.querySelector(element);
		}
		var parent = element.parentNode,
				type = element.nodeName,
				a = [],
				child;
		while (--quantity > -1) {
			child = document.createElement(type);
			parent.insertBefore(child, element);
			a.push(child);
			child.outerHTML = element.outerHTML;
		}
		return a;
}

copy(".ball", numBalls);

  
  $('.ball').each(function(){
      var posx = Math.random() * 100;
      var posy = Math.random() * 95;
      var randColor = Math.floor(Math.random() * 10);
    console.log(randColor);
      $(this).css({ 
        'position':'absolute',
        'left': posx + '%',
        'top': posy + '%',
        'background-color': ballColor[randColor]
    });   
  }); 

 wiggle('.ball');

//    var mouse = {'x': 0, 'y': 0};
//
//    homex = 0;
//    homey = 0;
//	  forcex = 0;
//	  forcey = 0;
//    magnet = 5000;
//
//    
//    $(document).bind('mousemove', function(e) {
//        mouse = {'x': e.pageX, 'y': e.pageY};
//    });
//    
//
//$('.ball').each(function(index, el){
//$(el).data( "homex", parseInt($(el).position().left));
//$(el).data( "homey", parseInt($(el).position().top));
//});
//
//$('.ball').css('position','absolute');
//    setInterval(function () {
//        $('.ball').each(function(index, el){
//            el = $(el);
//            position = el.position();
//            x0 = el.offset().left;
//            y0 = el.offset().top;
//            x1 = mouse.x;
//            y1 = mouse.y;
//            distancex = x1-x0;
//            distancey = y1-y0;
//
//            distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
//            
////            /*
////            magnet = 2600 - distance*20;
////            if(distance>130) {
////               magnet=0; 
////            }
////            */
//            
//            powerx = x0 - (distancex / distance) * magnet / distance;
//            powery = y0 - (distancey / distance) * magnet / distance;
//            
//            forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
//            forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;
//                        
//
//            el.css('left', powerx + forcex);
//            el.css('top',  powery + forcey - 2275);
//            // el.text(parseInt( distance));
//        });
//    }, 15);
    
});