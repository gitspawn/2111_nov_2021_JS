const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,

    // responsive: {
    //     0: {
    //         items: 1,
    //         nav: true,
    //     },
    //     600: {
    //         items: 3,
    //         nav: true,
    //     },
    //     1000: {
    //         items: 5,
    //         nav: true,
    //         loop: true,
    //     },
    // },
};

$(document).ready(function () {
    $(".owl-carousel").owlCarousel(options);
});
