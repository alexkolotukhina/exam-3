//=require jquery.min.js

// to inlude plugins add "=" sign below
//=require bootstrap.min.js
//=require parallax.min.js
//=require slick.min.js 
//=require isotope.pkgd.min.js


;(function($){

	

	$(document).ready(function(){
		$('.services-nav__link').on('click', function(evt) {
			evt.preventDefault();

			$('.services-nav__link').removeClass('services-active');
			$(this).addClass('services-active');

			$('.services-main').hide();
			$( $(this).attr('href') ).show();
		});
		var $galleryphoto = $('.gallery-photo').isotope({
			itemSelector: '.gallery-photo__item',
			percentPositon: true,
			masonry: {
				columnWidth: '.gallery-photo-sizer'
			}
		});

		$('.gallery-nav').on('click', 'a', function(evt) {
			evt.preventDefault();

			var filterValue = $(this).data('filter');
			$galleryphoto.isotope({filter: filterValue });

			$(".gallery-nav__link").removeClass('gallery-active');
			$(this).addClass('gallery-active');
		})
		$('.carousel').carousel();

		$('.services-products').parallax({imageSrc: '../img/bg-services.jpg'});
		$('.clients').parallax({imageSrc: '../img/bg-clients.jpg'});
	});

	$(window).on('load', function(){

  		
	});

})(jQuery);