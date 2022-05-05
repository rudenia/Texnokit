// Accordion for section About //
document.querySelectorAll('.about-open').forEach((item) =>
    item.addEventListener('click', () => {
        const parrent = item.parentNode;

        if (parrent.classList.contains('about__content-active')) {
            parrent.classList.remove('about__content-active');
        } else {
            document.querySelectorAll('.about__repute__block')
                .forEach((child) => child.classList.remove('about__content-active'));
            parrent.classList.add('about__content-active');
        }
    })
)

// Accordion for section Services //
document.querySelectorAll('.services__list-title').forEach((item) =>
    item.addEventListener('click', () => {
        const parrent = item.parentNode;

        if (parrent.classList.contains('services__content-active')) {
            parrent.classList.remove('services__content-active');
        } else {
            document.querySelectorAll('.services__list-open')
                .forEach((child) => child.classList.remove('services__content-active'));
            parrent.classList.add('services__content-active');
        }
    })
)

// Accordion for section Services (Description) //
document.querySelectorAll('.services__description-open').forEach((item) =>
    item.addEventListener('click', () => {
        const parrent = item.parentNode;

        if (parrent.classList.contains('services__description-content-active')) {
            parrent.classList.remove('services__description-content-active');
        } else {
            document.querySelectorAll('.services__description-item')
                .forEach((child) => child.classList.remove('services__description-content-active'));
            parrent.classList.add('services__description-content-active');
        }
    })
)

// Сhanging adjacent block during accordion opening
let sert = document.querySelector('.sertificats');
let requis = document.querySelector('.requisites');
let block = document.querySelector('.about__repute__description');



sert.addEventListener('click', function () {
    block.classList.toggle('about__repute__change');
});

requis.addEventListener('click', function () {
    block.classList.toggle('about__repute__change');
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