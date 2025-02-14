// ============================= //
// SEÇÃO - ÚLTIMAS EDIÇÕES //
// ============================= //
jQuery(document).ready(function($) {
    $('.feedback-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 7000,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        navText: [
            '<i class="fa fa-long-arrow-left"></i>',
            '<i class="fa fa-long-arrow-right"></i>'
        ],
        responsive: {
            767: {
                nav: true,
                dots: false
            }
        }
    });
});
