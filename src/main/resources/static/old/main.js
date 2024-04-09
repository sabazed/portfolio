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

        // var request = {};
        // let invalid = false;
        const form = $('#contact-form');
        // $.each(form.serializeArray(), function (_, pair) {
        //     if (pair.value && pair.value.trim()) {
        //         request[pair.name] = pair.value;
        //     }
        //     else {
        //         invalid = true;
        //     }
        // });
        // if (invalid) return;
        // $.ajax({
        //     type: "POST",
        //     url: "/contact",
        //     data: request
        // });

        // Had to do this without Spring Boot, so I have to expose everything here instead of fetching them from env variables
        const template = "\n---\nThis is an automated email submitted to saba.2003.sz@gmail.com.\nIf you are seeing this it means that your email address has been set as a sender's email address at saba.portfolio.com";
        const host = "smtp.gmail.com";
        const user = "portfolio.sabazed@gmail.com";
        const pswd = "barzhfzianxfxplp";
        const to = "saba.2003.sz@gmail.com";
        const from = $('#contact-form-name').val();
        const subject = $('#contact-form-email').val();
        const body = $('#contact-form-body').val();
        if (from && from.trim().length > 0 && subject && subject.trim().length > 0 && body && body.trim().length > 0) {
            Email.send({
                Host: host,
                Username : user,
                Password : pswd,
                To : to,
                From : from.trim(),
                Subject : subject.trim() + " - Portfolio Automated Email",
                Body : body.trim() + template,
            }).then(
                message => alert("mail sent successfully")
            );
        }

        form.trigger("reset");
    });

});
