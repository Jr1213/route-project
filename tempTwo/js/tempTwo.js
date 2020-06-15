$(document).ready(function () {
    $('.slider .slick').slick({
        autoplay: true,
        arrows: true,
        dots: true,
        fade: true
    })
    $('.phones .slick').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })

    $('.tablate  .slick').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
    $('.laptop  .slick').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
});