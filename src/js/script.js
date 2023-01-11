const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const aboutUs = document.querySelector('.about-us');
const menuNavAbout = document.querySelector('.menu__nav-about');
const nav = document.querySelector('.menu');
const nameForm = document.querySelector('.map__contact--name');
const button = document.querySelector('.map__button');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})

button.addEventListener('click', function() {
    let x = document.querySelector('.map__contact--name').value;
    let y = document.querySelector('.map__contact--email').value;
    let j = document.querySelector('.map__contact-info-tel').value;
    if (x, y, j == "") {
        alert("Необходимо ввести все данные");
        return false;
    }
})


window.addEventListener('load', () => {
    const buttonLeft = document.querySelector('.btn__left');
    const buttonRight = document.querySelector('.btn__right');
    const slider = document.querySelector('.carusel');
    const images = document.querySelectorAll('.services__card img');
    let counter = 0;
    const stepSize = images[0].clientWidth;

    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

    buttonRight.addEventListener('click', () => {
        counter >= images.length - 1 ? (counter = -1) : null;
        slider.classList.add('transformAnimation');
        counter++;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });

    buttonLeft.addEventListener('click', () => {
        if (counter <= 0) counter = images.length;
        slider.classList.add('transformAnimation');
        counter--;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });
});

window.addEventListener('load', () => {
    const arrowLeft = document.querySelector('.team__arrow-left');
    const arrowRight = document.querySelector('.team__arrow-right');
    const sliderTwo = document.querySelector('.team__staff');
    const image = document.querySelectorAll('.team__staff-field img');
    let counter = 0;
    const stepSize = image[0].clientWidth;

    sliderTwo.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

    arrowRight.addEventListener('click', () => {
        counter >= image.length - 1 ? (counter = -1) : null;
        sliderTwo.classList.add('transformAnimation');
        counter++;
        sliderTwo.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });

    arrowLeft.addEventListener('click', () => {
        if (counter <= 0) counter = image.length;
        sliderTwo.classList.add('transformAnimation');
        counter--;
        sliderTwo.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });
});