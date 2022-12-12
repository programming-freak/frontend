
// CSS-Klassen für Navi etc. wechseln mit 50px

document.addEventListener('scroll', function() {
    var nav = document.querySelector('nav.navbar');
    var bttb = document.querySelector('#backtotopbutton');

    if(window.scrollY > 950 && window.scrollY < 1800 || window.scrollY > 2800 && window.scrollY < 4400  || window.scrollY > 4900 && window.scrollY < 6200) {
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
        nav.classList.add('bg-white');
        bttb.classList.add('d-inline')
    }
    else {
        nav.classList.add('navbar-dark');
        nav.classList.remove('navbar-light');
        nav.classList.remove('bg-white');
        bttb.classList.remove('d-inline')
        nav.classList.add('bg-dark')
    }
});

/* Smooth scroll */
$(document).ready(function() {
    $('a.smooth').on('click',function(event) {
        /* ist im href-Attribut ein Hash vorhanden */
        if(this.hash != "") {
            /* Standard-Funktion des Links deaktivieren */
            event.preventDefault();
            /* Variable mit dem Inhalt des href-Attributes des angeklickten Links */
            var hashlink = this.hash;
            /* Animation hinzufügen */
            $("html, body").animate({
                scrollTop: $(hashlink).offset().top
            }, 800, function() {
                window.location.hash = hashlink;
            });
        }
    });
});

/* AOS */
AOS.init({
    offset: 300,
    duration: 800,
    disable: 'mobile',
    easing: 'ease-out'
});