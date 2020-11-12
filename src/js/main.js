$(document).ready(function () {
	
	//Hero slider
	
	$('.hero-section').slick({
		dots: true,
		customPaging: function (slider, i) {
			var thumb = $(slider.$slides[i]).data('thumb');
			return '<button class="custom-slick-dots"></button>';
		},
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
	
	// Reviews slider
	
	function reviews() {
		if ($(window).width() > 990) {
			$('.reviews-section__slider').filter('.slick-initialized').slick('unslick');
		} else {
			$('.reviews-section__slider').not('.slick-initialized').slick({
				dots: true,
				customPaging: function (slider, i) {
					var thumb = $(slider.$slides[i]).data('thumb');
					return '<button class="custom-slick-dots"></button>';
				},
				arrows: false,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				variableWidth: true,
				adaptiveHeight: false
			});
		}
	}
	
	reviews();
	
	$(window).resize(function () {
		reviews();
		mobileMenu();
	});
	
	// Mobile menu
	
	$('.header__burger-wrapper').click(function () {
		$('.header__burger').toggleClass('burger--open');
		$('.header__mobile-menu').slideToggle();
		$('body').toggleClass('body--lock');
	});
	
	function mobileMenu() {
		if ($(window).width() > 750) {
			$('.header__burger').removeClass('burger--open');
			$('.header__mobile-menu').hide();
			$('body').removeClass('body--lock');
			$('.header__user-drop').hide();
		}
	}
	
	mobileMenu();
	
	$('.user--drop').click(function () {
		$('.header__user-drop').slideToggle();
	});
	
	// Search
	
	function search() {
		$('.search--icon').click(function () {
			$('.search-form').slideToggle();
			$(this).toggleClass('search--active');
		});
	}
	
	search();
	
	$('.search--close').click(function () {
		$('.search-form').slideToggle();
		$('.search--icon').removeClass('search--active');
	});
	
	// Sticky Navigation
	
	$('.navigation-bar__item').click(function () {
		var $thisSpot = $(this).attr('data-anchor');
		
		anchorTo($thisSpot);
	});
	
	$(window).scroll(function () {
		updateCurrentPosition();
	});
	
	function anchorTo(here) {
		var $page = $('html, body');
		var $scrollSpeed = 500;
		
		$page.animate({
					scrollTop: $('#' + here).offset().top
				},
				$scrollSpeed
		);
	}
	
	function updateCurrentPosition() {
		$('.navigation-bar__item').removeClass('active');
		
		if ($(this).scrollTop() >= $('#first-section').offset().top) {
			$('*[data-anchor="first-section"]').addClass('active');
			$('*[data-anchor="second-section"]').removeClass('active');
			$('*[data-anchor="third-section"]').removeClass('active');
			$('*[data-anchor="fourth-section"]').removeClass('active');
			$('*[data-anchor="fifth-section"]').removeClass('active');
			$('*[data-anchor="sixth-section"]').removeClass('active');
			$('*[data-anchor="seventh-section"]').removeClass('active');
		}
		
		if ($(this).scrollTop() >= $('#second-section').offset().top) {
			$('*[data-anchor="second-section"]').addClass('active');
			$('*[data-anchor="first-section"]').removeClass('active');
			$('*[data-anchor="third-section"]').removeClass('active');
			$('*[data-anchor="fourth-section"]').removeClass('active');
			$('*[data-anchor="fifth-section"]').removeClass('active');
			$('*[data-anchor="sixth-section"]').removeClass('active');
			$('*[data-anchor="seventh-section"]').removeClass('active');
		}
		
		if ($(this).scrollTop() >= $('#third-section').offset().top) {
			$('*[data-anchor="third-section"]').addClass('active');
			$('*[data-anchor="first-section"]').removeClass('active');
			$('*[data-anchor="second-section"]').removeClass('active');
			$('*[data-anchor="fourth-section"]').removeClass('active');
			$('*[data-anchor="fifth-section"]').removeClass('active');
			$('*[data-anchor="sixth-section"]').removeClass('active');
			$('*[data-anchor="seventh-section"]').removeClass('active');
		}
		
		if ($(this).scrollTop() >= $('#fourth-section').offset().top) {
			$('*[data-anchor="fourth-section"]').addClass('active');
			$('*[data-anchor="first-section"]').removeClass('active');
			$('*[data-anchor="second-section"]').removeClass('active');
			$('*[data-anchor="third-section"]').removeClass('active');
			$('*[data-anchor="fifth-section"]').removeClass('active');
			$('*[data-anchor="sixth-section"]').removeClass('active');
			$('*[data-anchor="seventh-section"]').removeClass('active');
		}
		
		if ($(this).scrollTop() >= $('#fifth-section').offset().top) {
			$('*[data-anchor="fifth-section"]').addClass('active');
			$('*[data-anchor="first-section"]').removeClass('active');
			$('*[data-anchor="second-section"]').removeClass('active');
			$('*[data-anchor="third-section"]').removeClass('active');
			$('*[data-anchor="fourth-section"]').removeClass('active');
			$('*[data-anchor="sixth-section"]').removeClass('active');
			$('*[data-anchor="seventh-section"]').removeClass('active');
		}
		
		if ($(this).scrollTop() >= $('#sixth-section').offset().top) {
			$('*[data-anchor="sixth-section"]').addClass('active');
			$('*[data-anchor="first-section"]').removeClass('active');
			$('*[data-anchor="second-section"]').removeClass('active');
			$('*[data-anchor="third-section"]').removeClass('active');
			$('*[data-anchor="fourth-section"]').removeClass('active');
			$('*[data-anchor="fifth-section"]').removeClass('active');
			$('*[data-anchor="seventh-section"]').removeClass('active');
		}
		
		if (jQuery(window).scrollTop() + jQuery(window).height() >= jQuery(document).height()) {
			$('*[data-anchor="seventh-section"]').addClass('active');
			$('*[data-anchor="first-section"]').removeClass('active');
			$('*[data-anchor="second-section"]').removeClass('active');
			$('*[data-anchor="third-section"]').removeClass('active');
			$('*[data-anchor="fourth-section"]').removeClass('active');
			$('*[data-anchor="fifth-section"]').removeClass('active');
			$('*[data-anchor="sixth-section"]').removeClass('active');
		}
	}
	
	// Smoth Scroll To Anchor
	
	$('a[href^="#"]').click(function () {
		if (document.getElementById($(this).attr('href').substr(1)) != null) {
			$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
		}
		return false;
	});
});