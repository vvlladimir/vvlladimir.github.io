// JavaScript Document

// main navigation hover triangle

$(function() {
        
        var $el, leftPos;
    
        /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
        $(".mainNav ul").append("<li id='triangle'></li>");
        
         /* Cache it */
    var $triangle = $("#triangle");
    
    $triangle
        .css("right", $("li#liNav").width() / 2)
        .data("origLeft", $triangle.position().left)
        
    $("li#liNav").hover(function() {
        $el = $(this);
        leftPos = $el.position().left + ($el.width() / 2);
        
        $triangle.stop().animate({
            left: leftPos
        });
    }, function() {
        $triangle.stop().animate({
            left: $triangle.data("origLeft"),
        });    
    });
      
    /* Kick IE into gear */
    $("li#liNav").mouseenter();
    });



 
// Slider

	$(".flexslider").flexslider();    

