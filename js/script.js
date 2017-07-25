(function ($) {

  "use strict";

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($('.preloader').length) {
      $('.preloader').delay(200).fadeOut(500);
    }
  }

  //Update Scroll to Top
  function headerStyle() {
    "use strict";
    if ($('.main-header').length) {
      var windowpos = $(window).scrollTop();
      if (windowpos >= 200) {
        $('.main-header').addClass('fixed-header') &&
          $('.main-header.header-style-two,.main-header.header-style-three').addClass('sticky-header');
        $('.scroll-to-top').fadeIn(300);
      }
      else {
        $('.main-header').removeClass('fixed-header') &&
          $('.main-header.header-style-two,.main-header.header-style-three').removeClass('sticky-header');
        $('.scroll-to-top').fadeOut(300);
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($('.main-header li.dropdown ul').length) {
    $('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');

    //Dropdown Button
    $('.main-header li.dropdown .dropdown-btn').on('click', function () {
      $(this).prev('ul').slideToggle(500);
    });

    //Disable dropdown parent link
    $('.navigation li.dropdown > a').on('click', function (e) {
      e.preventDefault();
    });
  }

  //Search Box Toggle
  if ($('.main-header .seach-toggle').length) {
    //Dropdown Button
    $('.main-header .seach-toggle').on('click', function () {
      $(this).next('.search-box').toggleClass('now-visible');
    });
  }

  //Revolution Slider Style One
  if ($('.main-slider.default-style .tp-banner').length) {

    jQuery('.main-slider.default-style .tp-banner').show().revolution({
      delay: 10000,
      startwidth: 1200,
      startheight: 600,
      hideThumbs: 600,

      thumbWidth: 80,
      thumbHeight: 50,
      thumbAmount: 5,

      navigationType: "bullet",
      navigationArrows: "0",
      navigationStyle: "preview3",

      touchenabled: "on",
      onHoverStop: "off",

      swipe_velocity: 0.7,
      swipe_min_touches: 1,
      swipe_max_touches: 1,
      drag_block_vertical: false,

      parallax: "mouse",
      parallaxBgFreeze: "on",
      parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

      keyboardNavigation: "off",

      navigationHAlign: "center",
      navigationVAlign: "bottom",
      navigationHOffset: 0,
      navigationVOffset: 40,

      soloArrowLeftHalign: "left",
      soloArrowLeftValign: "center",
      soloArrowLeftHOffset: 20,
      soloArrowLeftVOffset: 0,

      soloArrowRightHalign: "right",
      soloArrowRightValign: "center",
      soloArrowRightHOffset: 20,
      soloArrowRightVOffset: 0,

      shadow: 0,
      fullWidth: "on",
      fullScreen: "off",

      spinner: "spinner4",

      stopLoop: "on",
      stopAfterLoops: -1,
      stopAtSlide: -1,

      shuffle: "off",

      autoHeight: "off",
      forceFullWidth: "on",

      hideThumbsOnMobile: "on",
      hideNavDelayOnMobile: 1500,
      hideBulletsOnMobile: "on",
      hideArrowsOnMobile: "on",
      hideThumbsUnderResolution: 0,

      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      startWithSlide: 0,
      videoJsPath: "",
      fullScreenOffsetContainer: ""
    });

  }


  //Revolution Slider Fullscreen
  if ($('.main-slider.fullscreen .tp-banner').length) {

    jQuery('.main-slider.fullscreen .tp-banner').show().revolution({
      delay: 10000,
      startwidth: 1200,
      startheight: 900,
      hideThumbs: 600,

      thumbWidth: 80,
      thumbHeight: 50,
      thumbAmount: 5,

      navigationType: "bullet",
      navigationArrows: "0",
      navigationStyle: "preview3",

      touchenabled: "on",
      onHoverStop: "off",

      swipe_velocity: 0.7,
      swipe_min_touches: 1,
      swipe_max_touches: 1,
      drag_block_vertical: false,

      parallax: "mouse",
      parallaxBgFreeze: "on",
      parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

      keyboardNavigation: "off",

      navigationHAlign: "center",
      navigationVAlign: "bottom",
      navigationHOffset: 0,
      navigationVOffset: 20,

      soloArrowLeftHalign: "left",
      soloArrowLeftValign: "center",
      soloArrowLeftHOffset: 20,
      soloArrowLeftVOffset: 0,

      soloArrowRightHalign: "right",
      soloArrowRightValign: "center",
      soloArrowRightHOffset: 20,
      soloArrowRightVOffset: 0,

      shadow: 0,
      fullWidth: "on",
      fullScreen: "off",

      spinner: "spinner4",

      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,

      shuffle: "off",

      autoHeight: "off",
      forceFullWidth: "on",

      hideThumbsOnMobile: "on",
      hideNavDelayOnMobile: 1500,
      hideBulletsOnMobile: "on",
      hideArrowsOnMobile: "on",
      hideThumbsUnderResolution: 0,

      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      startWithSlide: 0,
      videoJsPath: "",
      fullScreenOffsetContainer: ""
    });

  }

  //Clients SliderThree Column
  if ($('.clients-slider').length) {
    $('.clients-slider').owlCarousel({
      loop: true,
      margin: 50,
      nav: false,
      afterAction: function (el) {

        //remove class active
        this.$owlItems.removeClass('first')
        this.$owlItems.removeClass('last')

        //add class first and last
        this.$owlItems.eq(this.currentItem).addClass('first');
        this.$owlItems.eq(this.currentItem + (this.owl.visibleItems.length - 1)).addClass('last');
      },
      dots: false,
      smartSpeed: 500,
      autoplay: 5000,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 2
        },
        1024: {
          items: 4
        },
        1200: {
          items: 4
        }
      }

    });
  }

  //Testimonials Carousel Two
  if ($('.testimonial-carousel-two').length) {
    $('.testimonial-carousel-two').each(function () {
      var data_dots = ($(this).data("dots") === undefined) ? false : $(this).data("dots");
      var data_nav = ($(this).data("nav") === undefined) ? false : $(this).data("nav");
      var data_duration = ($(this).data("duration") === undefined) ? 4000 : $(this).data("duration");
      $(this).owlCarousel({
        autoplay: true,
        autoplayTimeout: data_duration,
        loop: true,
        items: 2,
        margin: 15,
        dots: data_dots,
        nav: data_nav,
        navText: [
          '<i class="fa fa-long-arrow-left"></i>',
          '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: false
          },
          480: {
            items: 1,
            center: false
          },
          600: {
            items: 1,
            center: false
          },
          750: {
            items: 2,
            center: false
          },
          960: {
            items: 2
          },
          1170: {
            items: 2
          },
          1300: {
            items: 2
          }
        }
      });
    });
  }
  // Carousel Col 3
  if ($('.carousel-col-3').length) {
    $('.carousel-col-3').each(function () {
      var data_dots = ($(this).data("dots") === undefined) ? false : $(this).data("dots");
      var data_nav = ($(this).data("nav") === undefined) ? false : $(this).data("nav");
      var data_duration = ($(this).data("duration") === undefined) ? 4000 : $(this).data("duration");
      $(this).owlCarousel({
        autoplay: true,
        autoplayTimeout: data_duration,
        loop: true,
        items: 2,
        margin: 15,
        dots: data_dots,
        nav: data_nav,
        navText: [
          '<i class="fa fa-long-arrow-left"></i>',
          '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: false
          },
          480: {
            items: 1,
            center: false
          },
          600: {
            items: 1,
            center: false
          },
          750: {
            items: 2,
            center: false
          },
          960: {
            items: 3
          },
          1170: {
            items: 3
          },
          1300: {
            items: 3
          }
        }
      });
    });

  }


  // Carousel Col 4
  if ($('.carousel-col-4').length) {
    $('.carousel-col-4').each(function () {
      var data_dots = ($(this).data("dots") === undefined) ? false : $(this).data("dots");
      var data_nav = ($(this).data("nav") === undefined) ? false : $(this).data("nav");
      var data_duration = ($(this).data("duration") === undefined) ? 4000 : $(this).data("duration");
      $(this).owlCarousel({
        autoplay: true,
        autoplayTimeout: data_duration,
        loop: true,
        items: 2,
        margin: 15,
        dots: data_dots,
        nav: data_nav,
        navText: [
          '<i class="fa fa-long-arrow-left"></i>',
          '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: false
          },
          480: {
            items: 1,
            center: false
          },
          600: {
            items: 1,
            center: false
          },
          750: {
            items: 2,
            center: false
          },
          960: {
            items: 3
          },
          1170: {
            items: 4
          },
          1300: {
            items: 4
          }
        }
      });
    });

  }


  // Carousel Col 3
  if ($('.carousel-col-5').length) {
    $('.carousel-col-5').each(function () {
      var data_dots = ($(this).data("dots") === undefined) ? false : $(this).data("dots");
      var data_nav = ($(this).data("nav") === undefined) ? false : $(this).data("nav");
      var data_duration = ($(this).data("duration") === undefined) ? 4000 : $(this).data("duration");
      $(this).owlCarousel({
        autoplay: true,
        autoplayTimeout: data_duration,
        loop: true,
        items: 2,
        margin: 0,
        dots: data_dots,
        nav: data_nav,
        navText: [
          '<i class="fa fa-long-arrow-left"></i>',
          '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: false
          },
          480: {
            items: 1,
            center: false
          },
          600: {
            items: 1,
            center: false
          },
          750: {
            items: 2,
            center: false
          },
          960: {
            items: 3
          },
          1170: {
            items: 5
          },
          1300: {
            items: 5
          }
        }
      });
    });

  }

  // Fact Counter
  function factCounter() {
    "use strict";
    if ($('.fact-counter').length) {
      $('.fact-counter .counter-column.animated').each(function () {

        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate({
            countNum: n
          }, {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              }
            });
        }

      });
    }
  }

  //Progress Bar / Levels
  if ($('.progress-levels .progress-box .bar-fill').length) {
    $(".progress-box .bar-fill").each(function () {
      var progressWidth = $(this).attr('data-percent');
      $(this).css('width', progressWidth + '%');
      $(this).children('.percent').html(progressWidth + '%');
    });
  }

  //LightBox / Fancybox
  if ($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic',
      helpers: {
        media: {}
      }
    });
  }

  // Scroll to a Specific Div
  if ($('.scroll-to-target').length) {
    $(".scroll-to-target").on('click', function () {
      var target = $(this).attr('data-target');
      // animate
      $('html, body').animate({
        scrollTop: $(target).offset().top - 40
      }, 1000);

    });
  }


  // Elements Animation
  if ($('.wow').length) {
    var wow = new WOW(
      {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true       // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
  }


  /* ---------------------------------------------
       flex slider
       --------------------------------------------- */

  $(window).load(function () {
    $('.portfolio-slider').flexslider({
      animation: "slide",
      direction: "vertical",
      slideshowSpeed: 3000,
      start: function () {
        imagesLoaded($(".portfolio"), function () {
          setTimeout(function () {
            $('.portfolio-filter li:eq(0) a').trigger("click");
          }, 500);
        });
      }
    });
  });

  // $(window).load(function () {
  //     $('.portfolio-slider-alt').flexslider({
  //         animation: "slide",
  //         direction: "horizontal",
  //         slideshowSpeed: 4000,
  //         start:function(){
  //             imagesLoaded($(".portfolio"),function(){
  //                 setTimeout(function(){
  //                     $('.portfolio-filter li:eq(0) a').trigger("click");
  //                 },500);
  //             });
  //         }
  //     });
  // });

  // $(window).load(function () {
  //     $('.post-slider-thumb').flexslider({
  //         animation: "slide",
  //         controlNav: "thumbnails"
  //     });
  // });

  // $(window).load(function() {
  //     $('.post-slider').flexslider({
  //         animation: "slide"
  //     });
  // });

  // $(window).load(function() {
  //     $('.news-slider').flexslider({
  //         animation: "slide",
  //         slideshowSpeed: 3000
  //     });
  // });


  /* ---------------------------------------------
   portfolio filter set active class
   --------------------------------------------- */

  $('.portfolio-filter li').click(function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });


  /* ---------------------------------------------
   isotope | init Isotope
   --------------------------------------------- */

  var $container = $(".portfolio:not(.portfolio-masonry)");
  if ($.fn.imagesLoaded && $container.length > 0) {
    imagesLoaded($container, function () {
      setTimeout(function () {
        $container.isotope({
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows',
          filter: '*'
        });

        $(window).trigger("resize");
        // filter items on button click
      }, 500);

    });
  }

  /* ---------------------------------------------
   portfolio masonry
   --------------------------------------------- */

  $(window).load(function () {

    var $c = $('.portfolio-masonry');
    if (typeof imagesLoaded == 'function') {
      imagesLoaded($c, function () {

        setTimeout(function () {
          $c.isotope({
            itemSelector: '.portfolio-item',
            resizesContainer: false,
            layoutMode: 'masonry',
            filter: "*"
          });
        }, 500);

      });
    }

  });



  /* ---------------------------------------------
   portfolio gallery
   --------------------------------------------- */

  $('.portfolio-gallery').each(function () { // the containers for all your galleries
    $(this).find(".popup-gallery").magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
    $(this).find(".popup-gallery2").magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });


  /* ---------------------------------------------
   portfolio filtering
   --------------------------------------------- */

  $('.portfolio-filter').on('click', 'a', function () {
    $('#filters button').removeClass('current');
    $(this).addClass('current');
    var filterValue = $(this).attr('data-filter');
    $(this).parents(".portfolio-filter-item").next().isotope({ filter: filterValue });
  });

  /* ---------------------------------------------
  popup link
  --------------------------------------------- */


  $('.popup-link').magnificPopup({
    type: 'image'
    // other options
  });

  /* ---------------------------------------------
  carousel
  --------------------------------------------- */
  if ($.fn.owlCarousel) {



    $("#owl-slider").owlCarousel({
      autoPlay: 4000, //Set AutoPlay to 3 seconds
      items: 1,
      navigation: true,
      //pagination : false,
      navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });


    $("#img-carousel").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3]

    });

    $("#portfolio-carousel").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],
      navigation: true,
      pagination: false,
      navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });

    $("#portfolio-carousel-alt").owlCarousel({
      autoPlay: false, //Set AutoPlay to 3 seconds
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],
      navigation: true,
      pagination: false,
      navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
  }

  $(".portfolio-with-title").addClass("portfolio");






	/* ---------------------------------------------------------------------------
	 * Paralex Backgrounds
	* --------------------------------------------------------------------------- */
  var ua = navigator.userAgent,
    isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
  if (!isMobileWebkit && jQuery(window).width() >= 768) {
    $.stellar({
      horizontalScrolling: false,
      responsive: true
    });
  }

	/* ---------------------------------------------------------------------------
		* Paralex Backgrounds
	* --------------------------------------------------------------------------- */
  if (typeof stellar !== 'undefined' && $.isFunction(stellar)) {
    var ua = navigator.userAgent,
      isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

    if (!isMobileWebkit && jQuery(window).width() >= 768) {

      if (window.wpt_parallax == 'stellar') {

        // Stellar
        jQuery.stellar({
          horizontalScrolling: false,
          responsive: true
        });

      } else {

        // Enllax
        jQuery(window).enllax();

      }

    } else {

      jQuery('.section[data-enllax-ratio], .section[data-stellar-ratio]').css('background-attachment', 'scroll');

    }
  }


  /* ==========================================================================
     When document is Scrollig, do
     ========================================================================== */

  $(window).on('scroll', function () {
    headerStyle();
    factCounter();
  });

  /* ==========================================================================
     When document is loading, do
     ========================================================================== */

  $(window).on('load', function () {
    handlePreloader();
  });







})(window.jQuery);



