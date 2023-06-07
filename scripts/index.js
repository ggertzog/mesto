let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__container');
let popupButtonOpen = document.querySelector('.profile__edit-button');
let popupButtonClose = document.querySelector('.popup__button-close');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_about');
let userName = document.querySelector('.profile__user-name');
let userAbout = document.querySelector('.profile__user-description');

//функция открытия поп-апа, присваиваем инпутам текстовые значения
function openPopupForm (){
    popup.classList.add('popup_opened');
    nameInput.value = userName.textContent
    jobInput.value = userAbout.textContent
}

//функция закрытия поп-апа
function closePopupForm (){
    popup.classList.remove('popup_opened');
}

//функция отправки формы и присвоения текстовых значений
function savePopupForm (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value
    userAbout.textContent = jobInput.value
    closePopupForm();
}
//слушатель для открытия поп-апа
popupButtonOpen.addEventListener('click', openPopupForm);
//слушатель закрытия поп-апа
popupButtonClose.addEventListener('click', closePopupForm);
//слушатель отправки формы на сервер
popupForm.addEventListener('submit', savePopupForm);