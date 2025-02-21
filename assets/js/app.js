$('.hotNewsSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    speed: 2000,
});
$('.mainBottomSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    speed: 2000,
    responsive: [
        {
            breakpoint: 1001,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});