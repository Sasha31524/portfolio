$(function(){
    $('.toggles button').click(function (){
        var get_id = this.id,
            get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });
    $('#showall').click(function(){
        $('.post').show(500);
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:5,
        loop: true
    });
});

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});

if ($(window).width()<540){
    $(".owl-carousel").owlCarousel({
        items:3
    });
}