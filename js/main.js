$(document).ready(function () {

    $(window).scroll(function () {
        var nav = $("#main-nav");
        nav.toggleClass('navbar-blue', $(this).scrollTop() > nav.height());


    });

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
