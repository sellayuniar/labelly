$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 3,
    nav: true,
    loop: true,
    lazyLoad: true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive: {
        0 : {
            items: 1,
            dots: false,
            autoWidth: true,
            autoHeight: true
        },
        485 : {
            items: 2,
            dots: false,
            autoWidth: true,
            autoHeight: true
        },
        728 : {
            items: 2,
            dots: false,
            autoWidth: true,
            autoHeight: true
        },
        960 : {
            items: 3,
            dots: false
        },
        1200 : {
            items: 3,
            dots: true
        }

    }
})

$('#my-video').mouseover(function(){
    $(this).get(0).play();
}).mouseout(function(){
    $(this).get(0).pause();
})