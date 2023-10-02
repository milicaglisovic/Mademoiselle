

$(document).ready(function () {

    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();

    if ($('.profesional-member-slider').length > 0) {
        $(".profesional-member-slider").owlCarousel({

            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,

            dotsEach: 2,
            responsive: {
                0: {

                    items: 1,
                    margin: 0
                },
                992: {

                    items: 1,
                    margin: 30
                }
            }
        });
    }

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false
    });

    // Postavljanje početnog broja stranice
    var currentPage = 1;

    // Klik na broj stranice
    $(".page-number").click(function () {
        // Uklonite aktivnu klasu sa trenutne stranice
        $(".page-number.active").removeClass("active");
        // Dodajte aktivnu klasu na kliknutu stranicu
        $(this).addClass("active");
        // Podesite trenutnu stranicu na kliknutu vrednost
        currentPage = parseInt($(this).text());
        // Pomerite owl-carousel na odgovarajući element
        $(".owl-carousel").trigger("to.owl.carousel", [currentPage - 1, 300]);
    });

    // Klik na dugme "Sledeći"
    $(".next").click(function () {
        // Povećajte trenutnu stranicu za 1
        currentPage++;
        // Ažurirajte aktivnu stranicu
        updateActivePage();
        // Pomerite owl-carousel na sledeći element
        $(".owl-carousel").trigger("next.owl.carousel");
    });

    // Klik na dugme "Prethodni"
    $(".prev").click(function () {
        // Smanjite trenutnu stranicu za 1
        currentPage--;
        // Ažurirajte aktivnu stranicu
        updateActivePage();
        // Pomerite owl-carousel na prethodni element
        $(".owl-carousel").trigger("prev.owl.carousel");
    });

    // Funkcija za ažuriranje aktivne stranice
    function updateActivePage() {
        // Uklonite aktivnu klasu sa trenutne stranice
        $(".page-number.active").removeClass("active");
        // Dodajte aktivnu klasu na odgovarajuću stranicu
        $(".page-number:nth-child(" + currentPage + ")").addClass("active");
    }
});

