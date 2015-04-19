$(document).ready(function() {
    $s = $(".navbar-brand");
    $topNav = $('.top-nav');

    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 100) {
            $s.addClass("moved");
            $topNav.removeClass('atTop');
        } else {
            $s.removeClass("moved");
            if ( $topNav.hasClass('atTop') ){
                
            } else {
                $topNav.addClass('atTop');
            }
        }
    });
});


$(document).ready(function(){
    $('.pieces').bxSlider({
        mode: 'fade',
        speed: 300,
        controls: false,
        pagerCustom: '.pieces-list'
    });

    // Initialize LocalScroll
    $('.top-nav').localScroll({
        duration:500,
        hash:true,
    });
});