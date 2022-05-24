// // Accordion for section About //
// document.querySelectorAll('.about-open').forEach((item) =>
//     item.addEventListener('click', () => {
//         const parrent = item.parentNode;
//
//         if (parrent.classList.contains('about__content-active')) {
//             parrent.classList.remove('about__content-active');
//         } else {
//             document.querySelectorAll('.about__repute__block')
//                 .forEach((child) => child.classList.remove('about__content-active'));
//             parrent.classList.add('about__content-active');
//         }
//     })
// )
//
// // Accordion for section Services //
// document.querySelectorAll('.services__list-title').forEach((item) =>
//     item.addEventListener('click', () => {
//         const parrent = item.parentNode;
//
//         if (parrent.classList.contains('services__content-active')) {
//             parrent.classList.remove('services__content-active');
//         } else {
//             document.querySelectorAll('.services__list-open')
//                 .forEach((child) => child.classList.remove('services__content-active'));
//             parrent.classList.add('services__content-active');
//         }
//     })
// )
//
// // Accordion for section Services (Description) //
// document.querySelectorAll('.services__description-open').forEach((item) =>
//     item.addEventListener('click', () => {
//         const parrent = item.parentNode;
//
//         if (parrent.classList.contains('services__description-content-active')) {
//             parrent.classList.remove('services__description-content-active');
//         } else {
//             document.querySelectorAll('.services__description-item')
//                 .forEach((child) => child.classList.remove('services__description-content-active'));
//             parrent.classList.add('services__description-content-active');
//         }
//     })
// )
//
// // Сhanging adjacent block during accordion opening
// let sert = document.querySelector('.sertificats');
// let requis = document.querySelector('.requisites');
// let block = document.querySelector('.about__repute__description');
//
//
//
// sert.addEventListener('click', function () {
//     block.classList.toggle('about__repute__change');
// });
//
// requis.addEventListener('click', function () {
//     block.classList.toggle('about__repute__change');
// });

//Accordion for section About //
$(document).ready(function () {
//document.querySelectorAll('.about-open').forEach(function (item) {
    $('.about-open').each(function( index ) {
        return $(this).parent().click(function() {
            let parrent = $(this),
                $block = $('.about__repute__description');
            if (parrent.hasClass('about__content-active')) {

                parrent.removeClass('about__content-active');
                $block.children().animate({width:'400px'}, 100)
                $block.animate({width:'550px'}, 100).removeClass('about__repute__change');
            } else {
                document.querySelectorAll('.about__repute__block').forEach(function (child) {
                    return child.classList.remove('about__content-active');
                });

                //parrent.animate().addClass('about__content-active');
                parrent.animate().addClass('about__content-active');
                $block.children().animate({width:'280px'}, 500)
                $block.animate({width:'350px'}, 500).addClass('about__repute__change');
            }
        });
    }); // Accordion for section Services //
});


function acc (sel_class, act_class){
    $(sel_class).each(function( index ) {
        $(this).click(function() {
            if($(this).next(act_class).is(':visible')) {
                let self = $(this);
                $(this).next(act_class).slideUp(800,function() {
                });
            }
            else {
                $(sel_class).find(act_class).slideUp();
                $(this).next(act_class).slideDown();
                $('html, body').animate({
                    scrollTop: $(this).offset().top
                }, 2000);
                $(this).slideDown();
            }
        })
    })
}

$(document).ready(function () {

    acc('.services__list-title', '.services__content');



});
$(function() {

    //BEGIN
    $(".services__description-open").on("click", function(e) {

        e.preventDefault();
        let $this = $(this);

        if (!$this.hasClass("services__description-content-active")) {
            $(".services__description-content").slideUp(1500);
            $(".services__description-open").removeClass("services__description-content-active");
        }
        $this.toggleClass("services__description-content-active");
        $this.next().slideToggle();
    });
    //END

});

// Slide for clients

$(document).ready(function (){
    $('.clients__slide').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        infinite: false, //нужно?
        rows: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
})

// Slide for partners

$(document).ready(function (){
    $('.partners__slide').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        infinite: false, //нужно?
        rows: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
})

// Slide for review

$(document).ready(function (){
    $('.review__slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        infinite: false, //нужно?
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    rows: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })
})

// LightGallery for review
$(document).ready(function() {
    $('.review__slide').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });
});

//E-mail Ajax Send
$("#form").submit(function() {
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        $('#form').trigger( 'reset' );
        setTimeout(function () {

            // Done Functions
        }, 2000);
    });
    return false;
});

// hamburger

$('.header__burger').click(function (event) {
    $('.header__burger,.header__main__menu').toggleClass('active');
    $('body').toggleClass('lock');
})