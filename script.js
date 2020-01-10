const buttonChooseImg = document.querySelectorAll('.product-controls-list__item');
const colorChooseImg = document.querySelectorAll('.color-controls-list__item');
const buttonChooseImgArrow = document.querySelectorAll('.product-controls__button');
const sliderList = document.querySelector('.main-photo');

for (let elem of buttonChooseImg) {
    elem.addEventListener('click', function () {
        const mainPhoto = searchMainPhoto(elem);
        toogleActivePhoto(mainPhoto);
        removeSelectedButton(elem);
        elem.classList.add('js-active');
    });
}

for (let elem of colorChooseImg) {
    elem.addEventListener('click', function(event) {
        const index = elem.getAttribute('data-img');
        const selectedMainPhoto = sliderList.querySelector('.js_display_block');

        if (index == 1) {
            selectedMainPhoto.style.opacity = 0.9;
        };
        if (index == 2) {
            selectedMainPhoto.style.opacity = 0.8;
        };
        if (index == 3) {
            selectedMainPhoto.style.opacity = 0.7;
        }; 
        if (index == 4) {
            selectedMainPhoto.style.opacity = 0.6;
        }; 
        if (index == 5) {
            selectedMainPhoto.style.opacity = 0.5;
        };
    })
}

for (let elem of buttonChooseImgArrow) {
    elem.addEventListener('click', function(event) {
        const selectedButtonChooseImg = document.querySelector('.js-active');
        
        if (event.currentTarget == buttonChooseImgArrow[0] && (selectedButtonChooseImg !== buttonChooseImg[0])) {
            selectedButtonChooseImg.classList.remove('js-active');
            const previousSibling = selectedButtonChooseImg.previousElementSibling;
            previousSibling.classList.add('js-active');

            const mainPhoto = searchMainPhoto(previousSibling);
            toogleActivePhoto(mainPhoto);
        }
        
        if (event.currentTarget == buttonChooseImgArrow[1] && (selectedButtonChooseImg !== buttonChooseImg[buttonChooseImg.length-1])) {
            selectedButtonChooseImg.classList.remove('js-active');
            const nextSibling = selectedButtonChooseImg.nextElementSibling;
            nextSibling.classList.add('js-active');
            
            const mainPhoto = searchMainPhoto(nextSibling);
            toogleActivePhoto(mainPhoto);
        }
    })
}


//Находит нужное изображение к нажатой кнопке
function searchMainPhoto(elem) {
    const index = elem.getAttribute('data-img');
    const mainPhoto = sliderList.children[index - 1];

    return mainPhoto;
};

//Переключает старое и новое изображение
function toogleActivePhoto(mainPhoto) {
    const selectedMainPhoto = sliderList.querySelector('.js_display_block');
    selectedMainPhoto.classList.remove('js_display_block');
    mainPhoto.classList.add('js_display_block');
};

//Удаляет выделение у кнопки
function removeSelectedButton(elem) {
    const selectedButtonChooseImg = document.querySelector('.js-active');
    selectedButtonChooseImg.classList.remove('js-active');
}



