;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Burger Menu
	var burgerMenu = function() {
		$('body').on('click', '.js-bear-nav-toggle', function(event){
			if ( $('#bear-navbar').is(':visible') ) {
				$(this).removeClass('active');	
			} else {
				$(this).addClass('active');	
			}
			event.preventDefault();
		});
	};

	// Page Nav
	var clickMenu = function() {
		var topVal = getTopVal($(window).width());
		$(window).resize(function(){
			topVal = getTopVal($(window).width());
		});
		if ( $(this).attr('href') !== "#") {
			$('#bear-navbar a:not([class="external"])').click(function(event){
				var section = $(this).data('nav-section');
				if ( $('div[data-section="' + section + '"]').length ) {
					$('html, body').animate({
			        	scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal}, 500);
			   }
			});
		} else {
			event.preventDefault();
		}
	};

	var getTopVal = function(width) {
		var val = 0;
		if (width <= 855) {
			val = 65;
		} else if (width <= 600) {
			val = 60;
		} else if (width <= 392) {
			val = 70;
		}
		return val;
	}

	// Section navigation
	var sectionNav = function() {
		var $section = $('div[data-section]');
		$section.waypoint(function(direction) {
		  	
		}, {
	  		offset: '150px'
		});
		$section.waypoint(function(direction) {
	  	
		}, {
		 	offset: function() { return -$(this.element).height() + 155; }
		});
	};

	// Menu Scroll Effect
	var menuTransform = function() {
		var header = $('#bear-header');
		var navbar = $('#bear-header > .navbar li a');

		//var titleLong = $('#bear-header .navbar-header #bear-brand-long-text');

		$(window).resize(function(){
			var width = $(window).width();
			if ( width <= 855) {
				header.css({
					"background" : "#fff"
				});
				navbar.css({
					"color" : "#1A3199"
				});
	
			} else {
				header.css({
					"background" : "transparent"
				});
				navbar.css({
					"color" : "#000"
				});
			}
		})

		$(window).scroll(function(){
			var scrlTop = $(this).scrollTop();
			if ( scrlTop > 300 || $(window).width() <= 855) {
				header.css({
					"background" : "#fff"
				}).addClass('rdt-shadow');
				navbar.css({
					"color" : "#1A3199"
				});
				
			} else {
				header.css({
					"background" : "transparent"
				}).removeClass('rdt-shadow');
				navbar.css({
					"color" : "#FFF5EE"
				});
			}
		})
	};


	var owlCrouselFeatureSlide = function() {
		
		var owl = $('.owl-carousel');

		owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
			var current = elem.item.index;
			$(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
		});
		owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
			window.setTimeout(function(){
				var current = elem.item.index;
				$(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
			}, 400);
     	});

		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    smartSpeed: 500,
		    autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
		    navText: [	
		      "<i class='icon-arrow-left2 owl-direction'></i>",
		      "<i class='icon-arrow-right2 owl-direction'></i>"
	     	],

		});
		
	};


	// Magnific Popup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};

	// General Animator
	var animateBox = function() {
		if ( $('.animate-box').length > 0 ) {
			$('.animate-box').waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					$(this.element).addClass('fadeIn animated');
				}
			} , { offset: '80%' } );
		}
	};

	// Animate Feature
	var animateFeatureIcons = function() {
		if ( $('#bear-features').length > 0 ) {	
			$('#bear-features .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	// Animate Products
	var animateProducts = function() {
		if ( $('#bear-products').length > 0 ) {	
			$('#bear-products .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	// Animate Clients Logo
	var animateClientLogo = function() {
		if ( $('#bear-clients').length > 0 ) {	
			$('#bear-clients .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};


	// Waypoints 
	var featureIconsWayPoint = function() {
		if ( $('#bear-features').length > 0 ) {
			$('#bear-features').waypoint( function( direction ) {
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(animateFeatureIcons, 200);
					$(this).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};
	var productsWayPoint = function() {
		if ( $('#bear-products').length > 0 ) {
			$('#bear-products').waypoint( function( direction ) {
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(animateProducts, 200);
					$(this).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

	var clientsWayPoint = function() {
		if ( $('#bear-products').length > 0 ) {
			$('#bear-products').waypoint( function( direction ) {
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(animateClientLogo, 200);
					$(this).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};
	
	$(function(){	
		burgerMenu();
		clickMenu();
		sectionNav();
		menuTransform();
		owlCrouselFeatureSlide();
		magnifPopup();
		animateBox();
		featureIconsWayPoint();
		productsWayPoint();
		clientsWayPoint();
	});
}());