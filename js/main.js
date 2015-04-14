$(document).ready(function() {
    var s = $(".navbar-brand");

    var sep = $(".seperator");
    var art = $("article");

    var pos_sep = sep.position();
    var pos_art = art.position();

    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 100) {
            s.addClass("moved");
        } else {
            s.removeClass("moved");
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