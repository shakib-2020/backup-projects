(function ($) {
  "use strict";

  // mean-menu
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
  });

  // sticky-header
  let wind = $(window);
  let sticky = $("#sticky-header");

  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 5) {
      sticky.removeClass("sticky-menu");
    } else {
      sticky.addClass("sticky-menu");
    }
  });

  // onepage nav
  $(".scroll").onePgaeNav({
    wrapper: "#onepage-nav",
    activeClass: "active",
  });

  // data-background
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  // fact counter up
  $(".counter").counterUp({
    delay: 5,
    time: 1000,
  });
  //  video pop up
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  // slick: testimonia slider
  $(".testimonial-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".test-img-active",
  });
  $(".test-img-active").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".testimonial-active",
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    autoplay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // owl-carousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      767: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
})(jQuery);
