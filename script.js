"use strict";

const buttonsChooseImg = document.querySelectorAll('.product-controls-list__item');
const colorChooseImg = document.querySelectorAll('.color-controls-list__item');
const buttonsChooseImgArrow = document.querySelectorAll('.product-controls__button');
const sliderList = document.querySelector('.main-photo');

for (let elem of buttonsChooseImg) {
    elem.addEventListener('click', function () {
        removePreviousPhoto();
        removePreviousButton();
        addActiveElements(elem);
    })
};

for (let elem of buttonsChooseImgArrow) {
    elem.addEventListener('click', function () {
        const activeButton = document.querySelector('.js-active');
        const previousSibling = activeButton.previousElementSibling;
        const nextSibling = activeButton.nextElementSibling;

        //Если нажали на стрелку вверх у которой есть предыдущий элемент
        if (event.currentTarget == buttonsChooseImgArrow[0] && previousSibling) {
            removePreviousButton();
            removePreviousPhoto();
            addActiveElements(previousSibling);
        }

        //В противном случае если нажали на стрелку вниз у которой есть следующий элемент
        else if (event.currentTarget == buttonsChooseImgArrow[1] && nextSibling) {
            removePreviousButton();
            removePreviousPhoto();
            addActiveElements(nextSibling);
        }
    })
};

for (let elem of colorChooseImg) {
    elem.addEventListener('click', function () {
        const color = elem.getAttribute('data-color');
        const activePhoto = sliderList.querySelector('.js_display_block');
        activePhoto.style.boxShadow = '0 0 10px 20px ' + color;
    })
}

function removePreviousPhoto() {
    const activePhoto = sliderList.querySelector('.js_display_block');
    activePhoto.classList.remove('js_display_block');
}

function removePreviousButton() {
    const activeButton = document.querySelector('.js-active');
    activeButton.classList.remove('js-active');
    const index = activeButton.getAttribute('data-img');
}

function addActiveElements(elem) {
    elem.classList.add('js-active');
    const index = elem.getAttribute('data-img');

    const needPhoto = sliderList.children[index];
    needPhoto.classList.add('js_display_block');
}