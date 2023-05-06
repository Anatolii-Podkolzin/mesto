const openPopUp = document.querySelector('.profile__edit-button');
const PopUp = document.querySelector('.popup');
const closePopUp = PopUp.querySelector('.popup__close');
const nameInput = PopUp.querySelector('.popup__input');
const workInput = PopUp.querySelector('.popup__input_work');
const defaultName = document.querySelector('.profile__name');
const defaultWork = document.querySelector('.profile__work');
const savePopUp = document.querySelector('.popup__button');

const PopUpOpened = function () {
    PopUp.classList.add('popup_opened');
    nameInput.value = defaultName.textContent;
    workInput.value = defaultWork.textContent;
}

const PopUpClose = function () {
    PopUp.classList.remove('popup_opened');
}

const inputNewValues = function (evt) {
    evt.preventDefault()
    defaultName.textContent = nameInput.value.substr(0, 24);
    defaultWork.textContent = workInput.value.substr(0, 30);
    PopUpClose();
}

openPopUp.addEventListener('click', PopUpOpened);
closePopUp.addEventListener('click', PopUpClose);
PopUp.addEventListener('submit', inputNewValues);