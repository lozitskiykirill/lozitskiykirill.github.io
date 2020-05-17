$(window).on('load', function() {
    var $preloader = $('#header-preloader'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    // $preloader.addClass("header-preloader-appear");
    $preloader.delay(1300).fadeOut('slow');
});


$(document).ready(function(){
  $('.new-dishes-slider').slick({
      arrows: true,
      infinite: false
  });
    $(".slick-prev").hide();
    $('.new-dishes-slider').on('afterChange', function(event, slick, currentSlide){
        if (currentSlide === $('.single-item').length-1) {
            $(".slick-next").hide();
        } else if (currentSlide === 0) {
            $(".slick-prev").hide();
        } else {
            $(".slick-next").show();
            $(".slick-prev").show();
        }
    });
    $('.range-tab-item').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="range-slick-prev"></div>',
        nextArrow: '<div class="range-slick-next"></div>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('#expand-button').click( function (e) {
        e.preventDefault();
        $("#expand-menu").toggleClass("menu-expand");
        $("#expand-button").toggleClass("button-open-close");
        $(".fa-hamburger").toggleClass("fa-times");
        $('body').toggleClass("overflow-body");

    })

    $('.header-search').click( function (e) {
        e.preventDefault();
        $(".header-search-form").toggleClass("header-search-form-expand");
    })

    $('.header-bag').click( function (e) {
        e.preventDefault();
        $(".header-basket").toggleClass("header-basket-expand");
    });
});


header-search

