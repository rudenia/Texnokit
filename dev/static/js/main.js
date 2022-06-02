// Animation Start //

$(document).ready(function () {
    setTimeout(() => {
        animOnScroll();
    }, 1000)

    const animItems = document.querySelectorAll('._anim-items')

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
    }

    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {

            const animItem = animItems[index];
            const animItemsHeight = animItem.offsetHeight;
            const animItemsOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemsHeight / animStart;

            if (animItemsHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemsOffset - animItemPoint) && pageYOffset < (animItemsOffset + animItemsHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

// Animation End //

    // button UP
    let btn = $('#button-up');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });

// Sertificate anim
    $('.about-open').each(function (index) {
        return $(this).parent().click(function () {
            let parrent = $(this),
                $block = $('.about__repute__description');
            if (parrent.hasClass('about__content-active')) {

                parrent.removeClass('about__content-active');
                // $block.children().animate({opacity: '1'}, "slow")
                $block.animate({opacity: '1', height: '100%'}, "slow");
                $block.show().delay(1000).show()
            } else {
                document.querySelectorAll('.about__repute__block').forEach(function (child) {
                    return child.classList.remove('about__content-active');

                });

                //parrent.animate().addClass('about__content-active');
                parrent.animate().addClass('about__content-active');
                // $block.children().animate({opacity: '0', height: '100%'}, "slow")
                if ($(this).hasClass('about__repute__certificates')) {
                    //  $block.animate({ opacity: '0'});
                    $block.hide()
                }
            }
        });
    });

//Accordion for section services__list-title //
    function acc(sel_class, act_class) {
        $(sel_class).each(function (index) {
            $(this).click(function () {
                if ($(this).next(act_class).is(':visible')) {
                    let self = $(this);
                    $(this).next(act_class).slideUp(800, function () {
                    });
                } else {
                    $(sel_class).find(act_class).slideUp();
                    $(this).next(act_class).slideDown();
                    $('html, body').animate({
                        scrollTop: $(this).offset().top
                    }, slow);
                    $(this).slideDown();
                }
            })
        })
    }

    acc('.services__list-title', '.services__content');

//Accordion for section services__description //
    $(function () {
        //BEGIN
        $(".services__description-open").on("click", function (e) {

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

// anchor start //
    function anchor(selector) {
        $(selector).on("click", "a", function (event) {
            event.preventDefault();
            let id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 2000);
        });
    }

    anchor('#menu')
    anchor('#footer__menu')
// anchor end //

// fix menu start //
    let $menu = $("#menu");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $menu.hasClass("header__main__menu") && ($(window).width() >= '780')) {
            $menu.fadeOut('fast', function () {
                $(this).removeClass("header__main__menu")
                    .addClass("fixed")
                    .fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast', function () {
                $(this).removeClass("fixed")
                    .addClass("header__main__menu")
                    .fadeIn('fast');
            });
        }
    });
});

// fix menu end //

$(document).ready(function () {
    $('.clients__slide').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        infinite: false,
        //нужно?
        rows: 2,
        variableWidth: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
});

// Slide for partners

$(document).ready(function () {
    $('.partners__slide').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        infinite: false,
        //нужно?
        rows: 2,
        variableWidth: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
});

// Slide for review

$(document).ready(function () {
    $('.review__slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        infinite: false,
        //нужно?
        variableWidth: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                rows: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
});

// LightGallery for review

$(document).ready(function () {
    $('.review__slide').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function titleSrc(item) {
                return item.el.attr('title');
            }
        }
    });
});

//E-mail Ajax Send

$("#form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php",
        //Change
        data: th.serialize()
    }).done(function () {
        // alert('cgcb,jj');
        // $.magnificPopup.close(); /*-close form after */
        $('#form').trigger('reset');
        setTimeout(function () {// Done Functions
        }, 2000);
    });
    return false;
});

// hamburger

$('.header__burger').click(function (event) {
    $('.header__burger,.header__main__menu').toggleClass('active');
    $('body').toggleClass('lock');
});