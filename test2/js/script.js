// JavaScript Document



// TO TOP BUTTON

$(document).ready(function()
{
 $('.to-top').click(function() {
 	$('html, body').animate({ scrollTop: 0 }, 'slow');
 	});
 });

// Search (slide to left on click)
// SEARCH 1024PX AND 768PX

$(document).ready(function()
{
 $('#s-button').click(function() {
   if($('.search-box').css("margin-left") == "127px")
   
   {
       $('.search-box').animate({"margin-left": '-=127px'});
	   $('.search-border').animate({"left": '-=155px'});
   
  }
   else
  {
       $('.search-box').animate({"margin-left": '+=127px'});
	   $('.search-border').animate({"left": '+=155px'});
  }
 });
 });
 
 // SEARCH 480PX

$(document).ready(function()
{
 $('#s-button-480').click(function() {
   if($('.search-480').css("margin-left") == "460px")
   {
       $('.search-480').animate({"margin-left": '-=460px'});
	   $('header').animate({"height": '+=44px'}, 200);   
  }
   else
  {
       $('.search-480').animate({"margin-left": '+=460px'}, 225);
	   $('header').animate({"height": '-=44px'}, 900);
	
  }
 });
 });
 
  // SEARCH 320PX

$(document).ready(function()
{
 $('#s-button-320').click(function() {
   if($('.search-320').css("margin-left") == "310px")
   {
       $('.search-320').animate({"margin-left": '-=310px'});
	   $('header').animate({"height": '+=44px'}, 200);   
  }
   else
  {
       $('.search-320').animate({"margin-left": '+=310px'}, 225);
	   $('header').animate({"height": '-=44px'}, 900);
	
  }
 });
 });
 
 // EXPANDED MENU BUTTON 320PX first ver.

/*$(document).ready(function()
{
 $('#mob-menu').click(function() {
   if($('#site-nav').css("top") == "-94px")
   
   {
       $('#site-nav').animate({"top": '+=151px'});
	   $('header').animate({"height": '+=88px'}, 200);   
  }
   else
  {
      $('#site-nav').animate({"top": '-=151px'}, 225);
	   $('header').animate({"height": '-=88px'}, 900);

 }
 });
 });*/
 
 
 // EXPANDED MENU BUTTON 320PX second ver.

$(document).ready(function()
{
 $('#mob-menu').click(function() {
   if($('#site-nav').css("left") == "-368px")
   
   {
       $('#site-nav').animate({"left": '+=320px'});
	   $('header').animate({"height": '+=88px'}, 200);
	   $('header').animate({"background-image": 'none'});   
  }
   else
  {
      $('#site-nav').animate({"left": '-=320px'}, 225);
	   $('header').animate({"height": '-=88px'}, 900);

 }
 });
 });

// SLIDER FLEXSLIDER

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

