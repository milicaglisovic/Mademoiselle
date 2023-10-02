

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

    function updateActivePage() {
      
        $(".page-number.active").removeClass("active");
        
        $(".page-number:nth-child(" + currentPage + ")").addClass("active");
    }
    //form validator
    $('.contact-form').validate({
        highlight: function (element) {
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function (element) {
            $(element).addClass('is-valid').removeClass('is-invalid'); // 
        },
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'The Name and Surname field is required.'
            },
            email: {
                required: 'The Email field is required.'
            },
            subject: {
                required: 'The Subject field is required.'
            },
            message: {
                required: 'The Message field is required'
            }
        },
        errorElement: 'p',
        errorPlacement: function (error, element) {
            error.appendTo(element.closest(".form-group").find(".error-msg"));
        }
    });
});

