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