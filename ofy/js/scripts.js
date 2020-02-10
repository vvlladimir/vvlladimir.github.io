// JavaScript Document

// slideri
$(document).ready(function () {
  $('.flexslider').flexslider({
    animation: "slide",
	animationSpeed: 1500,
	directionNav: false
  });
  
});
//akcija veliki slider
$(document).ready(function () {
  $('.akcia').flexslider({
    animation: "slide",
	animationSpeed: 1400,
    animationLoop: false,
	slideshow: false,
    itemWidth: 180,
    itemMargin: 0,
    minItems: 1,
    maxItems: 5,
	move: 1
  });

});
// padajuci menii


//login dropdown menu
$(document).ready(function () {
    $(".btnLogin").click(function () {
        //setTimeout(function(){
        $(".userLog").stop().fadeToggle(200);
        //},0);
    });

});

$(document).ready(function () {

  
    $(document).click(function () {

        $(".userLog").fadeOut(200);

        // ispitati da li se klik izvrsio na klasi koju ne zelimo da sakrijemo
        // ako je kliknuto van klase zatvara se DIV
        // ako je kliknuto unutar klase ne zatvara se div

    });
    
    $(".logIn,.slider-wrap").click(function (e) {
        e.stopPropagation();
    });
});


  var time;    // deklarise se timeout
  $(document).ready(function () {
      $(".logIn").mouseleave(function () {

          // dodeli se timeout parametru, da bi ga mogli kasnije otkazati/ponistiti
          if ($("#logEmail, #logPass").is(":focus")) {
              // ne radi nista
          } else {
              // zatvori DIV posle 3 sec
              time = setTimeout(function () {
                  $(".userLog").stop().fadeOut(200);
              }, 3000);
          }

      });
  });


  $(document).ready(function () {
      $(".logIn").mouseenter(function () {
          // ponistava se timeout (sprecava se zatvaranje DIV-a)
          clearTimeout(time);
      });
  });


 //korpa dropdown menu
  $(document).ready(function () {
      $(".btnKorpa").click(function () {
          $(".korpaDropdown").stop().fadeToggle(200);
      });

    
      $(document).click(function () {
          $(".korpaDropdown").stop().fadeOut(200);
      });
     
      $(".korpa").click(function (e) {
          e.stopPropagation();
      });

      $(".logIn").click(function () {
          $(".korpaDropdown").stop().fadeOut(200);
          $(".bigBoxKat").stop().hide();
      });

      // kada sklonimo kursor sa diva
      var time;
      $(".korpa").mouseleave(function () {

          time = setTimeout(function () {
              $(".korpaDropdown").stop().fadeOut(200);
          }, 3000);


      });
      $(".korpa").mouseenter(function () {
          clearTimeout(time);
      });
  });


// PADAJUCI MENU KATEGORIJE
$(document).ready(function () {
$("#kategorije").click(function(){
		$(".bigBoxKat, .borderBtm").stop().show();
	});
	// dodavanje naziva na sve stranice
$(".borderBtm").text("Kategorije");
$(".borderBtmUzr").text("po Uzrastu");
$(".borderBtmDec").text("za Dečake");
$(".borderBtmDev").text("za Devojčice");
$(".borderBtmLikTeme").text("Likovi i teme");
$(".borderBtmBrend").text("Brendovi");
	
	
$(document).click(function () {
    $(".bigBoxKat, .borderBtm").stop().hide();
});


	$("#kategorije").click(function (e) {
	    e.stopPropagation();
	});
	
		
	$(".logIn").click(function(){
		$(".bigBoxDev, .borderBtmDev").stop().hide();
		$(".bigBoxDec, .borderBtmDec").stop().hide();
		$(".bigBoxKat, .borderBtm").stop().hide();
		$(".bigBoxUzr, .borderBtmUzr").stop().hide();
		$(".bigBoxLikTeme, .borderBtmLikTeme").stop().hide();
		$(".bigBoxBrend, .borderBtmBrend").stop().hide();
		});
	$(".korpa").click(function(){
		$(".bigBoxDev, .borderBtmDev").stop().hide();
		$(".bigBoxDec, .borderBtmDec").stop().hide();
		$(".bigBoxKat, .borderBtm").stop().hide();
		$(".bigBoxUzr, .borderBtmUzr").stop().hide();
		$(".bigBoxLikTeme, .borderBtmLikTeme").stop().hide();
		$(".bigBoxBrend, .borderBtmBrend").stop().hide();
		});	
	$("#kategorije").click(function(){
		$(".userLog").stop().fadeOut(200);
		$(".korpaDropdown").stop().fadeOut(200);
		$(".bigBoxUzr, .borderBtmUzr").stop().hide();
		$(".bigBoxDec, .borderBtmDec").stop().hide();
		$(".bigBoxDev, .borderBtmDev").stop().hide();
		$(".bigBoxLikTeme, .borderBtmLikTeme").stop().hide();
		$(".bigBoxBrend, .borderBtmBrend").stop().hide();
		});
});
var time;
$(document).ready(function () {
    $("#kategorije").mouseleave(function () {

        time = setTimeout(function () {
            $(".bigBoxKat, .borderBtm").stop().hide();
        }, 3000);
    });
    $("#kategorije").mouseenter(function () {
        clearTimeout(time);
    });

});
	
