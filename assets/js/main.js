$(".slider").slick({
    infinit: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
});


$(".nav-toggle").click(function(){
    $(".navbar").slideToggle();
});

$(".sub-menu-toggle").click(function(){
    $(".sub-menu").slideToggle();
});

$(window).scroll(function() {
    $('.services-item').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+800) {
            $(this).addClass("slideExpandUp");
        }
    });
});

