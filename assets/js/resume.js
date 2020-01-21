(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict


// Clone applications to get a second collection
var $data = $(".portfolio-area").clone();

//NOTE: Only filter on the main portfolio page, not on the subcategory pages
$('.portfolio-categ li').click(function (e) {
  $(".filter li").removeClass("active");
  // Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
  var filterClass = $(this).attr('class').split(' ').slice(-1)[0];

  if (filterClass == 'all') {
    var $filteredData = $data.find('.portfolio-item2');
  } else {
    var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
  }
  $(".portfolio-area").quicksand($filteredData, {
    duration: 600,
    adjustHeight: 'auto'
  }, function () {

    lightboxPhoto();
  });
  $(this).addClass("active");
  return false;
});

jQuery("a[rel^='prettyPhoto']").prettyPhoto({
  animationSpeed:'fast',
  slideshow:5000,
  theme:'light_rounded',
  show_title:false,
  overlay_gallery: false
});


