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

