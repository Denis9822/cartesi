AOS.init();

$(document).on("scroll", window, function() {
    if ($(window).scrollTop() > 10) {

        $(".header").addClass('style_header');
    } else {
        $(".header").removeClass('style_header');
    }
});

$('button.gap-4').click(function() {
    $(this).siblings('.overflow-hidden').toggleClass('clickList');
    $(this).children().children('svg').children().eq(1).toggleClass('svgActive');
})