// PADAJUCI MENI PO UZRASTU
$(document).ready(function () {
    $("#uzrast").click(function () {
        $(".bigBoxUzr, .borderBtmUzr").stop().show();
    });

    $(document).click(function () {
        $(".bigBoxUzr, .borderBtmUzr").stop().hide();
    });
    $("#uzrast").click(function (e) {
        e.stopPropagation();
    });

    $("#uzrast").click(function () {
        $(".userLog").stop().fadeOut(200);
        $(".korpaDropdown").stop().fadeOut(200);
        $(".bigBoxKat, .borderBtm").stop().hide();
        $(".bigBoxDec, .borderBtmDec").stop().hide();
		$(".bigBoxDev, .borderBtmDev").stop().hide();
		$(".bigBoxLikTeme, .borderBtmLikTeme").stop().hide();
		$(".bigBoxBrend, .borderBtmBrend").stop().hide();
    });
});


$(document).ready(function () {
    var time;
    $("#uzrast").mouseleave(function () {
        time = setTimeout(function () {
            $(".bigBoxUzr, .borderBtmUzr").stop().hide();
        }, 3000);
    });
    $("#uzrast").mouseenter(function () {
        clearTimeout(time);
    });

});

 
 // PADAJUCI MENU za DECAKE
$(document).ready(function () {
    $("#zaDecake").click(function () {
        $(".bigBoxDec, .borderBtmDec").stop().show();
    });

    $(document).click(function () {
        $(".bigBoxDec, .borderBtmDec").stop().hide();
    });
    $("#zaDecake").click(function (e) {
        e.stopPropagation();
    });

    $("#zaDecake").click(function () {
        $(".userLog").stop().fadeOut(200);
        $(".korpaDropdown").stop().fadeOut(200);
        $(".bigBoxKat, .borderBtm").stop().hide();
        $(".bigBoxUzr, .borderBtmUzr").stop().hide();
        $(".bigBoxDev, .borderBtmDev").stop().hide();
		$(".bigBoxLikTeme, .borderBtmLikTeme").stop().hide();
		$(".bigBoxBrend, .borderBtmBrend").stop().hide();
    });
});

	var time;
	$(document).ready(function () {
	    $("#zaDecake").mouseleave(function () {
	        time = setTimeout(function () {
	            $(".bigBoxDec, .borderBtmDec").stop().hide();
	        }, 3000);
	    });
	    $("#zaDecake").mouseenter(function () {
	        clearTimeout(time);
	    });
	});

// PADAJUCI MENU za DEVOJCICE
	$(document).ready(function () {
	    $("#zaDevojcice").click(function () {
	        $(".bigBoxDev, .borderBtmDev").stop().show();
	    });

	    $(document).click(function () {
	        $(".bigBoxDev, .borderBtmDev").stop().hide();
	    });
	    $("#zaDevojcice").click(function (e) {
	        e.stopPropagation();
	    });

	    $("#zaDevojcice").click(function () {
	        $(".userLog").stop().fadeOut(200);
	        $(".korpaDropdown").stop().fadeOut(200);
	        $(".bigBoxKat, .borderBtm").stop().hide();
	        $(".bigBoxUzr, .borderBtmUzr").stop().hide();
	        $(".bigBoxDec, .borderBtmDec").stop().hide();
	        $(".bigBoxLikTeme, .borderBtmLikTeme").stop().hide();
	        $(".bigBoxBrend, .borderBtmBrend").stop().hide();
	    });
	});

	var time;
	$(document).ready(function () {
	    $("#zaDevojcice").mouseleave(function () {
	        time = setTimeout(function () {
	            $(".bigBoxDev, .borderBtmDev").stop().hide();
	        }, 3000);
	    });
	    $("#zaDevojcice").mouseenter(function () {
	        clearTimeout(time);
	    });
	});


// PADAJUCI MENU za Likovi i Teme
	$(document).ready(function () {
	    $("#likTeme").click(function () {
	        $(".bigBoxLikTeme, .borderBtmLikTeme").stop().show();
	    });

	    $(document).click(function () {
	        $(".bigBoxLikTeme, .borderBtmLikTeme").stop().hide();
	    });
	    $("#likTeme").click(function (e) {
	        e.stopPropagation();
	    });

	    $("#likTeme").click(function () {
	        $(".userLog").stop().fadeOut(200);
	        $(".korpaDropdown").stop().fadeOut(200);
	        $(".bigBoxKat, .borderBtm").stop().hide();
	        $(".bigBoxUzr, .borderBtmUzr").stop().hide();
	        $(".bigBoxDec, .borderBtmDec").stop().hide();
	        $(".bigBoxDev, .borderBtmDev").stop().hide();
	        $(".bigBoxBrend, .borderBtmBrend").stop().hide();
	    });
	});


	var time;
	$(document).ready(function () {
	    $("#likTeme").mouseleave(function () {
	        time = setTimeout(function () {
	            $(".bigBoxLikTeme, .borderBtmLikTeme").stop().hide();
	        }, 3000);
	    });
	    $("#likTeme").mouseenter(function () {
	        clearTimeout(time);
	    });
	});


