$(document).ready(function () {
    if (window.location.pathname.includes("#xp")
         || window.location.hash.includes("#xp")) return;

    const navbar = $('.navbar');
    const navbarOffset = navbar.offset().top;

    const intro = $('#intro');
    const about = $('#about');
    const expr = $('#expr');
    const introMid = intro.offset().top + intro.outerHeight() / 2;
    const aboutMid = about.offset().top + about.outerHeight() / 2;
    const exprMid = expr.offset().top + expr.outerHeight() / 2;

    const links = [$('#intro-link'), $('#about-link'), $('#expr-link'), $('#cont-link')];

    $(window).scroll(function(){
        const scroll = $(window).scrollTop();
        if (scroll >= navbarOffset) navbar.addClass('navbar-sticky');
        else navbar.removeClass('navbar-sticky');

        if (scroll >= exprMid) {
            links[2].removeClass('navbar-button-active');
            links[3].addClass('navbar-button-active');
        }
        else if (scroll >= aboutMid) {
            links[1].removeClass('navbar-button-active');
            links[2].addClass('navbar-button-active');
            links[3].removeClass('navbar-button-active');
        }
        else if (scroll >= introMid) {
            links[0].removeClass('navbar-button-active');
            links[1].addClass('navbar-button-active');
            links[2].removeClass('navbar-button-active');
        }
        else {
            links[0].addClass('navbar-button-active');
            links[1].removeClass('navbar-button-active');
        }
    });

});
