$(document).ready(function() {
    $('.projectBoxTitle').click(function() {
        var thisParent = $(this).parent();

        thisParent.toggleClass('projectBoxActive');

        if (thisParent.attr('data-isshow') == 'true') {
            $(this).next().toggle();
            thisParent.attr('data-isshow', 'false');
        } else {
            thisParent.one('transitionend', (e) => { $(this).next().toggle(); });
            thisParent.attr('data-isshow', 'true');
        }
    });
    $(".listc").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
    $(".listp").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
    });
    $(".listco").click(function() {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });
    $(".lists").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});