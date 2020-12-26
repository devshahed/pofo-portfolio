									/*---------*/
									/*Custom JS*/
									/*---------*/
								/*== owl slider ==*/
								
var sticky = document.getElementById("navbar");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
	sticky.classList.add("bg-transparent-dark");
  } else {
    document.getElementById("navbar").style.top = "-50px";
	sticky.classList.remove("bg-transparent-dark");
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
	$('.client-slider').owlCarousel({
		rewind: true,
		rewindSpeed : 1,
		mouseDrag : true,
		touchDrag : true,
		margin:70,
		nav:false,
		dots: false,
		autoplay: true,
		autoplayTimeout:2000,
		autoplayHoverPause:true, 
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
	$('.testimonials').owlCarousel({
		rewind: true,
		rewindSpeed : 1,
		mouseDrag : true,
		touchDrag : true,
		margin:30,
		nav:false,
		dots: true,
		autoplay: true,
		autoplayTimeout:2000,
		autoplayHoverPause:false, 
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			}
		}
	});
	$('.carousel').carousel({
	  interval: 3000
	});
	var $grid =$('.portfolio').isotope({
	  // options
	  itemSelector: '.portfolio-item',
	  layoutMode: 'fitRows'
	});
	// filter items on button click
	$('.portfolio-filter').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	//active class
	$('.nav-link').click(function(){
		$('.nav-link.active').removeClass('active');
		$(this).addClass('active');
	});
	new WOW().init();
	$('.counter').counterUp({
		delay:5,
		time: 1000,
	});
	//upper button scroll start
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		if(x > 1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
		if(x < 200){
			$('#navbar').removeClass('bg-transparent-dark');
		}
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop: 0},2000);
	});

});

	