// PADAJUCI MENU BRENDOVI
	$(document).ready(function () {
	    $("#brendovi").click(function () {
	        $(".bigBoxBrend, .borderBtmBrend").stop().show();
	    });

	    $(document).click(function () {
	        $(".bigBoxBrend, .borderBtmBrend").stop().hide();
	    });
	    $("#brendovi").click(function (e) {
	        e.stopPropagation();
	    });

	    $("#brendovi").click(function () {
	        $(".userLog").stop().fadeOut(200);
	        $(".korpaDropdown").stop().fadeOut(200);
	        $(".bigBoxKat, .borderBtm").stop().hide();
	        $(".bigBoxUzr, .borderBtmUzr").stop().hide();
	        $(".bigBoxDec, .borderBtmDec").stop().hide();
	        $(".bigBoxDev, .borderBtmDev").stop().hide();
	        $(".bigBoxLikTeme, .borderBtmLikTeme").stop().hide()
	    });
	});


	var time;
	$(document).ready(function () {
	    $("#brendovi").mouseleave(function () {
	        time = setTimeout(function () {
	            $(".bigBoxBrend, .borderBtmBrend").stop().hide();
	        }, 3000);
	    });
	    $("#brendovi").mouseenter(function () {
	        clearTimeout(time);
	    });
	});
	
	

// CSS DODAVANJA 
	$(document).ready(function () {
	    $(".listaKat a").css("border", "none");
	    $(".igrackezaNajmladje a").css("border", "none");
	    $(".listaUzrast li a").css("border", "none");
	});

	




// aside menu
	$(document).ready(function () {
	    $("#automobili").click(function () {
	        $(".automobili").fadeToggle("fast");
	    });

	    $(".automobili a").css("background-color", "#FFFFFF").css("color", "#404040");

	    $(".automobili").mouseleave(function () {
	        $(this).fadeToggle("fast");
	    });
	});


//bigBox
// igracke za najmladje
	$(document).ready(function () {
	    $("#igrackezaNajmladje").click(function () {
	        $(".igrackezaNajmladje").fadeToggle("fast");
	    });

	    $(".igrackezaNajmladje").mouseenter(function () {
	        $("#igrackezaNajmladje").css("font-weight", "700");
	    });
	    $(".igrackezaNajmladje").mouseleave(function () {
	        $("#igrackezaNajmladje").css("font-weight", "400");
	    });
	});


// po Uzrastu 
// 0-12 meseci
	$(document).ready(function () {
	    $("#meseci12").click(function () {
	        $(".uzr12meseci").fadeToggle("fast");
	    });
	});

// igracke za najmladje
	$(document).ready(function () {
	    $("#igrackezaSportPlazu").click(function () {
	        $(".igrackezaSportPlazu").fadeToggle("fast");
	    });

	    $(".igrackezaSportPlazu").mouseenter(function () {
	        $("#igrackezaSportPlazu").css("font-weight", "700");
	    });
	    $(".igrackezaSportPlazu").mouseleave(function () {
	        $("#igrackezaSportPlazu").css("font-weight", "400");
	    });
	});

// Edukativne igracke
	$(document).ready(function () {
	    $("#edukativneIgracke").click(function () {
	        $(".edukativneIgracke").fadeToggle("fast");
	    });


	    $(".edukativneIgracke").mouseenter(function () {
	        $("#edukativneIgracke").css("font-weight", "700");
	    });
	    $(".edukativneIgracke").mouseleave(function () {
	        $("#edukativneIgracke").css("font-weight", "400");
	    });
	});


// brendovi logo , Angry Birds,
	$(document).ready(function () {
	    $("#angryBirds").click(function () {
	        $(".angryBirds").fadeToggle("fast");
	    });
	    $("#disney").click(function () {
	        $(".disney").fadeToggle("fast");
	    });
	});


// TOYLAND NALOG KREIRANJE NOVI KORISNIK
	$(document).ready(function () {
	    $(".formaOpen").stop().click(function () {
	        $(".popuni_formu").slideDown(1000);
	        $(".formaOpen").css("display", "none");
	        $('.dugmeKreiraj').css("display", "block");
	        $(".kreiraj_nalog p").css("display", "none");
	    });
	});

// kada chekira Želim da budu dostavljeni na adresu otvora se forma za popunjavanje
$(document).ready(function(e) {
    $("#radio2").click(function(){
		$("#dostava").show("slow");
		});
	$("#radio1").click(function(){
		$("#dostava").hide("slow");
		});	
		
});


// Select simulacija

$(document).ready(function() {
    $(".simulation").click(function(){
		$(".selectBox").fadeToggle(100);
		});
});



