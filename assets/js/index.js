// Course Slider

$('.bottom-course-slider .owl-carousel').owlCarousel({
    loop:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})


// Hero Banner Slider

$('.hero-banner .owl-carousel').owlCarousel({
    loop:true,
    dots: true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})