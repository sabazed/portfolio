$(document).ready(function () {
    
    const stickyOffset = $('.header').offset().top;
    const homeSec = $('#home'),
          aboutSec = $('#about'),
          expSec = $('#exp');
    const homeMid = homeSec.offset().top + homeSec.outerHeight() / 2;
    const aboutMid = aboutSec.offset().top + aboutSec.outerHeight() / 2;
    const expMid = expSec.offset().top + expSec.outerHeight() / 2;

    const links = [$('#home-link'), $('#about-link'), $('#exp-link'), $('#cont-link')];

    $(window).scroll(function(){
        const sticky = $('.header'),
              scroll = $(window).scrollTop();
        if (scroll >= stickyOffset) sticky.addClass('sticky');
        else sticky.removeClass('sticky');

        if (scroll >= expMid) {
            links[2].removeClass('active-link');
            links[3].addClass('active-link');
        }
        else if (scroll >= aboutMid) {
            links[1].removeClass('active-link');
            links[2].addClass('active-link');
            links[3].removeClass('active-link');
        }
        else if (scroll >= homeMid) {
            links[0].removeClass('active-link');
            links[1].addClass('active-link');
            links[2].removeClass('active-link');
        }
        else {
            links[0].addClass('active-link');
            links[1].removeClass('active-link');
        }
    });

    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        var request = {};
        let invalid = false;
        const form = $('#contact-form');
        $.each(form.serializeArray(), function (_, pair) {
            if (pair.value && pair.value.trim()) {
                request[pair.name] = pair.value;
            }
            else {
                invalid = true;
            }
        });
        if (invalid) return;
        $.ajax({
            type: "POST",
            url: "/contact",
            data: request
        });
        form.trigger("reset");
    });

});
