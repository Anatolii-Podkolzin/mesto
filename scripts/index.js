const openPopUp = document.querySelector('.profile__edit-button');
const popUp = document.querySelector('.popup');
const closePopUp = popUp.querySelector('.popup__close');
const nameInput = popUp.querySelector('.popup__input');
const workInput = popUp.querySelector('.popup__input_type_work');
const defaultName = document.querySelector('.profile__name');
const defaultWork = document.querySelector('.profile__work');
const savePopUp = document.querySelector('.popup__button');
const formPopUp = document.querySelector('.popup__form');

const PopUpOpened = function () {
    popUp.classList.add('popup_opened');
    nameInput.value = defaultName.textContent;
    workInput.value = defaultWork.textContent;
}

const PopUpClose = function () {
    popUp.classList.remove('popup_opened');
}

const inputNewValues = function (evt) {
    evt.preventDefault()
    defaultName.textContent = nameInput.value;
    defaultWork.textContent = workInput.value;
    PopUpClose();
}

openPopUp.addEventListener('click', PopUpOpened);
closePopUp.addEventListener('click', PopUpClose);
formPopUp.addEventListener('submit', inputNewValues);