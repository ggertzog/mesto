let popup = document.querySelector('.popup');
let popupButtonOpen = document.querySelector('.profile__edit-button');
let popupButtonClose = document.querySelector('.popup__button-close');
let popupButtonSave = document.querySelector('.popup__button-submit');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-about');
let userName = document.querySelector('.profile__user-name');
let userAbout = document.querySelector('.profile__user-description');

function openPopupForm (){
    popup.classList.add('popup_opened');
    nameInput.value = userName.textContent
    jobInput.value = userAbout.textContent
}

function closePopupForm (){
    popup.classList.remove('popup_opened');
}

function savePopupForm () {
    userName.textContent = nameInput.value
    userAbout.textContent = jobInput.value
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value
    userAbout.textContent = jobInput.value
}

popupButtonOpen.addEventListener('click', openPopupForm);

popupButtonClose.addEventListener('click', closePopupForm);

popupButtonSave.addEventListener('click', savePopupForm);

popup.addEventListener('submit', handleFormSubmit);